<template>
    <div class="login">
        <div class="header">
            <div class="title" :class="{active: item.title == current}" v-for="item in header" :key="item.id" @click="changeCurrent(item.title)">
                {{ item.title }}
            </div>
        </div>
        <div class="content">
            {{ current }}
        </div>
    </div>
</template>

<script src="./Login.ts"></script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 50vh;
    @include flex-set(flex, column, center, center);
    .header {
        width: 50%;
        @include flex-set(flex, row, center, flex-start);
        border-bottom: 1px solid $gray;
        padding: 10px 0;
        .title {
            margin-right: 15px;
            cursor: pointer;
        }
        .active {
            font-weight: 700;
            border-bottom: 1px solid $black;
        }
    }
    .content {
        padding: 50px;
    }
}
</style>