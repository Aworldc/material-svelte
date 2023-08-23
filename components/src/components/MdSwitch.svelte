<script lang="ts">
    import '@material/web/switch/switch.js'

    type IconStyle = "none" | "on" | "both"

    export let selected: boolean = false
    export let icons: IconStyle = "none"
    export let disabled: boolean = false

    let element

    function update() {
        selected = element.selected
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

{#if icons == "none"}
    <md-switch {selected} {disabled} bind:this={element} on:click={update} />
{:else if icons == "on"}
    <md-switch {selected} {disabled} bind:this={element} on:click={update} icons show-only-selected-icon/>
{:else if icons == "both"}
    <md-switch {selected} {disabled} bind:this={element} on:click={update} icons />
{/if}
