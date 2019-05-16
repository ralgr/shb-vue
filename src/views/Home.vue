<template>
  <div class="home">
    <shcontainer centered80 textCenter dark>
      <shlayer xs12>
        <h1>Home View</h1>
      </shlayer>
      <!-- Normal Button Layer -->
      <shlayer xs12 xl6 class="pa3">
        <h2>Normal</h2>
        <shbutton primary>
          Button
        </shbutton>
        <shbutton secondary>
          Button
        </shbutton>
        <shbutton success>
          Button
        </shbutton>
        <shbutton alert>
          Button
        </shbutton>
        <shbutton error>
          Button
        </shbutton>
        <h2>Normal Round</h2>
        <shbutton primary round>
          Button
        </shbutton>
        <shbutton secondary round>
          Button
        </shbutton>
        <shbutton success round>
          Button
        </shbutton>
        <shbutton alert round>
          Button
        </shbutton>
        <shbutton error round>
          Button
        </shbutton>
      </shlayer>
      <!-- Outline Button Layer -->
      <shlayer xs12 xl6 class="pa3">
        <h2>Outline</h2>
        <shbutton primary outline>
          Button
        </shbutton>
        <shbutton secondary outline>
          Button
        </shbutton>
        <shbutton success outline>
          Button
        </shbutton>
        <shbutton alert outline>
          Button
        </shbutton>
        <shbutton error outline>
          Button
        </shbutton>
        <h2>Outline Round</h2>
        <shbutton primary round outline>
          Button
        </shbutton>
        <shbutton secondary round outline>
          Button
        </shbutton>
        <shbutton success round outline>
          Button
        </shbutton>
        <shbutton alert round outline>
          Button
        </shbutton>
        <shbutton error round outline>
          Button
        </shbutton>
      </shlayer>
      <!-- Txt Button Layer -->
      <shlayer xs12 xl6 class="pa3">
        <h2>Txt</h2>
        <shbutton primary txt>
          Button
        </shbutton>
        <shbutton secondary txt>
          Button
        </shbutton>
        <shbutton success txt>
          Button
        </shbutton>
        <shbutton alert txt>
          Button
        </shbutton>
        <shbutton error txt>
          Button
        </shbutton>
        <h2>Txt Round</h2>
        <shbutton primary round txt>
          Button
        </shbutton>
        <shbutton secondary round txt>
          Button
        </shbutton>
        <shbutton success round txt>
          Button
        </shbutton>
        <shbutton alert round txt>
          Button
        </shbutton>
        <shbutton error round txt>
          Button
        </shbutton>
      </shlayer>
    </shcontainer>
  </div>
</template>

<script>
import shbutton from '@/components/shbutton'
import shcontainer from '@/components/shcontainer'
import shlayer from '@/components/shlayer'

export default {
  name: 'home',

  components: {
    shbutton,
    shcontainer,
    shlayer
  }
}
</script>
