<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script></script>
<style lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(121, 189, 143, 0.6);
    .toast {
        font-size: $font-size;
        height: $toast-min-height;
        line-height: 1.8;
        box-shadow: 0 0 5px 0 rgba(255, 97, 96, 0.50);
        padding: 0 16px;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: $toast-bg;
        display: flex;
        align-items: center;
        border-radius: 4px;
    }
</style>