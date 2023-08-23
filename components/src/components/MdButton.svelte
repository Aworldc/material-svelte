<script lang="ts">
    import '@material/web/button/elevated-button.js'
    import '@material/web/button/filled-button.js'
    import '@material/web/button/outlined-button.js'
    import '@material/web/button/text-button.js'
    import '@material/web/button/tonal-button.js'
    import '@material/web/icon/icon.js'

    type ButtonStyle = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'

    export let style: ButtonStyle = "elevated"
    export let click: Function = ()=>{}
    export let icon: String | undefined = undefined
    export let trailingIcon: boolean = false
    export let disabled: boolean = false
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

{#if trailingIcon}
    {#if style == 'elevated'}
        <md-elevated-button {disabled}trailing-icon on:click={click}>
            <slot />
            {#if icon}
                <md-icon slot="icon">{icon}</md-icon>
            {/if}
        </md-elevated-button>
    {:else if style == 'filled'}
        <md-filled-button {disabled}trailing-icon on:click={click}>
            <slot />
            {#if icon}
                <md-icon slot="icon">{icon}</md-icon>
            {/if}
        </md-filled-button>
    {:else if style == 'tonal'}
        <md-tonal-button {disabled}trailing-icon on:click={click}>
            <slot />
            {#if icon}
                <md-icon slot="icon">{icon}</md-icon>
            {/if}
        </md-tonal-button>
    {:else if style == 'outlined'}
        <md-outlined-button {disabled}trailing-icon on:click={click}>
            <slot />
            {#if icon}
                <md-icon slot="icon">{icon}</md-icon>
            {/if}
        </md-outlined-button>
    {:else if style == 'text'}
        <md-text-button {disabled}trailing-icon on:click={click}>
            <slot />
            {#if icon}
                <md-icon slot="icon">{icon}</md-icon>
            {/if}
        </md-text-button>
    {/if}
{:else if style == 'elevated'}
    <md-elevated-button {disabled}on:click={click}>
        <slot />
        {#if icon}
            <md-icon slot="icon">{icon}</md-icon>
        {/if}
    </md-elevated-button>
{:else if style == 'filled'}
    <md-filled-button {disabled}on:click={click}>
        <slot />
        {#if icon}
            <md-icon slot="icon">{icon}</md-icon>
        {/if}
    </md-filled-button>
{:else if style == 'tonal'}
    <md-tonal-button {disabled}on:click={click}>
        <slot />
        {#if icon}
            <md-icon slot="icon">{icon}</md-icon>
        {/if}
    </md-tonal-button>
{:else if style == 'outlined'}
    <md-outlined-button {disabled}on:click={click}>
        <slot />
        {#if icon}
            <md-icon slot="icon">{icon}</md-icon>
        {/if}
    </md-outlined-button>
{:else if style == 'text'}
    <md-text-button {disabled}on:click={click}>
        <slot />
        {#if icon}
            <md-icon slot="icon">{icon}</md-icon>
        {/if}
    </md-text-button>
{/if}
