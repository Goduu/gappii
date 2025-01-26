interface HardModeWrapperProps {
    children: React.ReactNode;
    isHardMode?: boolean;
}

export const HardModeWrapper = ({ children, isHardMode }: HardModeWrapperProps) => {
    if (!isHardMode) return <>{children}</>;

    return (
        <div className="relative">
            < div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-sm" />
            < div className="relative" >
                <div
                    className="absolute animate-pulse -inset-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg blur opacity-10"
                />
                {children}
            </div >
        </div >
    );
}; 