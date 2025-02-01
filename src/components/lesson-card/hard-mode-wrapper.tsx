interface HardModeWrapperProps {
    children: React.ReactNode;
    isHardMode?: boolean;
}

export const HardModeWrapper = ({ children, isHardMode }: HardModeWrapperProps) => {
    if (!isHardMode) return <>{children}</>;

    return (
        <div className="relative">
            < div className="absolute inset-0 bg-linear-to-r from-red-500/20 to-purple-500/20 blur-xs" />
            < div className="relative" >
                <div
                    className="absolute animate-pulse -inset-0.5 bg-linear-to-r from-red-500 to-purple-500 rounded-lg blur-sm opacity-10"
                />
                {children}
            </div >
        </div >
    );
}; 