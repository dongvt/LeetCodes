class Solution {
public:
    vector<pair<string,int>> symboolList;
    string intToRoman(int num) {
        feedsymbolList();
        string roman = "";
        while (num > 0) {
            pair<string,int> number = getLargestSymbol(num);
            num -= number.second;
            roman += number.first;
        }

        return roman;
    }

    
    pair<string,int> getLargestSymbol(int num) {
        
        

        for(int i = symboolList.size() - 1 ; i >= 0 ; i--) {
            if(symboolList[i].second <= num) {
                return symboolList[i];
            }
        }
        throw "error";

    }

    void feedsymbolList() {
        pair<string,int> symbol;
        symbol.first = "I";
        symbol.second = 1;

        symboolList.push_back(symbol);

        symbol.first = "IV";
        symbol.second = 4;

        symboolList.push_back(symbol);

        symbol.first = "V";
        symbol.second = 5;

        symboolList.push_back(symbol);

        symbol.first = "IX";
        symbol.second = 9;

        symboolList.push_back(symbol);
        
        symbol.first = "X";
        symbol.second = 10;

        symboolList.push_back(symbol);

        symbol.first = "XL";
        symbol.second = 40;

        symboolList.push_back(symbol);

        symbol.first = "L";
        symbol.second = 50;

        symboolList.push_back(symbol);

        symbol.first = "XC";
        symbol.second = 90;

        symboolList.push_back(symbol);

        symbol.first = "C";
        symbol.second = 100;

        symboolList.push_back(symbol);

        symbol.first = "CD";
        symbol.second = 400;

        symboolList.push_back(symbol);

        symbol.first = "D";
        symbol.second = 500;

        symboolList.push_back(symbol);

        symbol.first = "CM";
        symbol.second = 900;

        symboolList.push_back(symbol);

        symbol.first = "M";
        symbol.second = 1000;

        symboolList.push_back(symbol);


    }
};