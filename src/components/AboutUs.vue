<template>
    <div>
        <div class="content-row">
            <div class="left text">
                <h3>Chapter 1. University of Vermont</h3>
            </div>
            <div class="right photo uvm"></div>
        </div>
        <div class="content-row">
            <div class="left photo colorado">
                <h3>Chapter 2. Colorado</h3>
            </div>
            <div class="right text"></div>
        </div>
        <div class="content-row">
            <div class="left text">
                <h3>Chapter 3. Boston</h3>
            </div>
            <div class="right photo boston"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content-row {
    width: 100%;
    display: flex;

    .text,
    .photo {
        width: 100%;
    }

    .text {
        text-align: left;
        padding: 20px;
    }
}
</style>