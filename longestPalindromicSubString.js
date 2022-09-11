// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

var longestPalindrome = function (s) {
  var start = 0,
    end = 0;
  for (var i = 0; i < s.length; i++) {
    var len1 = expandAroundCenter(s, i, i);
    var len2 = expandAroundCenter(s, i, i + 1);
    var len = Math.max(len1, len2);
    if (len > end - start) {
      start = parseInt(i - (len - 1) / 2);
      end = parseInt(i + len / 2);
    }
  }
  return s.substring(start, end + 1);
};

var expandAroundCenter = function (s, left, right) {
  var l = left,
    r = right;
  while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
    l--;
    r++;
  }
  return parseInt(r - l - 1);
};

console.log(longestPalindrome("babad"));
