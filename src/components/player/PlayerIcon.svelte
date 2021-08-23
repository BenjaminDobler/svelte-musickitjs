<script>
    export let type = "play";
    export let fill = '#EEEEEE';
</script>

<!-- Next -->
{#if type === "next"}
    <svg
        on:click
        width="34px"
        height="34px"
        viewBox="0 0 34 34"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"
        ><path
            d="M8.307,23c-0.536,0 -1.031,-0.38 -1.031,-1.124l0,-9.752c0,-0.744 0.495,-1.124 1.031,-1.124c0.293,0 0.569,0.097 0.888,0.283l8.26,4.617c0.436,0.243 0.729,0.494 0.805,0.874l0,-4.65c0,-0.744 0.502,-1.124 1.03,-1.124c0.302,0 0.578,0.097 0.896,0.283l8.261,4.617c0.511,0.283 0.829,0.574 0.829,1.1c0,0.518 -0.318,0.817 -0.829,1.1l-8.261,4.617c-0.318,0.186 -0.594,0.283 -0.896,0.283c-0.528,0 -1.03,-0.38 -1.03,-1.124l0,-4.658c-0.076,0.388 -0.369,0.639 -0.805,0.882l-8.26,4.617c-0.319,0.186 -0.595,0.283 -0.888,0.283Z"
            style="fill-rule:nonzero"
            fill="{fill}"
        /></svg
    >
{/if}

<!-- Previous -->
{#if type === "prev"}
    <svg
        on:click
        width="34px"
        height="34px"
        viewBox="0 0 34 34"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"
        ><path
            d="M26.97,23c0.536,0 1.03,-0.38 1.03,-1.124l0,-9.752c0,-0.744 -0.494,-1.124 -1.03,-1.124c-0.294,0 -0.57,0.097 -0.889,0.283l-8.26,4.617c-0.436,0.243 -0.729,0.494 -0.804,0.874l0,-4.65c0,-0.744 -0.503,-1.124 -1.031,-1.124c-0.301,0 -0.578,0.097 -0.896,0.283l-8.261,4.617c-0.511,0.283 -0.829,0.574 -0.829,1.1c0,0.518 0.318,0.817 0.829,1.1l8.261,4.617c0.318,0.186 0.595,0.283 0.896,0.283c0.528,0 1.031,-0.38 1.031,-1.124l0,-4.658c0.075,0.388 0.368,0.639 0.804,0.882l8.26,4.617c0.319,0.186 0.595,0.283 0.889,0.283Z"
            style="fill-rule:nonzero"
            fill="{fill}"
        /></svg
    >
{/if}

<!-- Play-->
{#if type === "play"}
    <svg
        on:click
        width="34px"
        height="34px"
        viewBox="0 0 34 34"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"
        ><path
            d="M28.228,18.327l-16.023,8.983c-0.99,0.555 -2.205,-0.17 -2.205,-1.318l0,-17.984c0,-1.146 1.215,-1.873 2.205,-1.317l16.023,8.982c1.029,0.577 1.029,2.077 0,2.654Z"
            style="fill-rule:nonzero"
            fill="{fill}"
        /></svg
    >
{/if}

<!-- Pause -->
{#if type === "pause"}
    <svg
        on:click
        width="34px"
        height="34px"
        viewBox="0 0 34 34"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"
        ><path
            d="M20.3,6l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Zm-9.5,0l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Z"
            style="fill-rule:nonzero"
            fill="{fill}"
        /></svg
    >
{/if}
