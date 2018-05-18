<template>
	<div class="home">
		首页
	</div>
</template>


<script>
	export default {
      computed: {
      	username () {
      		console.log(this.$router.params.username)
      	}
      },
	  methods: {
	    goBack () {
	      window.history.length > 1
	        ? this.$router.go(-1)
	        : this.$router.push('/')
	    }
	  }

	}


</script>


<style>
	

</style>