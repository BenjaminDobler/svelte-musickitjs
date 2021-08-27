<script>
</script>

<div
    class="search-box"
    tabindex="-1"
    role="combobox"
    aria-label="Suchen"
    aria-haspopup="listbox"
    aria-expanded="false"
    aria-controls="page-container__first-linked-element"
>
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        ><path
            d="M11.87 10.835c.018.015.035.03.051.047l3.864 3.863a.735.735 0 1 1-1.04 1.04l-3.863-3.864a.744.744 0 0 1-.047-.051 6.667 6.667 0 1 1 1.035-1.035zM6.667 12a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z"
        /></svg
    >

    <input
        aria-controls="web-navigation-search-hints"
        aria-autocomplete="none"
        aria-multiline="false"
        placeholder="Suchen"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        class="search-box__input dt-search-box__input"
        type="search"
    />

    <ul
        class="search-hints is-hidden"
        aria-label="Vorschläge"
        role="listbox"
        id="web-navigation-search-hints"
    >
        <!----><!---->
    </ul>
</div>

<style>

    .search-box {
        position: relative;
    }
    .icon {
        width: 12px;
        height: 12px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        fill: rgba(255, 255, 255, 0.92);
        -webkit-margin-start: 10px;
        margin-inline-start: 10px;
        z-index: 1;
    }

    input {
        width: 100%;
        height: 38px;
        padding-top: 6px;
        padding-bottom: 5px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 9px;
        border-width: 1px;
        border-style: solid;
        background-color: #1f1f1f;
        font-size: 15px;
        line-height: 1.46667;
        font-weight: 400;
        -webkit-padding-start: 34px;
        padding-inline-start: 34px;
        -webkit-padding-end: 5px;
        padding-inline-end: 5px;

        height: 32px;
        border-radius: 4px;
        border-color: rgba(0, 0, 0, 0.15);
        color: #f5f5f7;
        font-size: 12px;
        line-height: 1.25;
        font-weight: 400;
        letter-spacing: 0;
        -webkit-padding-start: 28px;
        padding-inline-start: 28px;
    }
</style>
