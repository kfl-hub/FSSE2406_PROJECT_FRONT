
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

createRoot(document.getElementById('root')!).render(

  <DevSupport
    ComponentPreviews={<ComponentPreviews />}
    useInitialHook={useInitial}
  >
  <App />
</DevSupport>

)
