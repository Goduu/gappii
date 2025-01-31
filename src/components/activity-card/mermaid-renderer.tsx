"use client"; // Enables client-side rendering

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { Button } from "../ui/button";
import { Minus, Plus, RotateCcw, RefreshCw, Info } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Alert, AlertDescription } from "../ui/alert";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface MermaidRendererProps {
  diagram: string;
  isEditingMode?: boolean;
  onDiagramChange?: (newDiagram: string) => void;
}

interface Position {
  x: number;
  y: number;
}

export const MermaidRenderer: React.FC<MermaidRendererProps> = ({
  diagram,
  isEditingMode = false,
  onDiagramChange
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef<Position | null>(null);
  const lastPosition = useRef<Position>({ x: 0, y: 0 });
  const animationFrame = useRef<number>();
  const [editedDiagram, setEditedDiagram] = useState(diagram);
  const [displayedDiagram, setDisplayedDiagram] = useState(diagram);
  const [error, setError] = useState<string | null>(null);

  const renderDiagram = async (diagramText: string) => {
    if (!ref.current || !diagramText.trim()) return;

    setError(null);

    try {
      // Generate unique ID to avoid conflicts
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      const { svg } = await mermaid.render(id, diagramText);

      if (ref.current) {
        ref.current.innerHTML = svg;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error rendering diagram';
      console.error('Error rendering diagram:', error);
      setError(errorMessage);

      if (isEditingMode) {
        toast({
          variant: "destructive",
          title: "Rendering Error",
          description: "Failed to render the diagram. Please check the syntax.",
        });
      }
    }
  };

  // Initialize mermaid and render first diagram
  useEffect(() => {
    const initAndRender = async () => {
      if (!initialized.current) {
        mermaid.initialize({
          startOnLoad: false, // Changed to false
          theme: 'default',
          securityLevel: 'loose',
        });
        initialized.current = true;
      }

      if (diagram) {
        await renderDiagram(diagram);
      }
    };

    initAndRender();
  }, [diagram]); // Run only once on mount

  // Handle diagram prop changes
  useEffect(() => {
    setEditedDiagram(diagram);
    setDisplayedDiagram(diagram);
    setError(null);

    if (initialized.current && diagram) {
      renderDiagram(diagram);
    }
  }, [diagram]);

  useEffect(() => {
    if (displayedDiagram !== diagram) {
      renderDiagram(displayedDiagram);
    }
  }, [displayedDiagram]);



  const handleRefresh = async () => {
    setError(null);

    try {
      // Test if the diagram is valid before updating
      await mermaid.parse(editedDiagram);

      // Update displayed diagram and notify parent
      setDisplayedDiagram(editedDiagram);
      onDiagramChange?.(editedDiagram);

      toast({
        title: "Success",
        description: "Diagram updated successfully",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Invalid diagram syntax';
      console.error('Invalid diagram syntax:', error);
      setError(errorMessage);

      toast({
        variant: "destructive",
        title: "Syntax Error",
        description: "Invalid diagram syntax. Please check your code.",
      });
    }
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2.5));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    lastPosition.current = { x: 0, y: 0 };
  };

  const updatePosition = (clientX: number, clientY: number) => {
    if (!isDragging.current || !dragStart.current) return;

    const newX = clientX - dragStart.current.x;
    const newY = clientY - dragStart.current.y;

    // Use requestAnimationFrame for smooth updates
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    animationFrame.current = requestAnimationFrame(() => {
      setPosition({ x: newX, y: newY });
      lastPosition.current = { x: newX, y: newY };
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStart.current = {
      x: e.clientX - lastPosition.current.x,
      y: e.clientY - lastPosition.current.y
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    updatePosition(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    dragStart.current = null;
  };

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 select-none">
      {isEditingMode && (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Textarea
              value={editedDiagram}
              onChange={(e) => {
                setEditedDiagram(e.target.value);
                setError(null);
              }}
              className={cn(
                "font-mono text-sm h-32",
                error && "border-red-500 focus-visible:ring-red-500"
              )}
              placeholder="Enter Mermaid diagram code..."
            />
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleRefresh}
                className="self-start"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
              <a href="https://mermaid.js.org/intro/#diagram-types" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="self-start"
                >
                  <Info className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription className="text-xs font-mono break-all">
                {error}
              </AlertDescription>
            </Alert>
          )}
        </div>
      )}
      <div className="flex gap-2 justify-end">
        <Button
          variant="outline"
          size="icon"
          onClick={handleZoomOut}
          disabled={scale <= 0.5}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleReset}
          disabled={scale === 1 && position.x === 0 && position.y === 0}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleZoomIn}
          disabled={scale >= 2.5}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div
        className={cn(
          "overflow-hidden rounded-lg bg-white p-4 cursor-grab active:cursor-grabbing",
          error && "border-red-500"
        )}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          ref={ref}
          className="mermaid origin-center transition-transform duration-75"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
          }}
        />
      </div>
    </div>
  );
};

