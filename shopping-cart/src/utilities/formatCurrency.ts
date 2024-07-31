//This code snippet is used to format numbers as currency values using JavaScript's Intl.NumberFormat API
//console.log(formatCurrency(1234.56)); // Outputs: $1,234.56

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
})

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
}