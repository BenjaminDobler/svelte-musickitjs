<script>
    import { onMount } from "svelte";

    export let minValue = 0;
    export let maxValue = 100;
    export let value = 0;
    let thumbElement;
    let sliderElement;
    let thumbRect;
    let sliderRect;
    let isPointerDown = false;
    let thumbOffset = 0;
    let maxX = 0;
    let minX = 0;

    onMount(() => {
        thumbRect = thumbElement.getBoundingClientRect();
        sliderRect = sliderElement.getBoundingClientRect();
    });

    function pointerdown(event) {
        thumbRect = thumbElement.getBoundingClientRect();
        sliderRect = sliderElement.getBoundingClientRect();
        thumbOffset = event.clientX - thumbRect.left;
        maxX = sliderRect.width - thumbRect.width;
        isPointerDown = true;
    }

    function pointermove(event) {
        if (isPointerDown) {
            let x = event.clientX - sliderRect.left - thumbOffset;
            if (x < minX) {
                x = minX;
            }

            if (x > maxX) {
                x = maxX;
            }
            const percentage = x / maxX;
            value = minValue + (maxValue - minValue) * percentage;
        }
    }

    function pointerup(event) {
        isPointerDown = false;
    }

    $: thumbPosition = (value / maxValue) * sliderRect?.width;
</script>

<svelte:window on:pointermove={pointermove} on:pointerup={pointerup} />

<div class="slider" bind:this={sliderElement}>
    <div
        class="thumb"
        style="transform: translateX({thumbPosition}px);"
        bind:this={thumbElement}
        on:pointerdown={pointerdown}
    />
</div>

<style>
    .thumb {
        width: 20px;
        height: 20px;
        background: #666;
        position: absolute;
        left: 0;
        top: 0;
    }

    .slider {
        width: 600px;
        height: 20px;
        position: relative;
        border: 1px solid #000;
    }
</style>
