<script>
    export let type = "artist";
    export let fill = "#fff";
</script>

{#if type === "playlist"}
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path
            d="M13.079 19.712c1.076 0 2.688-.79 2.688-2.922v-6.702c0-.388.073-.468.417-.542l3.347-.732a.48.48 0 00.403-.483V5.577c0-.388-.315-.637-.688-.564l-3.765.82c-.469.103-.725.359-.725.77l.015 8.144c.036.359-.132.593-.455.659l-1.164.242c-1.465.307-2.153 1.054-2.153 2.16 0 1.12.864 1.904 2.08 1.904zM12.046 8.675a.503.503 0 00.498-.498.497.497 0 00-.498-.49H5.498a.492.492 0 00-.498.49c0 .27.22.498.498.498h6.548zm0 2.607a.5.5 0 00.498-.505.49.49 0 00-.498-.483H5.498a.486.486 0 00-.498.483c0 .278.212.505.498.505h6.548zm0 2.608a.494.494 0 100-.989H5.498a.492.492 0 00-.498.49.49.49 0 00.498.499h6.548z"
            fill-rule="nonzero"
            fill-opacity=".95"
            {fill}
        /></svg
    >
{/if}

{#if type === "artist"}
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="web-navigation__nav-icon"
        aria-hidden="true"
        ><path
            d="M18.39 9.42c1.289-1.282 1.34-2.908.102-4.139-1.23-1.216-2.85-1.186-4.138.103l4.036 4.035zm-6.08 9.858a.66.66 0 00.667-.667v-4.328l-.051-1.048 2.234-2.072c.842.11 1.728-.235 2.49-1.004L13.62 6.124c-.776.761-1.098 1.633-.988 2.475l-6.805 7.332c-.278.3-.322.717.022 1.062L4.913 18.2a.31.31 0 00.037.418l.212.22a.309.309 0 00.425.029l1.208-.945c.33.344.755.3 1.048.022l3.8-3.516v4.182a.66.66 0 00.667.667zm-5.053-2.073l-.674-.674 6.453-6.84c.124.205.278.402.461.593.183.183.373.344.571.476l-6.811 6.445z"
            fill-rule="nonzero"
            fill-opacity=".95"
            {fill}
        /></svg
    >
{/if}

{#if type === "albums"}
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="web-navigation__nav-icon"
        aria-hidden="true"
        ><path
            d="M15.477 3.937c-.044-.61-.396-.937-1.07-.937H9.431c-.675 0-1.027.327-1.07.937h7.115zm1.24 2.013c-.11-.654-.425-1.025-1.159-1.025H8.222c-.741 0-1.057.37-1.167 1.025h9.662zm-.3 14.05c1.313 0 2.083-.756 2.083-2.252v-8.37c0-1.496-.778-2.252-2.304-2.252H7.804C6.27 7.126 5.5 7.875 5.5 9.38v8.369C5.5 19.244 6.27 20 7.804 20h8.612zm-.023-1.17H7.818c-.733 0-1.137-.392-1.137-1.148V9.437c0-.756.404-1.14 1.137-1.14h8.356c.727 0 1.145.384 1.145 1.14v8.245c0 .756-.418 1.148-.925 1.148z"
            fill-rule="nonzero"
            fill-opacity=".95"
            {fill}
        /></svg
    >
{/if}

{#if type === "tracks"}
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="web-navigation__nav-icon"
        aria-hidden="true"
        ><path
            d="M9.732 19.241c1.077 0 2.688-.79 2.688-2.922V9.617c0-.388.074-.469.418-.542l3.347-.732a.48.48 0 00.403-.484V5.105c0-.388-.315-.637-.689-.563l-3.764.82c-.47.102-.725.359-.725.769l.014 8.144c.037.36-.132.594-.454.66l-1.164.241c-1.465.308-2.154 1.055-2.154 2.16 0 1.122.864 1.905 2.08 1.905z"
            fill-rule="nonzero"
            fill-opacity=".95"
            {fill}
        /></svg
    >
{/if}

{#if type === "hearnow"}
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="web-navigation__nav-icon"
        aria-hidden="true"
        ><path
            d="M12 20c4.376 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C7.624 4 4 7.624 4 12c0 4.369 3.631 8 8 8zm0-1.333A6.634 6.634 0 015.341 12a6.628 6.628 0 016.651-6.667A6.653 6.653 0 0118.667 12 6.636 6.636 0 0112 18.667zm-1.467-3.6l4.463-2.636a.483.483 0 000-.839L10.533 8.95c-.337-.204-.784-.047-.784.33v5.458c0 .377.416.55.784.33z"
            fill-rule="nonzero"
            fill-opacity=".95"
            {fill}
        /></svg
    >
{/if}

{#if type === "radio"}
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="web-navigation__nav-icon"
        aria-hidden="true"
        ><path
            d="M19.359 18.57C21.033 16.818 22 14.461 22 11.89s-.967-4.93-2.641-6.68c-.276-.292-.653-.26-.868-.023-.222.246-.176.591.085.868 1.466 1.535 2.272 3.593 2.272 5.835 0 2.241-.806 4.3-2.272 5.835-.261.268-.307.621-.085.86.215.245.592.276.868-.016zm-13.85.014c.222-.238.176-.59-.085-.86-1.474-1.535-2.272-3.593-2.272-5.834 0-2.242.798-4.3 2.272-5.835.261-.277.307-.622.085-.868-.215-.238-.592-.269-.868.023C2.967 6.96 2 9.318 2 11.89s.967 4.929 2.641 6.68c.276.29.653.26.868.014zm1.957-1.873c.223-.253.162-.583-.1-.867-.951-1.068-1.473-2.45-1.473-3.954 0-1.505.522-2.887 1.474-3.954.26-.284.322-.614.1-.876-.23-.26-.622-.26-.891.039-1.175 1.274-1.827 2.963-1.827 4.79 0 1.82.652 3.517 1.827 4.784.269.3.66.307.89.038zm9.958-.038c1.175-1.267 1.827-2.964 1.827-4.783 0-1.828-.652-3.517-1.827-4.791-.269-.3-.66-.3-.89-.039-.23.262-.162.592.092.876.96 1.067 1.481 2.449 1.481 3.954 0 1.504-.522 2.886-1.481 3.954-.254.284-.323.614-.092.867.23.269.621.261.89-.038zm-8.061-1.966c.23-.26.13-.568-.092-.883-.415-.522-.63-1.197-.63-1.934 0-.737.215-1.413.63-1.943.222-.307.322-.614.092-.875s-.653-.261-.906.054a4.385 4.385 0 00-.968 2.764 4.38 4.38 0 00.968 2.756c.253.322.675.322.906.061zm6.18-.061a4.38 4.38 0 00.968-2.756 4.385 4.385 0 00-.968-2.764c-.253-.315-.675-.315-.906-.054-.23.261-.138.568.092.875.415.53.63 1.206.63 1.943 0 .737-.215 1.412-.63 1.934-.23.315-.322.622-.092.883s.653.261.906-.061zm-3.547-.967c.96 0 1.789-.814 1.789-1.797s-.83-1.789-1.789-1.789c-.96 0-1.781.806-1.781 1.789 0 .983.821 1.797 1.781 1.797z"
            fill-rule="nonzero"
            fill-opacity=".95"
            {fill}
        /></svg
    >
{/if}

{#if type === "explore"}
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="web-navigation__nav-icon"
        aria-hidden="true"
        ><path
            d="M9.92 11.354c.966 0 1.453-.487 1.453-1.49v-3.4c0-1.004-.487-1.483-1.453-1.483H6.452C5.487 4.981 5 5.46 5 6.464v3.4c0 1.003.487 1.49 1.452 1.49H9.92zm7.628 0c.965 0 1.452-.487 1.452-1.49v-3.4c0-1.004-.487-1.483-1.452-1.483h-3.46c-.974 0-1.46.479-1.46 1.483v3.4c0 1.003.486 1.49 1.46 1.49h3.46zm-7.65-1.073h-3.43c-.266 0-.396-.137-.396-.418v-3.4c0-.273.13-.41.396-.41h3.43c.265 0 .402.137.402.41v3.4c0 .281-.137.418-.403.418zm7.634 0h-3.43c-.273 0-.402-.137-.402-.418v-3.4c0-.273.129-.41.403-.41h3.43c.265 0 .395.137.395.41v3.4c0 .281-.13.418-.396.418zm-7.612 8.7c.966 0 1.453-.48 1.453-1.483v-3.407c0-.996-.487-1.483-1.453-1.483H6.452c-.965 0-1.452.487-1.452 1.483v3.407c0 1.004.487 1.483 1.452 1.483H9.92zm7.628 0c.965 0 1.452-.48 1.452-1.483v-3.407c0-.996-.487-1.483-1.452-1.483h-3.46c-.974 0-1.46.487-1.46 1.483v3.407c0 1.004.486 1.483 1.46 1.483h3.46zm-7.65-1.072h-3.43c-.266 0-.396-.137-.396-.41v-3.4c0-.282.13-.418.396-.418h3.43c.265 0 .402.136.402.418v3.4c0 .273-.137.41-.403.41zm7.634 0h-3.43c-.273 0-.402-.137-.402-.41v-3.4c0-.282.129-.418.403-.418h3.43c.265 0 .395.136.395.418v3.4c0 .273-.13.41-.396.41z"
            fill-rule="nonzero"
            fill-opacity=".95"
            {fill}
        /></svg
    >
{/if}

{#if type === "recently"}
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="web-navigation__nav-icon"
        aria-hidden="true"
        ><path
            d="M12 20c4.376 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C7.624 4 4 7.624 4 12c0 4.369 3.631 8 8 8zm0-1.333A6.634 6.634 0 015.341 12a6.628 6.628 0 016.651-6.667A6.653 6.653 0 0118.667 12 6.636 6.636 0 0112 18.667zm-.008-5.82a.54.54 0 00.55-.549V7.012a.54.54 0 00-.55-.541.532.532 0 00-.541.54v4.746H7.898a.534.534 0 00-.549.541c0 .314.235.55.549.55h4.094z"
            fill-rule="nonzero"
            fill-opacity=".95"
            {fill}
        /></svg
    >
{/if}

<style>
    svg {
        flex-shrink: 0;
    }
</style>
