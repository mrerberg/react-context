import { Routes, Route } from "react-router-dom";

import { PropDrillingApp } from "./examples/prop-drilling";
import { CompositionApp } from "./examples/composition";
import { ContextHookApp } from "./examples/context-hook";
import { ContextConsumerApp } from "./examples/context-consumer";
import { DynamicContextApp } from "./examples/dynamic-context";
import { DynamicContext2App } from "./examples/dynamic-context-2";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PropDrillingApp />} />
      <Route path="/composition" element={<CompositionApp />} />
      <Route path="/context-hook" element={<ContextHookApp />} />
      <Route path="/context-consumer" element={<ContextConsumerApp />} />
      <Route path="/dynamic-context" element={<DynamicContextApp />} />
      <Route path="/dynamic-context-2" element={<DynamicContext2App />} />
    </Routes>
  );
};
