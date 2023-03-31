import { Main } from "./docs/creating-a-scene";
import { isWebGLAvailable } from "./docs/webGL-compatibility-check";
import "./style.css";

isWebGLAvailable ? new Main() : alert("WebGL is not supported !");
