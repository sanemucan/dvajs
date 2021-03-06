import dva from "dva";
import "./index.css";
import createLoading from "dva-loading";
import createHistory from "history/createHashHistory";

// 1. Initialize
const app = dva({
  history: createHistory()
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(require('./models/example').default);
app.model(require("./models/posts").default); //add this otherwise throws an exception about not finding the namespace

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
