<script lang="ts">
    type FlexAlign = "left" | "center" | "right" | "justified" | "spaced"

    export let column: boolean = false;
    export let row: boolean = false;

    export let grow: boolean = true
    export let align: FlexAlign = "justified"
</script>

{#if column}
    <div class="mdflex-grow-{grow} mdflex-align-{align}" style="display: flex; flex-direction: column; gap: 10px">
        <slot></slot>
    </div>
{:else if row}
    <div class="mdflex-grow-{grow} mdflex-align-{align}" style="display: flex; flex-direction: row; gap: 10px">
        <slot></slot>
    </div>
{:else}
    <slot></slot>
{/if}

<style>
    :global(.mdflex-grow-true > *) {
        flex-grow: 1;
    }

    .mdflex-align-left {
        justify-content: start;
    }

    .mdflex-align-center {
        justify-content: center;
    }

    .mdflex-align-right {
        justify-content: end;
    }

    .mdflex-align-justified {
        justify-content: space-between;
    }

    .mdflex-align-spaced {
        justify-content: space-evenly;
    }
</style>