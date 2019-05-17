<template>
  <div class="home">
    <shcontainer dark>
      <shlayer class="pa3" xs12>
        <h1>Components</h1>
      </shlayer>
      <shlayer xs12>
        <shjumbotron white light>
          <template #jtitle>
            Jumbotron Sample
          </template>

          <template #jsub-title>
            Sample Subtitle
          </template>

          <template #jbody>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </template>

          <template #jbuttons>
            <shbutton success>
              Read more
            </shbutton>
          </template>
        </shjumbotron>
      </shlayer>
      <shlayer xs12>
        <h2>Header Component</h2>
        <shresponsive hero4>
          <!-- img here -->
          <template #heading-text>
            Hero Text
          </template>
        </shresponsive>
      </shlayer>
      <!-- Normal Button Layer -->
      <shlayer xs12 class="pa3">
        <h2>Buttons</h2>
        <shcontainer>
          <shlayer xs12 xl6>
            <h3>Normal</h3>
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
            <h3>Normal Round</h3>
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
          <shlayer xs12 xl6>
            <h3>Outline</h3>
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
            <h3>Outline Round</h3>
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
          <shlayer xs12 xl6>
            <h3>Txt</h3>
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
            <h3>Txt Round</h3>
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
      </shlayer>
    </shcontainer>
  </div>
</template>

<script>
import shbutton from '@/components/shbutton'
import shcontainer from '@/components/shcontainer'
import shlayer from '@/components/shlayer'
import shresponsive from '@/components/shresponsive'
import shjumbotron from '@/components/shjumbotron'

export default {
  name: 'home',

  components: {
    shbutton,
    shcontainer,
    shlayer,
    shresponsive,
    shjumbotron
  }
}
</script>
