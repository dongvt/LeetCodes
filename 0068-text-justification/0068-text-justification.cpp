class Solution {
public:
    vector<string> fullJustify(vector<string> &words, int maxWidth){
        vector<string> res;
        int i = 0; //Word index
        while( i < words.size()) {
            
            int currentWith = words[i].length();

            int wordCount = 1; //at least one word per line
            int j = i + 1; //j is a words index, which should begin with the next word after i since I already counted the first word
            
            while (j < words.size() && currentWith + words[j].length() + 1 <= maxWidth){
                currentWith += words[j].length() + 1;
                j++;
                wordCount++;
            }

            string currentLine = words[i];

            if(wordCount > 1 && j < words.size()) {
                string spaces = " ";

                int spaceCount /*between words*/ = (maxWidth - currentWith) / (wordCount - 1);
                int extraSpaces = (maxWidth - currentWith) % (wordCount - 1);

                for (int y = 0; y < spaceCount; y++) {
                    spaces += " ";
                }

                //IMPORTANT: Build the line
                for (int y = 1 ; y < wordCount ; y++) {
                    currentLine += spaces;
                    if(extraSpaces > 0) {
                        currentLine += " ";
                        extraSpaces--;
                    }
                    currentLine += words[y + i];
                }

            } else {
                for (int y = 1; y < wordCount; y++) {
                    currentLine += " " +  words[y + i];
                }

                for (int y = 0; y < maxWidth - currentWith; y++) {
                    currentLine += " ";
                }
            }
            res.push_back(currentLine);
            i = j;
            
        }

        return res;
    }
};