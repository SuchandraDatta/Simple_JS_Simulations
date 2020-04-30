rotor1="EKMFLGDQVZNTOWYHXUSPAIBRCJ"
            rotor2="AJDKSIRUXBLHWTMCQGZNPYFVOE"
            rotor3="BDFHJLCPRTXVZNYEIWGAKMUSQO"

            reflector="YRUHQSLDPXNGOKMIEBFZCWVJAT"
            rotor1Count=0;
            rotor2Count=0;
            rotor3Count=0;
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
                                }
            async function encrypt(index)
            {
                ele=document.getElementsByClassName("eachKey")
                ele[index].style.backgroundColor='white';
                ele[index].style.color='black';
                encryptedChar=rotor3.charAt(rotor2.charCodeAt(rotor1.charCodeAt(index)-65)-65)
                //window.alert(encryptedChar)
                after_reflector=reflector.charAt(encryptedChar.charCodeAt(0)-65)

                document.getElementsByClassName("screen")[0].innerHTML=after_reflector

                rotor1Count=(rotor1Count+1)%26;
                rotor1=rotor1.substring(1)+rotor1.substring(0,1);
                if(rotor1Count==0)
                rotor2Count=(rotor2Count+1)%26;
                rotor2=rotor2.substring(1)+rotor2.substring(0,1);
                if(rotor2Count==0)
                rotor3Count=(rotor3Count+1)%26;
                rotor3=rotor3.substring(1)+rotor3.substring(0,1);
                await sleep(1000)
                ele[index].style.backgroundColor='black';
                ele[index].style.color='white';
                //window.alert("After twisting rotor1:"+rotor1+" rotor2:"+rotor2+" rotor3: "+rotor3);

            }
            function defineRingSettings()
            {
                r1=document.getElementsByName("RingSettings1")[0].value
                //window.alert(r1)
                r2=document.getElementsByName("RingSettings2")[0].value
                //window.alert(r2)
                r3=document.getElementsByName("RingSettings3")[0].value
                //window.alert(r3)

                index=rotor1.indexOf(r1.toLocaleUpperCase())
                rotor1=rotor1.substring(index)+rotor1.substring(0, index)
                //window.alert(rotor1)

                index=rotor2.indexOf(r2.toLocaleUpperCase())
                rotor2=rotor2.substring(index)+rotor2.substring(0, index)
                //window.alert(rotor2)

                index=rotor3.indexOf(r3.toLocaleUpperCase())
                rotor3=rotor3.substring(index)+rotor3.substring(0, index)
                //window.alert(rotor3)
            }