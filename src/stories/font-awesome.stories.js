import {storiesOf} from "@storybook/html";

storiesOf("Font awesome", module)
    .add(
        "Cat",
        () => `
          <br/>
          <br/>
          <i class="fas fa-cat fa-5x"></i>
        `
    );
