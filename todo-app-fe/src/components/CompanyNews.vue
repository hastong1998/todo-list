<template>
    <div v-if="news.length > 0">
        <div class="container mt-4">
            <h2 class="mb-4">Company News</h2>
            <div class="row mb-5">
                <div class="col-md-6 mb-3 mb-md-0">
                    <div class="bg-light border h-100" style="min-height: 200px;"></div>
                </div>
                <div class="col-md-6">
                    <h3>{{ newsItems[0]?.title }}</h3>
                    <p>{{ newsItems[0]?.content }}</p>

                </div>
            </div>

            <div class="row mb-5">
                <div class="col-md-6 order-md-2 mb-3 mb-md-0">
                    <div class="bg-light border h-100" style="min-height: 200px;"></div>
                </div>
                <div class="col-md-6 order-md-1">
                    <h3>{{ newsItems[1]?.title }}</h3>
                    <p>{{ newsItems[1]?.content }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['news']),
        newsItems() {
            return this.news;
        }
    },
    created() {
        this.$store.dispatch('fetchNews');
    }
};
</script>
