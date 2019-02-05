import {storiesOf} from "@storybook/html";

storiesOf("Tooltip", module)
    .addDecorator(story => {
        $(function () {
            // Activate tooltip
            $('[data-toggle="tooltip"]').tooltip();
        });
        return story();
    })
    .add(
        "default",
        () => `

    <br/>
    <br/>
    
    <button id="magic" type="button" class="my-button btn-primary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
        Tooltip with HTML
    </button>
    <button type="button" class="my-button btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
        Tooltip on top
    </button>
    <button type="button" class="my-button btn-primary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
        Tooltip on right
    </button>
    <button type="button" class="my-button btn-primary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
        Tooltip on bottom
    </button>
    <button type="button" class="my-button btn-primary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
        Tooltip on left
    </button>
  `
    );
