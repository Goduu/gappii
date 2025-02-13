import {
    Activity,
    ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Backpack,
    BeakerIcon, Book, BookCopy, BookOpen, BookType, Brain, BrainCircuit,
    Calculator, Calendar, Camera, ChartBar,
    CheckCircle, Clipboard, ClipboardCheck,
    Clock, Code, CodeSquare, Compass, Computer, Cpu,
    Database, Dna, Download, Eye, FileCode, FileText,
    Filter, Flag, FlaskConical, Folder, FolderOpen, Gift,
    Globe, GraduationCap, Grid, Hand, Headphones, Heart, HelpCircle, History,
    ImageIcon, Key, Keyboard, Lamp, LampDesk, Layers,
    Layout, Library, Lightbulb, Link, List, Lock, Map, MapPin, Medal,
    MessageSquare, Microscope, Monitor, Moon, Music, Network,
    Newspaper, NotebookPen, Palette, Paperclip, Pencil, PenTool,
    Pin,
    Play, Podcast, Puzzle, Radio, Replace, Rocket, Ruler, Save, Search, Server,
    Settings, Share, ShieldCheck, Shuffle,
    Sigma, Sliders, Sparkles, Star, Sticker, Sun, SunDim,
    Table, Tablet, Target, Terminal, TestTube, TestTubes, TextSelect,
    Timer, Trash, TreeDeciduous, TreePalm, TreePine, Trophy, Tv, Type, Upload, User, UserCheck,
    Users, Video, Volleyball, Volume2, Wand2, Wrench, XCircle, ZoomIn
} from "lucide-react";
import { ReactElement } from "react";

export type IconMetadata = {
    label: string;
    icon: ReactElement;
    relatedTerms: string[];
}

export const iconMetadata: IconMetadata[] = [
    {
        label: "Brain",
        icon: <Brain />,
        relatedTerms: ["brain", "thinking", "cognition", "memory", "intelligence", "mindset"],
    },
    {
        label: "Graduation Cap",
        icon: <GraduationCap />,
        relatedTerms: ["graduationcap", "achievement", "degree", "academic", "success", "completion"],
    },
    {
        label: "Book",
        icon: <Book />,
        relatedTerms: ["book", "reading", "textbook", "literature", "course", "material"],
    },
    {
        label: "Lightbulb",
        icon: <Lightbulb />,
        relatedTerms: ["lightbulb", "idea", "insight", "creativity", "innovation", "understanding", "discovery"],
    },
    {
        label: "Target",
        icon: <Target />,
        relatedTerms: ["target", "goal", "objective", "aim", "focus", "purpose", "achievement"],
    },
    {
        label: "Clock",
        icon: <Clock />,
        relatedTerms: ["clock", "time", "schedule", "duration", "deadline", "planning", "management"],
    },
    {
        label: "Compass",
        icon: <Compass />,
        relatedTerms: ["compass", "direction", "guidance", "navigation", "exploration", "discovery", "path"],
    },
    {
        label: "Notebook",
        icon: <NotebookPen />,
        relatedTerms: ["notebook", "notes", "writing", "journal", "documentation", "record", "study"],
    },
    {
        label: "Puzzle",
        icon: <Puzzle />,
        relatedTerms: ["puzzle", "problem-solving", "challenge", "strategy", "logic", "solution", "game"],
    },
    {
        label: "Users",
        icon: <Users />,
        relatedTerms: ["users", "collaboration", "team", "group", "community", "peers", "social"],
    },
    {
        label: "Message Square",
        icon: <MessageSquare />,
        relatedTerms: ["messagesquare", "discussion", "communication", "feedback", "chat", "conversation", "dialog"],
    },
    {
        label: "Medal",
        icon: <Medal />,
        relatedTerms: ["medal", "achievement", "recognition", "award", "accomplishment", "success", "excellence"],
    },
    {
        label: "Calculator",
        icon: <Calculator />,
        relatedTerms: ["calculator", "math", "calculation", "computation", "numbers", "arithmetic", "analysis"],
    },
    {
        label: "Globe",
        icon: <Globe />,
        relatedTerms: ["globe", "global", "world", "international", "geography", "culture", "languages"],
    },
    {
        label: "Microscope",
        icon: <Microscope />,
        relatedTerms: ["microscope", "science", "research", "investigation", "observation", "analysis", "laboratory"],
    },
    {
        label: "Palette",
        icon: <Palette />,
        relatedTerms: ["palette", "art", "creativity", "design", "expression", "color", "aesthetics"],
    },
    {
        label: "Code",
        icon: <Code />,
        relatedTerms: ["code", "programming", "coding", "development", "technology", "software", "computing"],
    },
    {
        label: "Library",
        icon: <Library />,
        relatedTerms: ["library", "resources", "collection", "reference", "archive", "repository", "materials"],
    },
    {
        label: "Rocket",
        icon: <Rocket />,
        relatedTerms: ["rocket", "launch", "start", "initiative", "progress", "advancement", "innovation"],
    },
    {
        label: "Flag",
        icon: <Flag />,
        relatedTerms: ["flag", "milestone", "progress", "achievement", "checkpoint", "goal", "completion"],
    },
    {
        label: "Help Circle",
        icon: <HelpCircle />,
        relatedTerms: ["helpcircle", "support", "assistance", "guidance", "questions", "clarification"],
    },
    {
        label: "Star",
        icon: <Star />,
        relatedTerms: ["star", "favorite", "important", "featured", "highlight", "excellence", "achievement"],
    },
    {
        label: "Search",
        icon: <Search />,
        relatedTerms: ["search", "research", "explore", "find", "discover", "investigate", "query"],
    },
    {
        label: "Filter",
        icon: <Filter />,
        relatedTerms: ["filter", "sort", "organize", "categorize", "classify", "refine"],
    },
    {
        label: "Layout",
        icon: <Layout />,
        relatedTerms: ["layout", "structure", "organization", "arrangement", "format", "design", "plan"],
    },
    {
        label: "Link",
        icon: <Link />,
        relatedTerms: ["link", "connection", "reference", "relationship", "association", "resource", "source"],
    },
    {
        label: "Calendar",
        icon: <Calendar />,
        relatedTerms: ["calendar", "schedule", "planning", "dates", "events", "timeline", "organization"],
    },
    {
        label: "File Text",
        icon: <FileText />,
        relatedTerms: ["filetext", "document", "content", "text", "information", "material", "reading"],
    },
    {
        label: "Check Circle",
        icon: <CheckCircle />,
        relatedTerms: ["checkcircle", "complete", "finished", "verified", "approved", "correct", "success"],
    },
    {
        label: "Timer",
        icon: <Timer />,
        relatedTerms: ["timer", "duration", "time-limit", "countdown", "practice", "exercise", "activity"],
    },
    {
        label: "Video",
        icon: <Video />,
        relatedTerms: ["video", "multimedia", "lecture", "tutorial", "presentation", "content"],
    },
    {
        label: "Upload",
        icon: <Upload />,
        relatedTerms: ["upload", "submit", "share", "send", "contribute", "assignment", "work"],
    },
    {
        label: "History",
        icon: <History />,
        relatedTerms: ["history", "past", "timeline", "record", "progress", "tracking"],
    },
    {
        label: "Settings",
        icon: <Settings />,
        relatedTerms: ["settings", "preferences", "configuration", "options", "customize", "adjust"],
    },
    {
        label: "Layers",
        icon: <Layers />,
        relatedTerms: ["layers", "levels", "stages", "progression", "hierarchy", "structure", "organization"],
    },
    {
        label: "Share",
        icon: <Share />,
        relatedTerms: ["share", "distribute", "collaborate", "exchange", "communicate", "send"],
    },
    {
        label: "Arrow Left",
        icon: <ArrowLeft />,
        relatedTerms: ["arrowleft", "left", "previous", "back", "undo", "go-back"],
    },
    {
        label: "Arrow Right",
        icon: <ArrowRight />,
        relatedTerms: ["arrowright", "right", "next", "forward", "continue", "go-forward"],
    },
    {
        label: "Arrow Up",
        icon: <ArrowUp />,
        relatedTerms: ["arrowup", "up", "top", "above", "rise"],
    },
    {
        label: "Arrow Down",
        icon: <ArrowDown />,
        relatedTerms: ["arrowdown", "down", "bottom", "below", "descend"],
    },
    {
        label: "Activity",
        icon: <Activity />,
        relatedTerms: ["activity", "task", "job", "work", "project", "assignment"],
    },
    {
        label: "Book Open",
        icon: <BookOpen />,
        relatedTerms: ["bookopen", "read", "study", "learn", "knowledge"],
    },
    {
        label: "Backpack",
        icon: <Backpack />,
        relatedTerms: ["backpack", "supplies", "preparation", "tools", "equipment", "materials", "readiness"],
    },
    {
        label: "Brain Circuit",
        icon: <BrainCircuit />,
        relatedTerms: ["braincircuit", "neural networks", "AI", "machine learning", "cognitive science", "technology", "intelligence"],
    },
    {
        label: "Chart Bar",
        icon: <ChartBar />,
        relatedTerms: ["chartbar", "statistics", "data", "analysis", "comparison", "metrics", "visualization"],
    },
    {
        label: "Beaker",
        icon: <BeakerIcon />,
        relatedTerms: ["beaker", "chemistry", "experiment", "laboratory", "science", "research", "testing"],
    },
    {
        label: "Test Tubes",
        icon: <TestTubes />,
        relatedTerms: ["testtubes", "experiments", "testing", "laboratory", "research", "analysis", "science"],
    },
    {
        label: "Test Tube",
        icon: <TestTube />,
        relatedTerms: ["testtube", "experiment", "sample", "analysis", "research", "laboratory", "investigation"],
    },
    {
        label: "Dna",
        icon: <Dna />,
        relatedTerms: ["dnastrand", "biology", "genetics", "science", "molecular", "structure", "life"],
    },
    {
        label: "Flask Conical",
        icon: <FlaskConical />,
        relatedTerms: ["flaskconical", "chemistry", "experiment", "solution", "mixture", "laboratory", "science"],
    },
    {
        label: "Computer",
        icon: <Computer />,
        relatedTerms: ["computer", "technology", "computing", "digital", "hardware", "device", "workstation"],
    },
    {
        label: "Monitor",
        icon: <Monitor />,
        relatedTerms: ["display", "screen", "visual", "presentation", "digital", "interface"],
    },
    {
        label: "Tablet",
        icon: <Tablet />,
        relatedTerms: ["tablet", "mobile learning", "digital", "device", "technology", "portable", "interactive"],
    },
    {
        label: "Cpu",
        icon: <Cpu />,
        relatedTerms: ["cpu", "processing", "computing", "hardware", "technology", "system", "performance"],
    },
    {
        label: "Database",
        icon: <Database />,
        relatedTerms: ["database", "data", "storage", "information", "collection", "organization", "repository"],
    },
    {
        label: "Server",
        icon: <Server />,
        relatedTerms: ["server", "infrastructure", "network", "system", "storage", "computing", "technology"],
    },
    {
        label: "Network",
        icon: <Network />,
        relatedTerms: ["network", "connectivity", "communication", "system", "infrastructure", "connection", "networking"],
    },
    {
        label: "Folder",
        icon: <Folder />,
        relatedTerms: ["folder", "organization", "storage", "files", "collection", "directory", "management"],
    },
    {
        label: "Folder Open",
        icon: <FolderOpen />,
        relatedTerms: ["folderopen", "access", "content", "files", "materials", "resources", "storage"],
    },
    {
        label: "File Code",
        icon: <FileCode />,
        relatedTerms: ["filecode", "programming", "development", "coding", "script", "software", "technology"],
    },
    {
        label: "Code Square",
        icon: <CodeSquare />,
        relatedTerms: ["codesquare", "coding", "development", "programming", "software", "technology", "syntax"],
    },
    {
        label: "Terminal",
        icon: <Terminal />,
        relatedTerms: ["terminal", "command line", "programming", "interface", "development", "coding", "system"],
    },
    {
        label: "Keyboard",
        icon: <Keyboard />,
        relatedTerms: ["keyboard", "typing", "input", "interaction", "technology", "writing", "communication"],
    },
    {
        label: "Headphones",
        icon: <Headphones />,
        relatedTerms: ["headphones", "audio", "listening", "sound", "media", "music", "concentration"],
    },
    {
        label: "Volume2",
        icon: <Volume2 />,
        relatedTerms: ["volume2", "audio", "sound", "volume", "media", "listening", "playback"],
    },
    {
        label: "Music",
        icon: <Music />,
        relatedTerms: ["audio", "sound", "melody", "arts", "creativity", "expression"],
    },
    {
        label: "Podcast",
        icon: <Podcast />,
        relatedTerms: ["podcast", "audio content", "learning", "discussion", "media", "education", "broadcast"],
    },
    {
        label: "Radio",
        icon: <Radio />,
        relatedTerms: ["radio", "broadcast", "audio", "communication", "media", "transmission", "listening"],
    },
    {
        label: "Image",
        icon: <ImageIcon />,
        relatedTerms: ["image", "picture", "graphic", "illustration", "media", "representation"],
    },
    {
        label: "Camera",
        icon: <Camera />,
        relatedTerms: ["camera", "photography", "visual", "capture", "media", "documentation", "recording"],
    },
    {
        label: "Play",
        icon: <Play />,
        relatedTerms: ["play", "start", "begin", "video", "media", "tutorial", "demonstration"],
    },
    {
        label: "Tv",
        icon: <Tv />,
        relatedTerms: ["tv", "video", "broadcast", "media", "visual", "presentation", "display"],
    },
    {
        label: "Newspaper",
        icon: <Newspaper />,
        relatedTerms: ["newspaper", "current events", "reading", "information", "media", "articles"],
    },
    {
        label: "Book Type",
        icon: <BookType />,
        relatedTerms: ["booktype", "typography", "formatting", "text", "writing", "style", "design"],
    },
    {
        label: "Book Copy",
        icon: <BookCopy />,
        relatedTerms: ["bookcopy", "duplicate", "copy", "reference", "material", "resource", "document"],
    },
    {
        label: "Text Select",
        icon: <TextSelect />,
        relatedTerms: ["textselect", "highlighting", "selection", "text", "reading", "emphasis", "focus"],
    },
    {
        label: "Type",
        icon: <Type />,
        relatedTerms: ["type", "text", "typography", "writing", "font", "style", "formatting"],
    },
    {
        label: "List",
        icon: <List />,
        relatedTerms: ["list", "items", "organization", "structure", "bullet points", "outline", "sequence"],
    },
    {
        label: "Table",
        icon: <Table />,
        relatedTerms: ["table", "data", "organization", "structure", "information", "grid", "arrangement"],
    },
    {
        label: "Grid",
        icon: <Grid />,
        relatedTerms: ["grid", "layout", "organization", "structure", "arrangement", "pattern", "design"],
    },
    {
        label: "Sliders",
        icon: <Sliders />,
        relatedTerms: ["sliders", "adjustment", "settings", "control", "customization", "options", "preferences"],
    },
    {
        label: "Eye",
        icon: <Eye />,
        relatedTerms: ["eye", "view", "sight", "observation", "visibility", "attention", "focus"],
    },
    {
        label: "Sparkles",
        icon: <Sparkles />,
        relatedTerms: ["sparkles", "highlights", "featured", "special", "important", "notable", "key points"],
    },
    {
        label: "Sun",
        icon: <Sun />,
        relatedTerms: ["sun", "light mode", "brightness", "clarity", "day", "visibility", "illumination"],
    },
    {
        label: "Sun Dim",
        icon: <SunDim />,
        relatedTerms: ["sundim", "moon", "reduced brightness", "low light", "comfort", "visibility", "accessibility", "display"],
    },
    {
        label: "Moon",
        icon: <Moon />,
        relatedTerms: ["moon", "dark mode", "night", "rest", "accessibility", "display", "visibility"],
    },
    {
        label: "Lamp Desk",
        icon: <LampDesk />,
        relatedTerms: ["lampdesk", "study", "focus", "lighting", "workspace", "concentration", "reading"],
    },
    {
        label: "Lamp",
        icon: <Lamp />,
        relatedTerms: ["lamp", "illumination", "light", "brightness", "study", "focus", "visibility"],
    },
    {
        label: "Shield Check",
        icon: <ShieldCheck />,
        relatedTerms: ["shieldcheck", "security", "protection", "safety", "verification", "trust", "reliability"],
    },
    {
        label: "Lock",
        icon: <Lock />,
        relatedTerms: ["lock", "security", "privacy", "protection", "access control", "safety", "restriction"],
    },
    {
        label: "Key",
        icon: <Key />,
        relatedTerms: ["key", "access", "security", "permission", "authorization", "entry", "unlock"],
    },
    {
        label: "User Check",
        icon: <UserCheck />,
        relatedTerms: ["usercheck", "verification", "authentication", "approval", "confirmation", "validation", "access"],
    },
    {
        label: "User",
        icon: <User />,
        relatedTerms: ["user", "profile", "person", "identity", "account", "individual", "learner"],
    },
    {
        label: "Hand",
        icon: <Hand />,
        relatedTerms: ["hand", "interaction", "participation", "engagement", "action", "activity", "involvement"],
    },
    {
        label: "Heart",
        icon: <Heart />,
        relatedTerms: ["heart", "favorite", "liked", "important", "preferred", "saved", "bookmarked"],
    },
    {
        label: "Trophy",
        icon: <Trophy />,
        relatedTerms: ["trophy", "achievement", "success", "award", "recognition", "accomplishment", "victory"],
    },
    {
        label: "Gift",
        icon: <Gift />,
        relatedTerms: ["gift", "reward", "bonus", "incentive", "prize", "recognition", "motivation"],
    },
    {
        label: "Sticker",
        icon: <Sticker />,
        relatedTerms: ["sticker", "achievement", "recognition", "badge", "reward", "motivation", "feedback"],
    },
    {
        label: "Pin",
        icon: <Pin />,
        relatedTerms: ["pin", "bookmark", "save", "mark", "location", "important", "reference"],
    },
    {
        label: "Map Pin",
        icon: <MapPin />,
        relatedTerms: ["mappin", "location", "place", "position", "geography", "destination", "point"],
    },
    {
        label: "Map",
        icon: <Map />,
        relatedTerms: ["map", "geography", "location", "navigation", "exploration", "direction", "spatial"],
    },
    {
        label: "Replace",
        icon: <Replace />,
        relatedTerms: ["replace", "swap", "change", "substitute", "alternate", "switch", "modify"],
    },
    {
        label: "Shuffle",
        icon: <Shuffle />,
        relatedTerms: ["shuffle", "randomize", "mix", "reorder", "variety", "different", "change"],
    },
    {
        label: "Sigma",
        icon: <Sigma />,
        relatedTerms: ["sigma", "mathematics", "calculation", "sum", "statistics", "formula", "computation"],
    },
    {
        label: "Ruler",
        icon: <Ruler />,
        relatedTerms: ["ruler", "measurement", "precision", "scale", "dimension", "accuracy", "tools"],
    },
    {
        label: "Wrench",
        icon: <Wrench />,
        relatedTerms: ["wrench", "tools", "configuration", "setup", "adjustment", "maintenance", "customization"],
    },
    {
        label: "Wand2",
        icon: <Wand2 />,
        relatedTerms: ["wand2", "magic", "transform", "create", "modify", "enhance", "effect"],
    },
    {
        label: "Pen Tool",
        icon: <PenTool />,
        relatedTerms: ["pen", "design", "drawing", "creation", "artwork", "illustration", "graphics"],
    },
    {
        label: "Pencil",
        icon: <Pencil />,
        relatedTerms: ["pencil", "write", "edit", "create", "modify", "draw", "compose"],
    },
    {
        label: "Clipboard",
        icon: <Clipboard />,
        relatedTerms: ["clipboard", "copy", "paste", "temporary", "notes", "collection", "storage"],
    },
    {
        label: "Clipboard Check",
        icon: <ClipboardCheck />,
        relatedTerms: ["clipboardcheck", "verification", "completion", "checklist", "tasks", "assessment", "progress"],
    },
    {
        label: "Paperclip",
        icon: <Paperclip />,
        relatedTerms: ["paperclip", "attachment", "file", "document", "resource", "material", "connection"],
    },
    {
        label: "Trash",
        icon: <Trash />,
        relatedTerms: ["trash", "delete", "remove", "clear", "clean", "dispose", "eliminate"],
    },
    {
        label: "Save",
        icon: <Save />,
        relatedTerms: ["save", "store", "preserve", "keep", "backup", "record", "maintain"],
    },
    {
        label: "Download",
        icon: <Download />,
        relatedTerms: ["download", "obtain", "receive", "acquire", "save", "get", "retrieve"],
    },
    {
        label: "Zoom In",
        icon: <ZoomIn />,
        relatedTerms: ["zoomin", "magnify", "enlarge", "detail", "focus", "examine", "investigate"],
    },
    {
        label: "XCircle",
        icon: <XCircle />,
        relatedTerms: ["xcircle", "close", "cancel", "remove", "delete", "stop", "end"],
    },
    {
        label: "Tree Pine",
        icon: <TreePine />,
        relatedTerms: ["treepine", "plant", "nature", "forest", "wood", "leave"],
    },
    {
        label: "Tree Deciduous",
        icon: <TreeDeciduous />,
        relatedTerms: ["TreeDeciduous", "plant", "nature", "forest", "wood", "leave"],
    },
    {
        label: "Tree Palm",
        icon: <TreePalm />,
        relatedTerms: ["TreePalm", "plant", "nature", "forest", "wood", "leave", "beach"],
    },
    {
        label: "Volleyball",
        icon: <Volleyball />,
        relatedTerms: ["Volleyball", "sport", "game", "ball", "play", "competition"],
    },
]

export const getIconMetadataFromLabel = (label: string | null) => {
    return iconMetadata.find((icon) => icon.label === label)
}

export const getIconFromLabel = (label: string) => {
    const iconData = getIconMetadataFromLabel(label);
    return iconData?.icon;
}