<template lang="html">
  <button
    type="button"
    name="button"
    class="btn"
    :class="{
      round: round,
      outline: outline,
      txt: txt,
      primary: primary,
      secondary: secondary,
      success: success,
      alert: alert,
      error: error
      }"
    >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'shbutton',

  props: {
    /**
       * Modifies the button shape to round.
    */
    round: {
      type: Boolean
    },

    /**
       * Modifies the button shape to only show outline and text.
    */
    outline: {
      type: Boolean
    },

    /**
       * Modifies the button shape to show only text.
    */
    txt: {
      type: Boolean
    },

    /**
       * Change the button colour to primary.
    */
    primary: {
      type: Boolean
    },

    /**
       * Change the button colour to secondary.
    */
    secondary: {
      type: Boolean
    },

    /**
       * Change the button colour to success.
    */
    success: {
      type: Boolean
    },

    /**
       * Change the button colour to alert.
    */
    alert: {
      type: Boolean
    },

    /**
       * Change the button colour to error.
    */
    error: {
      type: Boolean
    }
  },

  data() {
    return {
      btnName: 'New'
    }
  }
}
</script>

<style lang="css" scoped>
  /* [[GENERAL BUTTON SETTINGS]] ================*/
  .btn {
    padding: 0.7em 1.5em;
    border-radius: 3px;
    background: silver;
    cursor: pointer;
    font-size: 0.9em;
    text-transform: uppercase;
    font-family: 'Roboto';
    font-weight: 400;
    opacity: 0.85;
    transition: all 0.5s;
    border: 2px rgba(22, 23, 22, 0) solid;
    margin: 0.3em;
  }

  .btn:hover {
    transition: all 0.7s;
    opacity: 2;
  }

  .btn:active {
    transition: all 0.1s;
    border: 2px rgba(22, 23, 22, 0.3) solid;
  }

/* [[REGULAR THEME SETTINGS]] ================*/
  .btn.primary {
    background: #568BEF;
  }

  .btn.secondary {
    background: #DBDBDB;
  }

  .btn.success {
    background: #41F9B5;
  }

  .btn.alert {
    background: #FFA143;
  }

  .btn.error {
    background: #DF6A6A;
  }

  /* [[ROUND SETTINGS]] ================*/
  .round {
    border-radius: 21px;
  }

  /* [[OUTLINE SETTINGS]] ===============*/
  .outline {
    background: transparent;
    border: 2px rgba(22, 23, 22, 1) solid;
  }

  .outline:active {
    background: rgba(22, 23, 22, 0.3);
    border: 2px rgba(22, 23, 22, 1) solid;
  }

  /* btn primary outline */
  .outline.primary {
    background: transparent;
    border: 2px rgba(86, 139, 239, 1) solid;
    color: #568BEF;
  }

  .outline.primary:active {
    background: rgba(86, 139, 239, 0.3);
    border: 2px rgba(86, 139, 239, 1) solid;
  }

  /* btn secondary outline */
  .outline.secondary {
    background: transparent;
    border: 2px rgba(219, 219, 219, 1) solid;
    color: #DBDBDB;
  }

  .outline.secondary:active {
    background: rgba(219, 219, 219, 0.3);
    border: 2px rgba(219, 219, 219, 1) solid;
  }

  /* btn success outline */
  .outline.success {
    background: transparent;
    border: 2px rgba(65, 249, 181, 1) solid;
    color: #41F9B5;
  }

  .outline.success:active {
    background: rgba(65, 249, 181, 0.3);
    border: 2px rgba(65, 249, 181, 1) solid;
  }

  /* btn success outline */
  .outline.alert {
    background: transparent;
    border: 2px rgba(255, 161, 67, 1) solid;
    color: #FFA143;
  }

  .outline.alert:active {
    background: rgba(255, 161, 67, 0.3);
    border: 2px rgba(255, 161, 67, 1) solid;
  }

  /* btn error outline */
  .outline.error {
    background: transparent;
    border: 2px rgba(223, 106, 106, 1) solid;
    color: #DF6A6A;
  }

  .outline.error:active {
    background: rgba(223, 106, 106, 0.3);
    border: 2px rgba(223, 106, 106, 1) solid;
  }

  /* [[TXT SETTINGS]] ================*/
  .txt {
    background: transparent;
  }

  .btn.txt:active {
    transition: all 0.1s;
  }

  /* btn primary txt */
  .btn.primary.txt {
    background: transparent;
    color: #568BEF;
  }

  .btn.primary.txt:active {
    transition: all 0.1s;
    border: 2px #568BEF solid;
  }

  /* btn secondary txt */
  .btn.secondary.txt {
    background: transparent;
    color: #DBDBDB;
  }

  .btn.secondary.txt:active {
    transition: all 0.1s;
    border: 2px #DBDBDB solid;
  }

  /* btn success txt */
  .btn.success.txt {
    background: transparent;
    color: #41F9B5;
  }

  .btn.success.txt:active {
    transition: all 0.1s;
    border: 2px #41F9B5 solid;
  }

  /* btn alert txt */
  .btn.alert.txt {
    background: transparent;
    color: #FFA143;
  }

  .btn.alert.txt:active {
    transition: all 0.1s;
    border: 2px #FFA143 solid;
  }

  /* btn error txt */
  .btn.error.txt {
    background: transparent;
    color: #DF6A6A;
  }

  .btn.error.txt:active {
    transition: all 0.1s;
    border: 2px #DF6A6A solid;
  }
</style>

<docs>
### Description
A button that can be modified using props.

### Variants

To modify the shape of the button, use the following props:
* ``` round ```
* ``` outline ```
* ``` txt ```

In addition to the shape, the color can be modified using the theme props:
* ``` primary ```
* ``` secondary ```
* ``` success ```
* ``` alert ```
* ``` error ```

All together making six variations of buttons as shown below.

Normal buttons:

```jsx
<shbutton normal>Push Me</shbutton>
<shbutton normal primary>Push Me</shbutton>
<shbutton normal secondary>Push Me</shbutton>
<shbutton normal success>Push Me</shbutton>
<shbutton normal alert>Push Me</shbutton>
<shbutton normal error>Push Me</shbutton>
```

Normal round buttons:

```jsx
<shbutton normal round>Push Me</shbutton>
<shbutton normal round primary>Push Me</shbutton>
<shbutton normal round secondary>Push Me</shbutton>
<shbutton normal round success>Push Me</shbutton>
<shbutton normal round alert>Push Me</shbutton>
<shbutton normal round error>Push Me</shbutton>
```
Normal outline buttons:

```jsx
<shbutton outline>Push Me</shbutton>
<shbutton outline primary>Push Me</shbutton>
<shbutton outline secondary>Push Me</shbutton>
<shbutton outline success>Push Me</shbutton>
<shbutton outline alert>Push Me</shbutton>
<shbutton outline error>Push Me</shbutton>
```

Round outline buttons:

```jsx
<shbutton outline round>Push Me</shbutton>
<shbutton outline round primary>Push Me</shbutton>
<shbutton outline round secondary>Push Me</shbutton>
<shbutton outline round success>Push Me</shbutton>
<shbutton outline round alert>Push Me</shbutton>
<shbutton outline round error>Push Me</shbutton>
```

Normal text buttons:

```jsx
<shbutton txt>Push Me</shbutton>
<shbutton txt primary>Push Me</shbutton>
<shbutton txt secondary>Push Me</shbutton>
<shbutton txt success>Push Me</shbutton>
<shbutton txt alert>Push Me</shbutton>
<shbutton txt error>Push Me</shbutton>
```

Round text buttons:

```jsx
<shbutton txt round>Push Me</shbutton>
<shbutton txt round primary>Push Me</shbutton>
<shbutton txt round secondary>Push Me</shbutton>
<shbutton txt round success>Push Me</shbutton>
<shbutton txt round alert>Push Me</shbutton>
<shbutton txt round error>Push Me</shbutton>
```
</docs>
