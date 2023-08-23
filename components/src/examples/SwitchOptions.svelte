<script lang="ts">
    import MdFlex from '../components/MdFlex.svelte'
    import MdSwitch from '../components/MdSwitch.svelte'
</script>

<MdFlex column>
    <MdFlex row grow={false} align="left">
        <MdSwitch />
        <MdSwitch icons="on" />
        <MdSwitch icons="both" />
    </MdFlex>
    <MdFlex row grow={false} align="left">
        <MdSwitch selected />
        <MdSwitch selected icons="on" />
        <MdSwitch selected icons="both" />
    </MdFlex>
    <MdFlex row grow={false} align="left">
        <MdSwitch disabled />
        <MdSwitch disabled icons="on" />
        <MdSwitch disabled icons="both" />
    </MdFlex>
    <MdFlex row grow={false} align="left">
        <MdSwitch disabled selected />
        <MdSwitch disabled selected icons="on" />
        <MdSwitch disabled selected icons="both" />
    </MdFlex>
<pre>
&lt;script lang=&quot;ts&quot;&gt;
    import MdFlex from './components/MdFlex.svelte'
    import MdSwitch from './components/MdSwitch.svelte'
&lt;/script&gt;

&lt;MdFlex column&gt;
    &lt;MdFlex row grow={"{false}"} align=&quot;left&quot;&gt;
        &lt;MdSwitch /&gt;
        &lt;MdSwitch icons=&quot;on&quot; /&gt;
        &lt;MdSwitch icons=&quot;both&quot; /&gt;
    &lt;/MdFlex&gt;
    &lt;MdFlex row grow={"{false}"} align=&quot;left&quot;&gt;
        &lt;MdSwitch selected /&gt;
        &lt;MdSwitch selected icons=&quot;on&quot; /&gt;
        &lt;MdSwitch selected icons=&quot;both&quot; /&gt;
    &lt;/MdFlex&gt;
    &lt;MdFlex row grow={"{false}"} align=&quot;left&quot;&gt;
        &lt;MdSwitch disabled /&gt;
        &lt;MdSwitch disabled icons=&quot;on&quot; /&gt;
        &lt;MdSwitch disabled icons=&quot;both&quot; /&gt;
    &lt;/MdFlex&gt;
    &lt;MdFlex row grow={"{false}"} align=&quot;left&quot;&gt;
        &lt;MdSwitch disabled selected /&gt;
        &lt;MdSwitch disabled selected icons=&quot;on&quot; /&gt;
        &lt;MdSwitch disabled selected icons=&quot;both&quot; /&gt;
    &lt;/MdFlex&gt;
&lt;/MdFlex&gt;
</pre>
</MdFlex>
