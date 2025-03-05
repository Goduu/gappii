# Shared Components for Learning Input Interfaces

This directory contains shared components that are used by both the `LearnInput` and `PathCocreation` components. These components were created to reduce code duplication and improve maintainability.

## Components

### ModalContainer

A reusable modal container that handles:
- Modal opening/closing
- Backdrop
- Title display
- ESC key detection for closing
- Body scroll locking when modal is open

```tsx
<ModalContainer
  isActive={boolean}
  onClose={() => void}
  title="Modal Title"
  hasSubmittedPrompt={boolean}
>
  {children}
</ModalContainer>
```

### UnifiedInputBox

A reusable input box component that handles:
- Text input with submit button
- Error display
- Language selection (optional)
- Restart button (optional)
- Beta label (optional)

```tsx
<UnifiedInputBox
  error={string}
  isActive={boolean}
  disabled={boolean}
  placeholder="Input placeholder"
  showLanguageSelector={boolean}
  showRestartButton={boolean}
  isUsed={boolean}
  setIsActive={(isActive: boolean) => void}
  onSubmit={(input: string) => Promise<void>}
  onRestart={() => void}
  language={SupportedLanguage}
  onLanguageChange={(language: SupportedLanguage) => void}
  betaLabel={boolean}
/>
```

### MessageDisplay

A reusable message display component that handles:
- Displaying messages in a chat-like interface
- Scrolling to bottom
- Different layouts for before/after first prompt
- Custom message rendering

```tsx
<MessageDisplay
  messages={messages}
  messagesEndRef={messagesEndRef}
  hasSubmittedPrompt={boolean}
  renderMessageContent={(message, index) => ReactNode}
  renderBottomContent={() => ReactNode}
  containerClassName="custom-container-class"
  messageListClassName="custom-message-list-class"
  inputContainerClassName="custom-input-container-class"
>
  {children} {/* Typically the input box */}
</MessageDisplay>
```

### NavigationOptions

A component that displays navigation options after successful creation of a path or lesson:
- Go to created path
- Go to created lesson
- Go to My Paths

```tsx
<NavigationOptions
  pathId="path-id" // Optional - if a path was created
  pathTitle="Path Title" // Optional - title of the created path
  lessonId="lesson-id" // Optional - if a lesson was created
  lessonTitle="Lesson Title" // Optional - title of the created lesson
  className="custom-class" // Optional - additional CSS classes
/>
```

## Hooks

### useModalState

A custom hook that manages the state for modal components:
- Active state
- Error state
- Messages state
- Submitted prompt state
- Refs for container and messages end
- Scroll to bottom functionality
- Close handler
- Reset state functionality

```tsx
const {
  isActive,
  setIsActive,
  error,
  setError,
  messages,
  setMessages,
  hasSubmittedPrompt,
  setHasSubmittedPrompt,
  containerRef,
  messagesEndRef,
  scrollToBottom,
  handleClose,
  resetState
} = useModalState({ isOpen, onClose });
```

## Implementation Notes

### LearnInput Component

The LearnInput component directly implements the UI structure without using the MessageDisplay component. This allows for more precise control over the layout, particularly keeping the input box centered before the first prompt. It now also includes navigation options after a lesson is created.

### PathCocreation Component

The PathCocreation component uses the useMessageState hook which provides its own state management. We've added hasSubmittedPrompt to this hook to maintain compatibility with the ModalContainer. It now also includes navigation options after a path is created.

## Usage

These components are designed to be used together to create consistent modal interfaces for learning input components. The `LearnInput` and `PathCocreation` components demonstrate how to use these shared components.

## Benefits

- **Reduced code duplication**: Common UI patterns are extracted into reusable components
- **Improved maintainability**: Changes to shared functionality only need to be made in one place
- **Consistent UI**: Both components use the same underlying UI components for a consistent look and feel
- **Separation of concerns**: UI components are separated from business logic
- **Flexibility**: Components can be used in different ways depending on the specific needs of each implementation
- **Enhanced user experience**: Navigation options provide clear next steps after content creation 