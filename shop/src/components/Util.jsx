export default function formatCarrency (num) {
    return Number(num.toFixed(3)).toLocaleString() + "تومان"
}