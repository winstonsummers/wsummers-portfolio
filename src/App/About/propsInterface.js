// This is you propsInterface. We pass it as the default props for our 
// components, which allows services like intelisense to provide better 
// example of the kind of props your constructor is looking for but it 
// also serves as an extendable object for writing props to pass to our components. 
// ie. const componentProps = Object.assign({}, propsToPass, propsInterface);
//        ...
//        <YourSuperAwesomeComponent {...componentProps} />
const propsInterface = {

}

export default propsInterface;

