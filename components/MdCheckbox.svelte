<script lang="ts">
    import '@material/web/checkbox/checkbox.js'

    export let label: string | undefined = undefined
    export let labelled: boolean = false

    export let change: Function = ()=>{}

    export let checked: boolean = false
    export let indeterminate = false
    export let name: string | undefined = undefined

    let id = `${Math.random().toString()}${Math.random().toString()}${Math.random().toString()}`

    let elem

    function update() {
        if (elem) {
            checked = elem.checked
            indeterminate = elem.indeterminate
        }
        change()
    }
</script>

{#if labelled}
    <span style="display: inline-flex; align-items: center;">
        <md-checkbox {id} {checked} {indeterminate} {name} bind:this={elem} on:change={update}></md-checkbox>
        <label style="font-family: 'Roboto', sans-serif; user-select: none;" for={id}>{label}</label>
    </span>
{:else}
    <md-checkbox {checked} {indeterminate} {name} bind:this={elem} on:change={update}></md-checkbox>
{/if}
