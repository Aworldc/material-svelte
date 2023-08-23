<script lang="ts">
    import '@material/web/fab/fab.js'
    import '@material/web/icon/icon.js'
    
    import MdProgress from './MdProgress.svelte';

    type FabStyle = "surface" | "primary" | "secondary" | "tertiary"
    type FabSize = "small" | "medium" | "large"

    export let icon: string | undefined = undefined
    export let text: string | undefined = undefined
    export let extended: boolean = false

    export let lowered: boolean = false
    export let style: FabStyle = "surface"
    export let size: FabSize = "medium"
</script>

{#if extended}
    {#if icon}
        <md-fab {lowered} variant={style} label={text} has-icon>
            <md-icon slot="icon">{icon}</md-icon>
        </md-fab>
    {:else}
        <md-fab {lowered} variant={style} label={text} />
    {/if}
{:else}
    <md-fab {lowered} variant={style} aria-label={text} {size}>
        <md-icon slot="icon">{icon}</md-icon>
    </md-fab>
{/if}