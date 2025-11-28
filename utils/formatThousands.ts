export default function formatThousands(value: string) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
