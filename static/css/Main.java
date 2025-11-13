public static class Main {
    System.out.println(areAlmostEqual(String word1, String word2));
}

//option 2
//   [4,0,0,0,0,0,0,]
//  [0,2,2,0,0,0,0,]


//option 1 Input: word1 = "aaaa", word2 = "bccb"
public static boolean areAlmostEqual(String word1, String word2){
 
    Map<String, Integer> freq1 = new HashMap<String, Integer>();
    Map<String, Integer> freq2 = new HashMap<String, Integer>();
    for(char word: word1){
        if(freq1.get(word) != null)){
            freq1.put(word, freq1.get(word)+1);
        } else {
            freq1.put(word,1);
        }
    }

    for(char word: word2){
        if(freq2.get(word) != null)){
            freq2.put(word, freq1.get(word)+1);
        } else {
            freq2.put(word,1);
        }
    }
    
    for (Map.Entry<String, Integer> entry : freq1.entrySet()) {
        if(freq2.get(entry.getKey()) != null && Math.abs(freq2.get(entry.getKey()) - entry.getValue())> 3){
            return false;
        }
    }
    for (Map.Entry<String, Integer> entry : freq2.entrySet()) {
        if(freq1.get(entry.getKey()) != null &&  Math.abs(freq1.get(entry.getKey()) - entry.getValue())> 3){
            return false;
        }
    }
    return true;

}