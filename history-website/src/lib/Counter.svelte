<script lang="ts">
  let count: number = 0;
  const INCREMENT = 1;
  const increment = () => {
    count += INCREMENT;
  };
</script>

<button on:click={increment}>
  count is {count}
</button>
