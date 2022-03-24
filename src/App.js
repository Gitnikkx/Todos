import { React, Component } from "react";
import "./App.css";
import axios from "axios";
import { Loading } from "./components/Loading";
import { Box } from "./components/Box";
import { Text } from "./components/Text";
import { Flex } from "./components/Flex";
import { LoginForm } from "./templates/LoginForm/LoginForm";
import { LoginForm2 } from "./templates/LoginForm2/LoginForm2";
import { FormFormik } from "./templates/FormFormik/FormFormik";

class App extends Component {
  state = { todos: [] };

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5");
    //   await new Promise(x => setTimeout(x, 1000));
    this.setState({ todos: result.data });
  }

  render() {
    return (
      <>
        {/* <Box>
          <Box m="5px auto" width="fit-content" p="1rem" borderBottom="2px dotted grey">
            <Text fontSize="3rem">TODO LIST</Text>
          </Box>
          <Box bg="#d296f5" p="2rem" className="container">
            {this.state.todos.length > 0 ? (
              <>
              <Box p="2rem" bg="#e4f596">
                <Box>
                  {this.state.todos.map((todo) => (
                    <>
                      <Flex bg="#f7c395" p="2rem" justifyContent="space-between">
                        <Box key={todo.id}>
                          <Text fontSize="2rem">{todo.title}</Text>
                        </Box>
                        <Box>
                          <input className="Tick" type="checkbox" checked={todo.completed} />
                        </Box>
                      </Flex>
                    </>
                  ))}
                </Box>
              </Box>
         </>   ) : (
              <Loading />
            )}
          </Box>


        </Box> */}

      {/* <LoginForm/> */}
      {/* <LoginForm2/> */}
      {/* <FormFormik/> */}
      </>
    );
  }
}

export default App;
