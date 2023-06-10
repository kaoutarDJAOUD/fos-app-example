<template>
    <div>
        <b-form @submit="onEdit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Title:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.title" type="text" required>=</b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Number of episodes:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.episodes" placeholder="Enter number of episodes" type="number"
                    min="0"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Status:" label-for="input-3">
                <b-form-select id="input-3" v-model="form.status" :options="statusOptions" required></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" label="Image url:" label-for="input-4">
                <b-form-input id="input-4" v-model="form.imgUrl" placeholder="Enter an url for the cover image"
                    type="url"></b-form-input>
            </b-form-group>
            <b-button class="mr-2 mt-1" type="submit" variant="primary">Edit</b-button>
            <b-button class="ml-2 mt-1" type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                title: this.$route.query.anime.title,
                episodes: this.$route.query.anime.episodes,
                status: this.$route.query.anime.status,
                imgUrl: this.$route.query.anime.imgUrl,
            },
            statusOptions: [
                { text: "Select One", value: null },
                "OnGoing",
                "Finished",
            ],
            show: true,
        };
    },
    methods: {
        onEdit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
            this.$store.dispatch("editAnime", { "index": this.$route.query.index, "anime": { ...this.form } });
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.title = "";
            this.form.episodes = 0;
            this.form.status = null;
            this.form.imgUrl = "";
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },
    },
};
</script>
<style></style>