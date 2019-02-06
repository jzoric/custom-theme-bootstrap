import {storiesOf} from "@storybook/html";

storiesOf("Buttons", module)
    .add(
        "Solid buttons",
        () => `
          <br/>
          <br/>
        
          <button type='button' class='my-button btn-primary'>Primary</button>    
          <button type='button' class='my-button btn-secondary'>Secondary</button>    
          <button type='button' class='my-button btn-success'>Success</button>    
          <button type='button' class='my-button btn-danger'>Danger</button>    
          <button type='button' class='my-button btn-warning'>Warning</button>    
          <button type='button' class='my-button btn-info'>Info</button>    
          <button type='button' class='my-button btn-light'>Light</button>    
          <button type='button' class='my-button btn-dark'>Dark</button>    
`
    )
    .add(
        "Outline buttons",
        () => `
          <br/>
          <br/>
          
          <button type='button' class='my-button btn-outline-primary'>Primary</button>    
          <button type='button' class='my-button btn-outline-secondary'>Secondary</button>    
          <button type='button' class='my-button btn-outline-success'>Success</button>    
          <button type='button' class='my-button btn-outline-danger'>Danger</button>    
          <button type='button' class='my-button btn-outline-warning'>Warning</button>    
          <button type='button' class='my-button btn-outline-info'>Info</button>    
          <button type='button' class='my-button btn-outline-light'>Light</button>    
          <button type='button' class='my-button btn-outline-dark'>Dark</button>    
`
    )
    .add(
        "Button group",
        () => `
          <br/>
          <br/>
        
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type='button' class='my-button btn-outline-danger'>Left</button>    
            <button type='button' class='my-button btn-outline-danger'>Middle</button>    
            <button type='button' class='my-button btn-outline-danger'>Right</button>
          </div>
`
    );
