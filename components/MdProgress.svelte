<script lang="ts">
    import '@material/web/progress/circular-progress.js'
    import '@material/web/progress/linear-progress.js'

    type ProgressStyle = "circular" | "linear"

    export let style: ProgressStyle = "linear"
    export let indeterminate: boolean = false
    export let value: number = 0
</script>

{#if style == "linear"}
    {#if indeterminate}
        <md-linear-progress indeterminate></md-linear-progress>
    {:else}
        <md-linear-progress {value}></md-linear-progress>
    {/if}
{:else}
    {#if indeterminate}
        <md-circular-progress indeterminate style="width:fit-content;"></md-circular-progress>
    {:else}
        <md-circular-progress {value} style="width:fit-content;"></md-circular-progress>
    {/if}
{/if}
