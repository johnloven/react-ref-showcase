import React, { forwardRef, ReactElement, useRef } from "react";

// From Skapa
function Focuser({ children }: { children: ReactElement }) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      {React.cloneElement(children, { ref })}
      <button onClick={() => ref.current?.focus()}>Focus</button>
    </div>
  );
}

// From Skapa
const Input = forwardRef<HTMLInputElement>((_, ref) => {
  return <input ref={ref} />;
});

function FixaFocuser({ children }: { children: ReactElement }) {
  return <Focuser>{children}</Focuser>;
}

function FixaInputWithoutRef() {
  return <Input />;
}

const FixaInputWithRef: React.FC = forwardRef<HTMLInputElement>((_, ref) => {
  return <Input ref={ref} />;
});

function App() {
  return (
    <>
      <h1>
        React <code>forwardRef</code> showcase
      </h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Using Skapa directly</h2>
        <Focuser>
          <Input />
        </Focuser>
        <h2>Using abstractions</h2>
        <FixaFocuser>
          <FixaInputWithRef />
        </FixaFocuser>
        <h2>
          Using abstractions without forwarding ref to <code>Input</code>
        </h2>
        <FixaFocuser>
          <FixaInputWithoutRef />
        </FixaFocuser>
      </div>
    </>
  );
}

export default App;
