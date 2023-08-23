<script lang="ts">
    import MdApp from './components/MdApp.svelte'
    import MdSwitch from './components/MdSwitch.svelte';

    let dick = true
    let cock = false
</script>

<MdApp>
    <MdSwitch bind:selected={dick}></MdSwitch>
    <MdSwitch bind:selected={dick} bind:disabled={cock}></MdSwitch>
    <MdSwitch bind:selected={cock}></MdSwitch>
</MdApp>
