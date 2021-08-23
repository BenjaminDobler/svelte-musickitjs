<script>
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();

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
            dispatch('scrub', value);
            
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
        height: 5px;
        background: #B8B8B8;
        position: absolute;
        left: 0;
        top: 0;
    }

    .slider {
        width: 100%;
        height: 5px;
        position: relative;
        background: #5f5f5f
    }
</style>
