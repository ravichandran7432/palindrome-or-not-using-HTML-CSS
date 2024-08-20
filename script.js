function check() {
    let text = document.getElementById("input").value;
    let Text = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let isPalindrome = Text === Text.split('').reverse().join('');
    if (isPalindrome) {
        document.getElementById("result").innerText = `"${text}" is a palindrome!`;
    } else {
        document.getElementById("result").innerText = `"${text}" is not a palindrome.`;
    }
}
