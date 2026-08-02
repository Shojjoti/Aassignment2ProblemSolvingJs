/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) = false) {
        return "Invalid";
   }
   
   if (times.length = 0) {
        return "Invalid";
    }
   
 let total = 0;
    for (let i = 1; i <= times.length; i++) {
        total = total + time[i];
    }
   
  return total / times;
}

