/*
 * http://www.cyber-i.com/
 * 최초 작성자 : dajinnim@cyber-i.com
 * 마지막 수정자 : dajinnim@cyber-i.com
 */
(function ($) {

    var productName = 'webPonent CHART 2.0';
    var productId = 'WC2';

    if (typeof WEBPONENT_CHART_LICENSE_KEY === 'undefined') {

        $.ajax({
            url : '/webponent.licenseKey.js',
            dataType : 'script',
            async : false
        });

        if (typeof WEBPONENT_CHART_LICENSE_KEY === 'undefined' || WEBPONENT_CHART_LICENSE_KEY === '') {

            alert(productName + '의 라이센트키를 입력해주세요.');
            return;
        }
    }

    var key = "SXGWLZPDOKFIVUHJYTQBNMACERxswgzldpkoifuvjhtybqmncare";

    function decodeStr(coded) {
        coded = decodeURIComponent(coded);
        var uncoded = "";
        var chr;
        for (var i = coded.length - 1; i >= 0; i--) {
            chr = coded.charAt(i);
            uncoded += (chr >= "a" && chr <= "z" || chr >= "A" && chr <= "Z") ?
                String.fromCharCode(65 + key.indexOf(chr) % 26) :
                chr;
        }
        return uncoded;
    }

    function appendTrialUi (wrappers) {

        var wrapper = $(wrappers);

        var trialUiWrapper = $('<div class="WEBPONENT-TRIAL-UI">');

        trialUiWrapper.css({
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'background-image': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAAwCAYAAABADKsLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAEHtJREFUeNrsnXt0VdWdxz83T14TCIK8pAKCkKGY1myfRUBNsdRqUXspaqd2UIKMGseODnQsXba2Y1JndBqXdoFoae1LruOI2jFKxtKXBXoCRUERIbwRIxAeAQTymD/275idnXPOPTf3htTkfte6697z2Pvss/d3//b399v7nBtpbm4mjTS6IzLSVZBGd0UWQLRiXbL5TAT+AbgMOFv2bQf+ADwD/DEVhY2VFqa8ApRSaRZ8guE4jl+7zgSmAweAHsAJ4EHHcfa0In8S+AzwH8CVHscK5FMC/B9wL/DXLt4Wi4ABwIPA2hTl2Rs4mqZ5QgbtPqABuNFxnGbZNwxYqJQqcRzn/WRkTz/gMeAvPsS3caWc+5ik7ao4E7gOWAV8IcG0A4BKYCNwUBqvGaiX793A/wKzxJKl4U38YcBox3EeBaYrpdYqpV4Wrt8FLGiv5o9I5W8C7kxw5MiSNJskj0gXboNsYIlY7bDoA1wFjAX6ApnW8aHANOApGUHHdFN+zwOuCeDu1cAvlVI5QAXwZWAxcIXjONuAv2uP7LkI+C/g4iQLP1AacDZwN7C6izbSIKAYWNYBeY8VKTkeONLNyD9X/Mo/AdeKprdH0N/K90HHcXYAO4zjDYlY/iFC1jdSQHwTFwN/lryHdNGGGpFk+n8CbgBuF7KbGA7ck4IynnuaR+G+YgCTxedkdLWxCTgPeB/IUErdrpRaopT6lhzPDUP+nsD9hkzpiLBohiGj7pdrdiUkS6ofA88DC2UUsRv7Kyko47tS/58/TXVyOVALvJwCo3eNaHwTvwG+IdLzi2IkVgP/qZS6BlgTT/ZcK87pp05ThfQBvi+RoTuBlxJ0cr4vDfiS4zh1HsdLgfNlc6PjOGU+I9w0sUrlxv4C4A50GPcMcUargScJF8IdCNwn5BogFul5kZAfJVhPT0jDuhjj4VfNAK4H/h7IA/aLA75ERm8vjBbSXCRRqutktBkPHJP7fAh4L8BQzpJ0o8VB3yb3uRg47qPNK4EiceDvkfRnAh8A/w08aqS9DR1SH2AbCKWUK33udRxnn1LqQeAXwALHce5XSuUCX5P0sz+2TM3NzWacP0dIX9LJFvNJ6QQnzZ1+cX6l1O+ASeiQ4ALx9M3j242OfBjIdxynSY5FZNT5jliLXwI3u5UJlHk4ny5+AHzb2H5BHCzTct8gDWrjLYmCfWhIpK1xRo7xwHpj+6QxjI8HYtJZ/fBTaVuzXs0p/p9I/dztkfYwcIV0fCzjsCzAAd8oHX+XbE8H/sc4fgvwLyJVbKwGJouRWCLnBmGkOLUopQbJvQ4Xnf+q4zjLbEvhIhN4VgrX2ZgtPTwKNIY4/zUhf2/gEaXUIcdxnpZKGGGNYHnABMDt8bej4/IuXpHvEuDhONe9X8j46wDnzA8TpKNNtQgYBFua7JbvYcDrPp0Mi2g9gJk+x79iRkMs5EnnmWCUdwBQJZEoP4wDlopGb/YZzfyiYhcC/wp8L1ECOY7zgdWunprbxX2JEF+NzOO+q0fw5G3j+dUd5/HENwqYe+VwRgxImWy/Tm48DCo9Oo+LSR7nTzR+f82ygpXAYPTknYsPRD8ORM9km5azLI4/VI+e/FrsEZkpFmsaxneYLtLQhOsEP24R/yjwTeBLwHNWmq8GtLNL/PelHo54jDyfM7Yfsoj/CHCWdJA/G/svESntBZf4a3xk5Gzj+DIPCbVC9i8TiZaQw4lU3IIwCXKyMvjmtLOZd81ILjynL/16ZZGVGWFgXg5XjO9P+Y1juE6dmaoO8O0Q1gzRqfuN7fOUUhkB5L9MRoVM9Cy1i1XAPtGXpgX8ZxkR9gE/F1nm4mzRyl44JsfmSCNe4qHzbwy4r7eFRLtFKpgWslE08WhLaiH6+1HR8TMkLIh1P35YJXlOA5RHeS82rP7Xjf2/F/myW0bDWVa6mQHX/DfR/peJETZxlozcFdJpa63j9ziOM10+te0h/y1Ar1BB1uLhXDKmn3+GkQg3XTqEqRPOSAX5e4XQeYh+r7LSjZbfU+R7jzHsXmZYsl4ekudqY18TsEU6ifvZ5UMIG78SArvYINLBxEUBt1YgeXtFRe6WvKda+2sta98svoeJSwMiaw8aFnQTOmZuBwZcCZZj6XOzjnoAdSHu85A1yi70OGdwR2hrl/xXhTn5/BF5TDy3X6iMvz5xKP16ZaWijFeFPO81a/vTSqnBwDmy/Rdgs/weqpQabll90MsHsJyvDGnYtcbnIR9CeIURbdhD+6AE6+NtsYCPy/ZY6/gG6bAm1lvb2eIIemG3tb3D2s70qCM3OLDW+uSHqKOdwClj+4iH3OrVEeTPMixgfG8rAWuem53BpHH5vLjmw2TL+OmQ5y33SBexCHDCiEpcINrU1PXVUieJVrZfPP+Ujw/gF3Sw8ZREc+rRq2R/LzLIdBz7ekRlvKyrV3gyDPzCsf3baWhteAU0mk5HVCXL0G9xMXZwYpwYO6S3EclrN0L1OMdxdiql3jFCfQWWbn9DSDRDtoussGClkKpBHFpzSN8e5/Jb/WxAiPvZH5DvbSFu/bBHVIYQ+5JtmMMe91EfcH5tB3E4kiz5Q+mT3j0yE8q8T4LnxyljWOtvkn+QYUnewFjXIZZ/pIfed8k81nKQd7aj7OeFkHHvJlk/dvrzpeOeDPBJDspIlwy2WdtPJxCdSyX6tzdhQksWDh5tSCjzAwmenwKYun+cWHeAasdxDkoHcIdZRcvam0bg1QAJ9RPCLcXOsbZnSNTExbW0XZLwWpL3/Kq13Re9dNeFO3tq+zaNSV63ytq+Ex267WjYI84Np8Oq8ubOI0wpCN/R3toZvOAwMyNCY1NKnyFeITo7WyRHrklmx3HqlVKORB7yLUl00Nh+DL2ozDUOV4r0qRKHsEmcsqXomVo/xyxLiLZayvRZDy2+xOdewlbMZvTM8nRj3w/F0d8o0bJxVr5lKajrd2W0nGb4EMvFJ3kLHY9vRC+//rWP/9MebLZ8tblKqajc1xjHcQ51CPl/s3Yfk8f1JxJCZR2oP8Wf3j3oeaxHdgalV32K80fksffQSX5UuZ2tHx5PulYcxzmqlPojevGUn5Va4RF2e8Xa3gTMFxKZuvl667x5Ys0rPYpzVAifg56p9MJdPg6q2yHDYq6MZGcZI7rf7PIDVodNBrcDDq1XaV4iHxPXoyctU4EXPfIa0B79nxEQIWiDvYdOhCJ+U1Mzj722gxMN3k77dHUmF4zqS2ZGhGH5udw5NXD93KEEK8eWEcdpPclT5dWvPfY9jJ4MCrp+Nq3X9vS1OtBcn8jFSZEJz/jke5zgiag2TYOetV4VcM5RKc/3SB12oNferIlz3nTahpXbi5+jl3KkzJmMO8RmRCI8M7dltDnZ0EROlrfLkJER4WSDf7RqUF5raTykX24qpc9SWj/mt8txnJOWRf2usX0KeNMnrx+hJ6W+KuQaLISvR098rbI6zkJaJmS2iaT5K3p2dwI6bOigZ4i3eFzvFHrJwrdI/Hnn7WJxv4Ce8R2NXi27Gx0i/QV6htrGdz06ElYUzBzCV1rH35FRp1ic+XFy3UYJErwlcsit443WNfd6lKnMakPTuW6Qe7wFPRmZLxJ0A96rR/3DRLKq8yBt48WtMHXCGcy+XI+qs57cQHZmhEnj8ikY2pteuZnU1Z9i3Y4j5GZl8I+T9RLrmx5/k1ONbfvVtMIBzJrcsgy7av1+Fr6+K8jy94OOeXtDGt0XWfG0Up8emUQvHMwXP6Nl1V0/28iR4zqK84JTywvW+bnZLeSfUtCf5etbh7FHDOz5MfGrtx5m7fYjVK3fn26JNDqN/Hl+Jzw0YwyDRZZ857nN7D14IjDDE6eaeOD5LTxw/TmUXHEWW2qPUVN7/OOO8fCN5wKweMVuXn1zX5gy5qWbKY2OJL8veubqiaojHzXwzp5wr4/ZsKuep1bs5tYpwyifeS4vr/2Qvr2y6JnTMun1+obQ1j6UBx+tWFdMS1zfD3Wx0sJFVjozcgP6gZCakGULSlNES9y73CPtKPTzCqCXPNd1UBub12lTju4sJeOSv/ylrVxe0J/X3z6QUMa/23iAW6doefOlz7Z+XnnBc5s9fYEkUUT8+HWVEA0fJwv0+p6w5A9KU2ccr6LtE1BROV7j0zlSSf6ygE6YJr8f3tt7jPf2Hks44z65WTQ0NZOV0dZw33zpEBY8tznV91KNjs3bxFxkEDPIurppa1JUnhopU5EQ3SZ/iVG+jkSNVS9pWORvIPlXF7Y2wyPzPIkPMG5ob/J6ZnH4eKjlD6FOipUWVmHE8KMV61zyx+SYu3+eYY3d33MCZE2xNXIkYj1jQv4Si4BFYpHdc5DrRGV/jeyv8pBYdrmLjHSuEVgUohOPAkqiFeuKxChUmZIwWrHOlmUlUsYaoDxWWljTVci/n8TXlQciNzt42VDPnAwOh4vKHkjxPZcZFnGUQSJbwiyk7YP8xZJmTgLkL0PHoqMG0aMGkWvkOgs9RoY5xsjgVe4Yel7DLmMJ+mGTah/Z43W9aLRiXUmstFB5yKWo5U8V0/KcxCcWLkM3pDrjTe/7O8d1R09Re/hk2Kw2dNC954s1nu8hh0ZJY9dJI0cMy53Imy1qLMuORf6YlKPMkF4Ro3O5Hcev3KZ0iqBXOFZ5XM9O/7EkjJUWRtCTVHVAkTEytpKUcp5bB6MkwNAlyF+Z6ozf2XOU1VvargxoBpb8YQ8J/CfGKx107+Wx0sJyHxlTI4ToL2QpCRFJCnKyTcK7o0edkD8q1zAd30VitfM9SFxufOqMvBfK9xwpt588c69X53ayWGlhtTUqePpDUl9dTvP/DL3gKaWPiz1auZ0bLhjE5IJ8+vfOZvu+j3h25V7WbDscNovjUraOQHWc4yWirUcleZ2YENPuRDEhYL5hkZdbow8e16+2OoLrP5RYHW6+zz3m+9x/tc/1iJUW1tEF4ZL/A/RrMf49lZk3NDbz7Mq9PLtyb3uz+AHJP3TRHhQbmrjcIMbSduRlWvhiw5LHPM6r8hgxquN04HOMvItomV9YGkeX58fZ7vIwvdIfopeL/q3gRVKz7rxdwSrLgsaSJEfMkhw1HuTOF7lTLucXy74g8s8zRos5ItVm+Flwq1MVWVIu6tMpuyzM8GajVNzjwK2dXK6n0Q+TNHbS9eusEaCO5F7haEucRRYZ3fkAR4650ZV8gmP0+ZbFN8tZFTBaVEm65dGKda508p0F7g6WH/TbDW5DPyywoxPKs0OufauUpbOwyCBoCS1x+hrLSrbH+ntZ1zlCSDe8WCTb8d6cPF/Imi+jQJnkUWWMAF6YIffnRn6icm+fF+e3W8B+Ua2JnuhX3s1Hr8/uSNRLIzxCwJrsjliHEufP+IoM6XE6nL5RRiQoERLmGxKmhvCz1G66uu5E+jDkdzEU/UatmaT+Twya0W81uxf9fshg05lez59GB8oeL+wBbkK/4i6VfyG0SvK8OQzx00ijM8jvYiX6MbnZeD8OFxbui2Avpe0jcWmk8TdJftAPYy9G/4/TEyT2WrlGSTMG/Rq+pnT1p/FJIr+LOvRf9SjavsXXC79FvyHtDlo/DJ1GGp2GZJcxr0X/ucJE9NP0k9Dvq4eWF6v+lHD/XZVGGqcVkebm5nQtpJGWPWmk0Z3w/wMAcSBvEHYiq0wAAAAASUVORK5CYII=')",
            'background-repeat': 'no-repeat',
            'background-position': 'center center',
            'z-index': '1',
            'opacity': '0.3'
        });
        /*
         https 에서 http 이미지를 불러와서 sec7111 보안 에러 경고가 뜸.
         트라이얼 버전이 아니라면 appendTrialUi 이 함수가 실행되지 않으나
         어떤 이유에서인지 이 구문이 발생하는 듯함.
         우선 제거하기로 결정함(20160229 평다진)
         */
        // var img = $('<img src="http://www.webponent.com/img/webponent.png"/>');

        // trialUiWrapper.append(img);

        wrapper.prepend(trialUiWrapper);

        wrapper.on('mouseenter', function () {

            trialUiWrapper.stop(true, true);
            trialUiWrapper.hide();
        });

        wrapper.on('mouseleave', function () {

            trialUiWrapper.stop(true, true);
            trialUiWrapper.fadeIn();
        });

        wrapper.data('check-trial-ui', setInterval(function () {

            if (wrapper.find('.WEBPONENT-TRIAL-UI').length === 0) {

                clearInterval(wrapper.data('check-trial-ui'));
                appendTrialUi(wrapper[0]);
            }
        }, 5000));
    }

    function makeLicenseObject (text) {

        var obj = {};

        var splitedArray = text.split(';');

        obj.product = splitedArray[0];
        obj.customer = splitedArray[2];
        obj.licenseType = splitedArray[3];
        obj.domains = splitedArray[5];
        obj.expireDate = splitedArray[6];

        return obj;
    }

    var TRIAL_UI = false;

    var decodedLicenseKey = decodeStr(WEBPONENT_CHART_LICENSE_KEY);

    var licenseObject = makeLicenseObject(decodedLicenseKey);

    if (licenseObject.licenseType === 'TRIAL') {

        TRIAL_UI = true;

        if (new Date() > new Date(licenseObject.expireDate * 1)) {

            alert(productName + ' ' + licenseObject.licenseType + '버전의 라이센스 유효기간이 지났습니다.');
            return;
        }

    } else if (licenseObject.licenseType === 'DEVELOP') {

        if (new Date() > new Date(licenseObject.expireDate * 1)) {

            TRIAL_UI = true;
        }
        /**
         licenseType ED시리즈 조건 추가(ver.150915 평다진)
         */
    } else if (licenseObject.licenseType === 'OFFICIAL' || licenseObject.licenseType === "ED001" || licenseObject.licenseType === "ED002" || licenseObject.licenseType === "ED003") {

        var domain = window.location.host.toUpperCase();

        TRIAL_UI = true;

        var splitedDomain = licenseObject.domains.split(',');

        for (var i = 0; i < splitedDomain.length; i++) {

            var regesteredSite = splitedDomain[i];

            if (domain.indexOf(regesteredSite) > -1) {

                TRIAL_UI = false;
            }
        }
    } else if (licenseObject.product !== productId) {

        TRIAL_UI = true;

    } else {

        alert('유효하지 않은 ' + productName + ' 라이센스입니다.');
        TRIAL_UI = true;
    }
    /**
     * 라이센스 DEBUG 검사용 DIV 생성
     * @param  {[type]} WEBPONENT_CHART_DEBUG [description]
     * @return {[type]}                       [description]
     */

    if(typeof WEBPONENT_CHART_DEBUG !== 'undefined') {

        if(WEBPONENT_CHART_DEBUG){

            var debugDiv = $('<div>');

            debugDiv.css({
                'background': '#fff',
                'border': '3px solid #ff0000',
                'color': '#000',
                'position': 'absolute'

            });

            var product = "";

            if(licenseObject.product == "WC") {
                product = "CHART";
            } else {
                product = "GRID";
            }

            var license = "TRIAL";
            if(licenseObject.licenseType === "ED001") {
                license = "BASIC";
            } else if(licenseObject.licenseType === "ED002"){
                license = "PLUS";
            } else if(licenseObject.licenseType === "ED003"){
                license = "PREMIUM";
            }

            var expireDate = licenseObject.expireDate;
            if(expireDate === "") {
                expireDate = "없음";
            }

            var html = "";
            html += "TYPE : " + product + '<br/>';
            html += "License : " + license + '<br/>';
            html += "Domain : " + licenseObject.domains + '<br/>';
            html += "<span style='color:#ff0000;'>TRIAL : " + TRIAL_UI + '</span><br/>';
            html += "EndDate : " + expireDate + '<br/>';



            debugDiv.html(html);

            setTimeout(function(){
                $('body').append(debugDiv);
            }, 1000);
        }
    }

    (function() {

        /**
         * [self description]
         * @type {Object}
         */
        var self = {};


        /**
         * 기본옵션설정
         * 주로 데이터나 포맷, 기능 사용 유무 등을 설정한다.
         * @type {Object}
         */
        var defaultOptions = {
            data: {
                data: null, 				// [{}, {}] 형태로 데이터 직접입력
                url: '', 					// 데이터 URL 입력
                type: 'json',				// 데이터 형식 text | json
                reverse: false,				// 데이터 흐름 true 이면 반대로
                jsonDepth: 'output.result', // jsonDepth : String 으로 입력
                prevClose: null 			// 전일종가 기준, null인경우 데이터의 첫번째가 기준이 된다.
            },
            /* return 값이 있는 Function */
            format: {
                xAxis: null,
                yAxis: null
            },
            /* 외부에서 컨트롤 하는 Function : Return 값 없음 */
            func: {
                tip: null,
                info: null, 		// 종합차트에서 사용하는 함수
                tickClick: null,
                itemClick: null
            },
            /* 시계열 */
            timeSlice: {
                delay: 300,
                slider: null,
                play: null,
                pause: null,
                stop: null,
                data: null,
                status: 'stop'
            },
            /* 사용여부 모음 */
            use: {
                stock: false,
                aCrossLine: true,	// 십자선
                hCrossLine: false,	// 가로선
                vCrossLine: false,	// 세로선
                tip: true,			// 툴팁 사용
                multiYAxis: false,	// 멀티축 사용
                animate: false,		// 애니메이션 사용
                reSize: false,		// 리사이즈 사용
                selectItem: true,	// 마우스오버시에 활성화아이템 여부 기본:활성화
                clickXAxis: false,	// x축 label 클릭시 이벤트 발생
                magnet: false,		// 크로스라인 및 툴팁이 아이템 위치에 자석처럼 붙는 기능
                axisTip: false 		// 마우스 위치에 있는 아이템의 정보를 축 위치에 툴팁으로 보여주는 기능 {x: false|true, y: false|true} 혹은 false|true
            },
            animate: {
                type: 'linear', // linear, >(easeIn, ease-in), <(easeOut, ease-out),<>(easeInOut, ease-in-out), backIn(back-in),backOut(back-out), elastic,bounce
                speed: 500,
                seriesSpeed: 100
            },
            loadingBar : {
                use : false,
                select: null
            },
            division: null
        };
        /**
         * 기본스타일설정
         * 주로 색상, 형태, 크기 등 디자인적인 것을 설정한다.
         * @type {Object}
         */
        var defaultStyles = {
            layout: {
                paddingTop: 57, paddingRight: 30, paddingBottom: 10, paddingLeft: 10,
                color: '#f8f8f8', opacity: 1,
                line: {
                    color: '#eaeaea', width: 1
                }
            },
            graph: {
                color: '#f8f8f8', opacity: 0, paddingTop: 0, paddingRight: 10, paddingBottom: 0, paddingLeft: 10,
                line: {
                    top: { color: '#cccccc', width: 0, opacity: 1 },
                    left: { color: '#d5d5d5', width: 1, opacity: 1 },
                    right: { color: '#d5d5d5', width: 1, opacity: 1 },
                    bottom: { color: '#d5d5d5', width: 1, opacity: 1 }
                }
            },
            yAxis: {
                width: 60, position: 'left', paddingLeft: 10, paddingRight: 10, baseAtZero: false,
                maxNumber: null, minNumber: null, fit: false,
                useValue: {min: true, max: false},
                text: {family: 'Noto Sans KR', size: 15, color: '#666', align: 'right', style: 'normal', opacity: 1},
                line: {color: '#cccccc', width: 1, opacity: 1}				},
            xAxis: {
                height: 30, paddingTop: 13, betweenLabels: false, gap: 10, baseAtStart: false,
                useValue: {first: true, last: false, all: false },
                text: {family: 'Noto Sans KR', size: 15, color: '#666', align: 'center', style: 'normal', opacity: 1},
                line: {color: '#e3e3e3', width: 1, opacity: 1}
            },
            crossLine: {
                color: '#465866', width: 1, opacity: 1, style: ' ' //[“”, “-”, “.”, “-.”, “-..”, “. ”, “- ”, “--”, “- .”, “--.”, “--..”]
            },
            tip: {
                className: null,		// MOUSE TOOL TIP
                xAxisclassName: null,	// XAXIS TOOL TIP
                yAxisclassName: null,	// YAXIS TOOL TIP
                color: '#465866', paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5,
                line: {
                    color: '#fff', width: 1, style: 'solid'
                },
                text: {
                    color: '#fff', family: 'Noto Sans KR', style: 'normal',  size: 15
                }
            }
        };
        /**
         * 멀티축 사용시 기본 Y축 스타일 설정
         * @type {Object}
         */
        var defaultMultiSeriesStyles = {
            yAxis: {
                width: 60, position: 'left', paddingLeft: 10, paddingRight: 10, baseAtZero: false,
                maxNumber: null, minNumber: null, fit: false,
                useValue: {min: false, max: false},
                text: {family: 'Noto Sans KR', size: 12, color: '#666', align: 'right', style: 'normal', opacity: 1}
            }
        };
        /**
         * 기본 시리즈 설정 : 없다.
         * @type {Object}
         */
        var defaultSeries = {};
        /*
         영역분할 기본 설정
         */
        var DIVISION = [0, [100], [50, 50], [40, 30, 30], [40, 20, 20, 20]];

        var EVENT = {
            /**
             * 차트가 드로우 완료되면 발생(애니메이션 종료시점과는 관련없음)
             * @type {String}
             */
            COMPLETE : "drawCompleted",
            /**
             * 시리즈가 그려지기 직전 영역별로 이벤트 발생
             * @type {String}
             */
            BEFORE_DRAW_SERIES_IN_GRAPH : "beforeDrawSeriesInGraph"
        };

        // 마우스 따라다니는 Tick
        var mouseMoveTick = null;

        var g = {doc: document, win: window};
        /*
         SVG인지 VML 인지 체크
         */
        var TYPE = (g.win.SVGAngle || g.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");
        /*
         터치가 지원되는 기기인지 체크
         */
        var TOUCHDEVICE = false;
        if(('createTouch' in document) || ('ontouchstart' in document)){
            TOUCHDEVICE = true;
        }

        var ie8Font = 'Dotum';

        /**
         * SVG, VML과 선 굵기에 따른 Rectangle 좌표
         *
         * @param  {String} _type 	SVG or VML
         * @param  {Number} _x 		X좌표
         * @param  {Number} _y 		Y좌표
         * @param  {Number} _w 		넓이
         * @param  {Number} _h 		높이
         * @param  {Number} _sw 	선굵기
         * @return {Object} 		Rectangle Object {x, y, width, height, widthhalf(넓이의 반)}
         */
        var getRectangle = function(_type, _x, _y, _w, _h, _sw){
            var rect = {};
            _x = Math.round(_x);
            _y = Math.round(_y);
            _w = Math.round(_w);
            _h = Math.round(_h);

            if(_sw > 0){
                if(_type === 'SVG'){
                    rect.x = _x + 0.5;
                    rect.y = _y + 0.5;
                } else {
                    rect.x = _x;
                    rect.y = _y;
                }
                rect.height = _h - 1;
                rect.widthhalf = Math.round(_w / 2) + 0.5;
            } else {
                if(_type === 'SVG'){
                    rect.x = _x;
                    rect.y = _y;
                } else {
                    rect.x = _x - 2;
                    rect.y = _y - 2;
                }
                rect.height = _h;
                rect.widthhalf = Math.round(_w / 2);
            }
            rect.width = _w;

            return rect;
        };
        /**
         * SVG, VML에 따른 위치값 조절
         *
         * @param  {String} _type  		SVG or VML
         * @param  {Number} _point 		위치값
         * @param  {String} _seriesType bar시리즈 체크, 'bar' 혹은 undefined
         * @return  {Number} 			수정된 위치값
         */
        var getPointPath = function(_type, _point, _seriesType){
            if(_type === "SVG") {
                return Math.round(_point) - 0.5;
            } else {
                if(_seriesType != 'bar') {
                    return Math.round(_point) - 1;
                } else {
                    return Math.round(_point);
                }
            }
        };
        /**
         * SVG, VML에 따른 Line 좌표(x1, y1, x2, y2)
         *
         * @param  {String} _type 	SVG or VML
         * @param  {Number} _x1 	시작 X좌표
         * @param  {Number} _y1 	시작 Y좌표
         * @param  {Number} _x2 	끝 X좌표
         * @param  {Number} _y2 	끝 Y좌표
         * @return {Object} 		Line Object {x1, y1, x2, y2}
         */
        var getLine = function(_type, _x1, _y1, _x2, _y2){
            var rect = {};
            if(_type === 'SVG'){
                rect.x1 = _x1 - 0.5;
                rect.y1 = _y1 - 0.5;
                rect.x2 = _x2 - 0.5;
                rect.y2 = _y2 - 0.5;
            } else {
                rect.x1 = _x1;
                rect.y1 = _y1;
                rect.x2 = _x2;
                rect.y2 = _y2;
            }

            return rect;
        };
        /**
         * SVG, VML에 따른 Rectangle 좌표를 Point 좌표로 변환
         * 상단좌측, 하단우측
         * @param  {String} _type 	SVG or VML
         * @param  {Object} _rp 	Rectangle Object {x, y, width, height}
         * @return {Object} 		상단좌측,  하단우측 Point Object {x1, y1, x2, y2}
         */
        var getLinesRectangle = function(_type, rp){
            var rect = {};
            if(_type === 'SVG'){
                rect.x1 = Math.round(rp.x) - 0.5;
                rect.y1 = Math.round(rp.y) - 0.5;
                rect.x2 = Math.round(rp.x + rp.width) - 0.5;
                rect.y2 = Math.round(rp.y + rp.height) - 0.5;
            } else {
                rect.x1 = Math.round(rp.x);
                rect.y1 = Math.round(rp.y);
                rect.x2 = Math.round(rp.x + rp.width);
                rect.y2 = Math.round(rp.y + rp.height);
            }
            return rect;
        };
        /**
         * VML모드일때 글꼴은 무조건 Dotum 처리(x축과 y축)
         * @param  {Object} user_styles 스타일 Object
         * @return {Object}             Dotum 처리된 user_styles
         */
        var findTextFamilyName = function(user_styles) {
            if(TYPE == 'VML') {
                user_styles.xAxis.text.family = ie8Font;
                user_styles.yAxis.text.family = ie8Font;
            }
            return user_styles;
        };
        /**
         * 화면에서 초기화하면 제일 먼저 실행되는 Init 함수
         * @param  {jQuery Node} _selector jQuery selector
         * @param  {Object} _options  사용자 정의 옵션
         * @param  {Object} _styles   사용자 정의 스타일
         * @param  {Object} _series   사용자 정의 시리즈
         * @return {chart}           차트 객체
         */
        self.init = function (_selector, _options, _styles, _series) {

            // 드래그 안됨
            _selector.css({position: 'relative'}).on('selectstart', false);

            /**
             * 확장 Options, Styles, Series
             */
            var options = $.extend(true, {}, defaultOptions, _options);

            if(options.loadingBar.use){
                showLoadingBar(_selector, options.loadingBar);
            }

            var styles = {};
            // style.js가 있으면 기본 세팅 확장
            for(var s in _series){

                for(var z in _series[s]) {

                    if(z === 'type') continue;

                    var tp = _series[s][z].series;
                    try {
                        var tpStyle = _styles[s].series[tp];
                        _styles[s].series[z] = $.extend(true, {}, _styles[s].series.base, tpStyle, _styles[s].series[z]);
                    }catch(e){}

                }
                styles[s] = findTextFamilyName($.extend(true, {}, defaultStyles, _styles[s]));
            }
            /*for(var s in _series){
             styles[s] = findTextFamilyName($.extend(true, {}, defaultStyles, _styles[s]));
             }*/
            // styles = $.extend(true, styles, _styles);


            var series = _series;//$.extend({}, defaultSeries, _series);
            /**
             * 사이즈
             */
            var CHART_WIDTH = _selector.width(), CHART_HEIGHT = _selector.height();

            // 차트 처음 create 이후 중복되는 Element들 수정 생성 안되도록 처리위한 Boolean 변수
            // element.inquery, element.reDraw 함수에서 true로 변경만 됨.
            var FIRSTAFTERSKIP = false;

            // 메인, 서브 분리 갯수
            var divisionCount = 0;
            if(options.use.stock) {
                DIVISION = options.division;
                CHART_HEIGHT -= options.stock.sliderHeight;
            } else if(options.division != null) {

                DIVISION = options.division;
            } else {
                DIVISION = [0, [100], [50, 50], [40, 30, 30], [40, 20, 20, 20]];
            }

            // Raphael Create
            var element = Raphael(_selector.get(0), CHART_WIDTH, CHART_HEIGHT);

            element.event = $({});

            element.canvas.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
            //
            // BarSeries가 있는지 여부 있으면 true
            var isBarSeries = false;

            var paper = null;
            var tipElement = null;		// 마우스 툴팁
            var xAxisTipElement = null;	// x축 툴팁
            var yAxisTipElement = null; // y축 툴팁
            // basic chart data
            var json = {};
            // Original Loaded Data
            var originalData = null;
            var mouseInOutCheck = false;
            // 차트 영역 벗어났는지 아닌지 체크하기 위한 변수
            // 툴팁에서만 사용하기 위한 변수이다. 영역안이면 true, 밖이면 false
            var mouseLeaveCheck = false;
            var mouseOverSeriesKey = '';
            var useColumnSeriesBullet = false; // 컬럼/바 시리즈이면서 bullet종류의 형태일경우.

            var reYAxis = true;
            // 매물분석도 관련
            var saleAnalysisYAxis = [];
            // SVG Element Save Array
            var elementGroup = [];
            // TimeSlice Slider
            var timeSlider = null;
            // setInterval object
            var timer = null;
            // CrossLine 가로, 세로re
            var vCross = null, hCross = null;
            // 차트가 그려지는 영역(전체)
            var svgBackground = null;
            // 증권차트일때 ajax로 가져오는 데이터 전체 저장
            var stockOriginalData = [];
            /**
             * 차트 이벤트 등록
             * @return null
             */
            function bindEvents() {
                /**
                 * 차트 완료했을때
                 * 애니메이션 완료시점이랑 무관함.
                 * @param  {jQuery.Event} e    jQuery이벤트
                 * @param  {chart} 차트 객체
                 */
                element.event.on(EVENT.COMPLETE, function(e, chart){

                    if(options.events && options.events[EVENT.COMPLETE]){

                        options.events[EVENT.COMPLETE](e, chart);
                    }
                });
                /**
                 * 차트 완료했을때
                 * 애니메이션 완료시점이랑 무관함. (init 되기전에 미리 등록을 해야 하는 경우에. 사용)
                 * @param  {jQuery.Event} e    jQuery이벤트
                 * @param  {chart} 차트 객체
                 */
                _selector.on(EVENT.COMPLETE, function(e, chart) {

                });
                /**
                 * DrawSeries 하기 전에 영역별로 이벤트 발생
                 * @param  {jQuery.Event} e             jQuery이벤트
                 * @param  {chart} chart         차트 객체
                 * @param  {Object} seriesObject 영역별 정보
                 */
                element.event.on(EVENT.BEFORE_DRAW_SERIES_IN_GRAPH, function(e, chart, seriesObject) {

                    if(options.events && options.events[EVENT.BEFORE_DRAW_SERIES_IN_GRAPH]){

                        options.events[EVENT.BEFORE_DRAW_SERIES_IN_GRAPH](e, chart, seriesObject);
                    }
                });
            }
            /**
             * TimeSlice(시계열) 초기화
             * 시계열을 사용하고자 할 경우에 jQuery. ui js의 dragslider를 include 해야 한다.
             * @param  {json} _data 차트데이터
             * @return null
             */
            element.timeSliceInit = function(_data){
                if(_data === 'error'){
                    this.init(_data);
                    return;
                }
                var data = _data.concat([]);
                var selector = options.timeSlice.slider;
                var count = data.length - 1;

                options.timeSlice.timeStartIndex = 0;
                options.timeSlice.timePlayIndex = 0;
                options.timeSlice.timeStopIndex = count;

                timeSlider = selector.dragslider({
                    range: true,
                    min: 0,
                    max: count,
                    rangeDrag: true,
                    values: [ 0, count],
                    slide: function(event, ui){

                        options.timeSlice.timeIndex = (ui.values[1] + 1) - ui.values[0];
                        options.timeSlice.timeStartIndex = ui.values[0];
                        options.timeSlice.timePlayIndex = 0;
                        options.timeSlice.timeStopIndex = ui.values[1];

                        var copyData = _data.concat([]);
                        var thisData = copyData.splice(options.timeSlice.timeStartIndex, options.timeSlice.timeIndex);

                        if(options.timeSlice.data != null){
                            options.timeSlice.data(thisData);
                        }

                        element.reDraw(thisData, undefined, undefined, true);
                    }
                });

                var playButton = options.timeSlice.play || null;
                if(playButton != null){
                    playButton.unbind('click').click(function(){
                        startTimeSlice(_data);
                    });
                }

                var stopButton = options.timeSlice.stop || null;
                if(stopButton != null){
                    stopButton.unbind('click').click(function(){
                        stopTimeSlice(_data);
                    });
                }

                var pauseButton = options.timeSlice.pause || null;
                if(pauseButton != null){
                    pauseButton.unbind('click').click(function(){
                        pauseTimeSlice(_data);
                    });
                }

                if(options.timeSlice.data != null){
                    options.timeSlice.data(_data);
                }

                this.init(_data);
            };
            /**
             * TimeSlice(시계열) 재생버튼 실행 함수
             * @param  {json} _data 차트데이터
             * @return null
             */
            var startTimeSlice = function(_data){
                if(options.timeSlice.status == 'start') return;

                if(options.timeSlice.status == 'stop' && elementGroup.length > 0){
                    var group = paper.set(elementGroup);
                    group.remove();

                    timeSlider.dragslider('option', {disabled: true});
                }
                timer = setInterval(function(){
                    if(options.timeSlice.timeStartIndex + options.timeSlice.timePlayIndex > options.timeSlice.timeStopIndex){
                        options.timeSlice.timePlayIndex = 0;
                        stopTimeSlice();
                        return;
                    }
                    var start = options.timeSlice.timeStartIndex;
                    var stop = options.timeSlice.timeStopIndex;

                    options.timeSlice.status = 'start';

                    timeSlider.dragslider('values', [start, start + options.timeSlice.timePlayIndex]);

                    element.reDrawTimeSlice(options.timeSlice.timePlayIndex, options.timeSlice.timePlayIndex + 1);

                    options.timeSlice.timePlayIndex ++;
                }, options.timeSlice.delay);
            };
            /**
             * TimeSlice(시계열) 정지버튼 실행 함수
             * @param  {json} _data 차트데이터
             * @return null
             */
            var stopTimeSlice = function(_data){
                if(_data != undefined){
                    if(options.timeSlice.status !== 'stop'){

                        var start = options.timeSlice.timeStartIndex;
                        var stop = options.timeSlice.timeStopIndex;

                        options.timeSlice.status = 'stop';

                        timeSlider.dragslider('values', [start, stop]);

                        element.reDrawTimeSlice(options.timeSlice.timePlayIndex, stop - start + 1);
                        options.timeSlice.timePlayIndex = 0;
                    }

                }
                timeSlider.dragslider('option', {disabled: false});
                options.timeSlice.status = 'stop';
                clearInterval(timer);
                timer = null;
            };
            /**
             * TimeSlice(시계열) 일시정지버튼 실행 함수
             * @param  {json} _data 차트데이터
             * @return null
             */
            var pauseTimeSlice = function(_data){

                if(options.timeSlice.status !== 'start') return;

                options.timeSlice.status = 'pause';
                clearInterval(timer);
                timer = null;
            };
            /**
             * 데이터가 로드되지 않았을때 텍스트 출력
             * @param  {svg node} elementGroup SVG 노드 묶음.
             * @return null
             */
            var noData = function(elementGroup){
                var stylesText = styles.main.xAxis.text;
                var text = drawFillText(paper, '데이터가 로드되지 않았습니다.', CHART_WIDTH/ 2, CHART_HEIGHT / 2, 0, 'center');
                text.attr({
                    'font-family': stylesText.family,
                    'font-size': stylesText.size+'px',
                    'font': stylesText.size+" '" + stylesText.family + "'",
                    'fill': stylesText.color
                });

                elementGroup.push(text);
            };
            /**
             * Selector에 마우스 이벤트 등록
             * @param  {Object} stylesMainLayout styles.main.layout의 스타일 설정값
             * @return -
             */
            function bindEventSelector (stylesMainLayout){
                /**
                 * _selector event off를 커스텀 이벤트로 변경 2016.02.04
                 */
                if(!TOUCHDEVICE){

                    _selector
                        .unbind('mouseenter.chart mouseleave.chart')
                        .on('mouseenter.chart', function(e){
                            mouseInOutCheck = true;
                            mouseLeaveCheck = true;
                        })
                        .on('mouseleave.chart', function(){
                            if(mouseMoveTick != null) {
                                mouseMoveTick.remove();
                                mouseMoveTick = null;
                            }
                            mouseInOutCheck = false;
                            mouseLeaveCheck = false;

                            $.each(drawSeriesFunctions, function(key, value){
                                $.each(value, function(sKey, sValue){

                                    var thisElement = value[sKey].overItem || "another";
                                    if(thisElement != null && thisElement != "another") {

                                        if(thisElement[0] && thisElement[0] == null) return true;
                                        if(thisElement.type == null) return true;

                                        for(var i = 0, len = thisElement.events.length; i < len; i ++) {
                                            if(thisElement.events[i].name === "mouseout") {
                                                thisElement.events[i].f();
                                            }
                                        }

                                    } else if(thisElement == "another") {
                                        var graph = background[key].background;
                                        for(var i = 0, len = graph.events.length; i < len; i ++) {
                                            if(graph.events[i].name === "mouseout") {
                                                graph.events[i].f();
                                            }
                                        }
                                    }
                                });
                            });

                            setTimeout(function(){

                                if(tipElement != null && !TOUCHDEVICE) {
                                    tipElement.hide().css({'opacity': 1});
                                }
                                if(xAxisTipElement != null) {
                                    xAxisTipElement.hide().css({'opacity': 1});
                                }
                                if(yAxisTipElement != null) {
                                    yAxisTipElement.hide().css({'opacity': 1});
                                }
                            }, 21);

                            hideCrossLine();
                            mouseOverSeriesKey = '';
                        })
                        .mousemove(function(e) {
                            var target = e.target;

                            // SVG요소가 아닌 노드에 마우스 무브하면 리턴시킴(툴팁의 위에 있을수도 있으므로.)
                            if(target.nodeName != 'rect' && target.nodeName != 'path' && target.nodeName != 'text') {
                                return;
                            }

                            mouseLeaveCheck = true;

                            var graphTop 	= stylesMainLayout._graphtop;
                            var graphLeft 	= stylesMainLayout._graphleft;
                            var graphWidth 	= graphLeft + stylesMainLayout._graphwidthpx;
                            var graphHeight = graphTop;

                            var lastSeriesKey = '';

                            for(var i in styles) {
                                lastSeriesKey = i;
                            }
                            for(i in styles) {
                                var tLayout = styles[i].layout;

                                if(i === lastSeriesKey) {
                                    if(i === 'main') {
                                        graphHeight = graphHeight + tLayout._graphheightpx;
                                    } else {

                                        graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                    }
                                }
                            }

                            var m = {};
                            if(TYPE === 'VML'){
                                var target = e.target || e.srcElement,
                                    rect = target.getBoundingClientRect(),
                                    parent = target.parentNode,
                                    parentRect = parent.getBoundingClientRect();

                                m.x = e.offsetX + rect.left - parentRect.left;
                                m.y = e.offsetY + rect.top - parentRect.top;
                            } else {
                                m.x = e.offsetX;
                                m.y = e.offsetY;
                            }

                            if(m.y > graphTop && m.y < graphHeight && m.x > graphLeft && m.x < graphWidth || e.target.nodeName === 'DIV') {

                            } else {

                                if(mouseMoveTick != null) {

                                    mouseMoveTick.remove();
                                    mouseMoveTick = null;
                                }

                                mouseInOutCheck = false;

                                $.each(drawSeriesFunctions, function(key, value){

                                    $.each(value, function(sKey, sValue){

                                        var thisElement = value[sKey].overItem || "another";

                                        if(thisElement != null && thisElement != "another") {

                                            if(thisElement[0] && thisElement[0] == null) {

                                                return true;
                                            }

                                            if(thisElement.type == null) {

                                                return true;
                                            }

                                            for(var i = 0, len = thisElement.events.length; i < len; i ++) {
                                                if(thisElement.events[i].name === "mouseout") {

                                                    thisElement.events[i].f();
                                                }
                                            }

                                        } else if(thisElement == "another") {

                                            var graph = background[key].background;

                                            for(var i = 0, len = graph.events.length; i < len; i ++) {

                                                if(graph.events[i].name === "mouseout") {

                                                    graph.events[i].f();
                                                }
                                            }
                                        }
                                    });
                                });


                                if(tipElement != null && !TOUCHDEVICE) {
                                    tipElement.hide().css({'opacity': 1});
                                }
                                if(xAxisTipElement != null) {
                                    xAxisTipElement.hide().css({'opacity': 1});
                                }
                                if(yAxisTipElement != null) {
                                    yAxisTipElement.hide().css({'opacity': 1});
                                }
                                hideCrossLine();
                                mouseOverSeriesKey = '';
                            }
                        });
                } else {
                    mouseInOutCheck = true;
                    mouseLeaveCheck = true;
                }
            }



            /**
             * [init 차트 첫 생성시 한번만 실행됨.]
             * @param  {JSON} _data 	로드된 데이터 또는 입력된 데이터
             * @param  {Object} _opt  	기본과 사용자 정의가 확장된 옵션
             * @param  {Object} _sty  	기본과 사용자 정의가 확장된 스타일
             * @param  {Object} _ser  	기본과 사용자 정의가 확장된 시리즈
             * @return {chart}       	차트 객체
             */
            element.init = function(_data, _opt, _sty, _ser){

                if(_opt != undefined || _sty != undefined || _ser != undefined){

                    this.inquery(_opt, _sty, _ser);
                    return;
                }
                paper = this;

                for(var t in series) { // Main, Sub

                    divisionCount ++;

                    var tSeries = series[t], tStyles = styles[t];

                    var tStylesLayout = tStyles.layout;
                    var tStylesGraph = tStyles.graph;
                    var tStylesYAxis = tStyles.yAxis;

                    var seriesBCCount = 0, stackColumnBCCount = 0, stackColumnBCYaxisID = '';

                    for(var s in tSeries){ // Series
                        if(s === "type") continue;

                        var sSeries = tSeries[s], sStyles = (tStyles).series[s];

                        if(tSeries.type == undefined) {
                            // 서브인경우 type='sub'가 필수로 등록되어 있어야 함.
                            tSeries.type = 'main';
                        }
                        // 멀티축인경우
                        if(options.use.multiYAxis){

                            if(!sSeries.hasOwnProperty('yaxisid')) {

                                sSeries.yaxisid = s;
                            }
                            var extendStyles = $.extend(true, {}, defaultMultiSeriesStyles, sStyles);

                            if(TYPE == "VML") {
                                extendStyles.yAxis.text.family = ie8Font;
                            }

                            (tStyles.series)[s] = $.extend({}, extendStyles);

                            // 멀티축이 아닌 경우
                        } else {
                            var w = tStylesLayout.paddingLeft + tStylesLayout.paddingRight + tStylesGraph.paddingLeft + tStylesGraph.paddingRight;
                            w = w + tStylesYAxis.width + tStylesYAxis.paddingLeft + tStylesYAxis.paddingRight;
                            _selector.css('minWidth', w + 'px');
                        }

                        if(/bar|column/i.test(sSeries.series) && sSeries.visible != false) {

                            if(sSeries.series === 'bar'){

                                isBarSeries = true;

                                if(tStylesYAxis.position === 'left')
                                    tStylesGraph.paddingLeft = 0;
                                else
                                    tStylesGraph.paddingRight = 0;
                            }

                            if(/stack|updown_stack|updown_bullet|bullet|overlap|updown_overlap/i.test(sSeries.form) && (stackColumnBCYaxisID == '' || stackColumnBCYaxisID !== sSeries.yaxisid)) {

                                seriesBCCount ++;
                                stackColumnBCYaxisID = sSeries.yaxisid;

                                if(/updown_bullet|bullet|overlap|updown_overlap/i.test(sSeries.form)) {

                                    useColumnSeriesBullet = sSeries.form;

                                    if(sSeries.series === 'column') {

                                        tStylesGraph.paddingTop = 0;
                                    } else {

                                        tStylesGraph.paddingRight = 0;
                                    }
                                }
                            } else if(/stack|updown_stack|updown_bullet|bullet|overlap|updown_overlap/i.test(sSeries.form) === false) {

                                seriesBCCount ++;
                            }

                            (tStyles).series[s].seriesBCIndex = seriesBCCount;
                        }

                        if(/updown$|updown_stack|updown_bullet|updown_overlap/i.test(sSeries.form) || (/updown_base|updown_before/i.test(sSeries.form) && options.data.prevClose == 0)) {

                            if(options.use.multiYAxis){

                                (tStyles.series)[sSeries.yaxisid].yAxis.baseAtZero = true;
                            } else {

                                tStylesYAxis.baseAtZero = true;
                            }
                        }
                    }
                    tStyles["seriesBCCount"] = seriesBCCount;
                }

                // 차트의 구역별 사이즈 측정후 styles에 적용
                styles = setChartSize(options, series, styles, CHART_WIDTH, CHART_HEIGHT, divisionCount);

                var stylesMainLayout = styles.main.layout;

                // Selector에 마우스 이벤트 등록
                bindEventSelector(stylesMainLayout);

                // layout의 배경 노드 만들고 색상변경
                if(svgBackground == null){
                    var backFill = '';
                    if(stylesMainLayout.color.src){
                        backFill = "url("+stylesMainLayout.color.src+")";
                    } else {
                        backFill = stylesMainLayout.color;
                    }

                    if(TYPE === 'SVG'){
                        svgBackground = paper.rect(0, 0, CHART_WIDTH, CHART_HEIGHT).attr({
                            'fill': backFill,
                            'stroke': stylesMainLayout.line.color,
                            'stroke-width': stylesMainLayout.line.width* 2,
                            'fill-opacity': stylesMainLayout.opacity
                        });
                    } else {
                        svgBackground = paper.rect(-1, -1, CHART_WIDTH - 1, CHART_HEIGHT - 1).attr({
                            'fill': backFill,
                            'stroke': stylesMainLayout.line.color,
                            'stroke-width': stylesMainLayout.line.width,
                            'fill-opacity': stylesMainLayout.opacity
                        });
                    }
                } else {
                    var backFill = '';
                    if(stylesMainLayout.color.src){
                        backFill = "url("+stylesMainLayout.color.src+")";
                    } else {
                        backFill = stylesMainLayout.color;
                    }
                    svgBackground.attr({
                        'fill': backFill,
                        'stroke': stylesMainLayout.line.color,
                        'stroke-width': stylesMainLayout.line.width
                    });
                }

                // _data !== undefined를 조건에 걸은 이유는
                // reDraw에서 데이터 변경없이 차트를 다시 그려주고 싶을때 사용하기 위함.
                // 데이터 없음.
                if(_data !== undefined && (_data === 'error' || _data.length <= 0)){
                    noData(elementGroup);
                    return;
                }
                // 데이터 가공
                if(_data !== undefined)	{
                    json = parseData(_data, options, series, styles);
                }

                // url에 hash - #skipAnimation를 붙이면 애니메이션이 동작하지 않는다.
                if(window.location.hash && window.location.hash.slice(1) === "skipAnimation") {
                    options.use.animate = false;
                }

                if(options.use.reSize){

                    var handleResize = function(){
                        waitForFinalEvent(function(){
                            if(_selector.is(":hidden")) return;
                            element.resize();

                        }, 300, "RESIZE");
                    };
                    $(window).on('resize', function(){
                        if(CHART_WIDTH != _selector.width()) {

                            // IE7에서 패턴이미지 오버시에 resize 이벤트 바인딩 되는 문제 때문에 if 문으로 걸름.
                            handleResize();
                        }
                    });
                }

                bindEvents();

                create();

            };

            element.on = function (eventName, callback) {

                element.event.on(eventName, callback);
            };

            element.reDrawTimeSlice = function(_index, _stopIndex){

                drawSeriesTimeSlice(series, _index, _stopIndex);
            };
            /**
             * 리사이즈 API
             * 화면에서 직접 호출 가능
             * @return null
             */
            element.resize = function(){
                if(_selector.is(":hidden")) {
                    // DIV가 hidden 이면 그려지지 않음.
                    return;
                }

                if(options.loadingBar.use) {

                    showLoadingBar(_selector, options.loadingBar);
                }

                options.getResize = true;
                FIRSTAFTERSKIP = true;

                CHART_WIDTH = _selector.width();
                CHART_HEIGHT = _selector.height();


                if(TYPE === 'SVG') {

                    svgBackground.attr({ 'width': CHART_WIDTH, 'height': CHART_HEIGHT});
                } else {

                    svgBackground.attr({ 'width': CHART_WIDTH - 1, 'height': CHART_HEIGHT - 1});
                }
                if(options.use.stock) {

                    CHART_HEIGHT -= options.stock.sliderHeight;
                }

                if(elementGroup.length > 0) {

                    paper.set(elementGroup).remove();
                }

                if(options.division != undefined){

                    DIVISION = options.division;
                } else {

                    DIVISION = [0, [100], [50, 50], [40, 30, 30], [40, 20, 20, 20]];
                }

                element.setSize(CHART_WIDTH, CHART_HEIGHT);

                styles = setChartSize(options, series, styles, CHART_WIDTH, CHART_HEIGHT, divisionCount);

                elementGroup = [];

                xLabelWidth = 0;

                if(hCross != null && (options.use.hCrossLine || options.use.aCrossLine)){
                    hCross.attr({
                        'width': styles.main.layout._graphwidthpx
                    });
                }

                try{
                    if(element.getOriginalData().length > 0) {

                        create();
                    } else {
                        noData(elementGroup);
                    }
                } catch (e) {
                    noData(elementGroup);
                }

                if(options.loadingBar.use) {

                    hideLoadingBar(options.loadingBar);
                }
            };
            /**
             * SVG Element 전부 삭제
             * @return null
             */
            var removeElement = function(){

                for(var g in xLabelGroups){
                    if(xLabelGroups.hasOwnProperty(g)) (xLabelGroups[g]).remove();
                }
                xLabelGroups = {};
                for(g in yLabelGroups){
                    if(yLabelGroups[g].hasOwnProperty('left')) (yLabelGroups[g].left).remove();
                    if(yLabelGroups[g].hasOwnProperty('right')) (yLabelGroups[g].right).remove();
                }
                yLabelGroups = {};
                for(g in xAxisLines){
                    if(xAxisLines.hasOwnProperty(g)) (xAxisLines[g]).remove();
                }
                xAxisLines = {};
                for(g in yAxisLines){
                    if(yAxisLines.hasOwnProperty(g)) (yAxisLines[g]).remove();
                }
                yAxisLines = {};
                /*
                 2014.07.15 종합차트에서 보조지표 close 시에 background 남아있는 문제 해결하기 위해 추가
                 */
                $.each(background, function(idx){
                    var back = background[idx];
                    back.background.remove();
                    if(back.borders.top != undefined) back.borders.top.remove();
                    if(back.borders.left != undefined) back.borders.left.remove();
                    if(back.borders.right != undefined) back.borders.right.remove();
                    if(back.borders.bottom != undefined) back.borders.bottom.remove();
                });
                background = {};


            };
            /**
             * 차트 재조회 API
             * @param  {Object} _options 사용자 정의 옵션
             * @param  {Object} _styles  사용자 정의 스타일
             * @param  {Object} _series  사용자 정의 시리즈
             * @return null
             */
            element.inquery = function(_options, _styles, _series){
                if(timer != null) {
                    stopTimeSlice('stop');
                }
                FIRSTAFTERSKIP = true;

                /*
                 조회될때는 데이터의 URL이나 값들이 변경된 상태이므로 extend 되기전 null 초기화.
                 2015.12.28
                 */
                if(options.data.url != null) options.data.url = null;
                if(options.data.data != null) options.data.data = null;

                options = $.extend(true, options, _options);

                if(options.division != undefined){

                    DIVISION = options.division;
                } else {

                    DIVISION 	  = [0, [100], [50, 50], [40, 30, 30], [40, 20, 20, 20]];
                }
                series = $.extend(true, series, _series);

                for(var s in series){
                    if(styles[s] == undefined) {

                        _styles[s] = $.extend(true, {}, defaultStyles, _styles[s]);

                    }
                }
                styles = $.extend(true, styles, _styles);

                removeElement();
                removeCrossLine();

                if(elementGroup.length > 0){
                    paper.set(elementGroup).remove();
                }
                divisionCount = 0;

                // X축에 데이터가 일별이었다가 시간별로 변경될 경우나,
                // 텍스트의 수가 달라지게될경우 width 값을 다시 계산하기 위하여 0으로 초기화.
                // 2016.01.06 평다진
                xLabelWidth = 0;

                elementGroup = [];

                if(sale_select){
                    this.deleteSaleAnalysis(true);
                    this.saleAnalysis(sale_param1, sale_series, sale_series_style);
                }
                if(tipElement != null) tipElement.hide();
                if(xAxisTipElement != null) xAxisTipElement.hide();
                if(yAxisTipElement != null) yAxisTipElement.hide();

                drawSeriesFunctions = {};

                loadData(options, this);
            };
            /*
             Chart Convert에서 사용.
             차트의 옵션, 스타일, 시리즈를 기존에 저장된 옵션에 확장되는것이 아니라
             무조건 받아오는 것으로만 다시 초기화할때 사용함.
             */
            element.reInit = function(_options, _styles, _series){


                options = $.extend(true, {}, defaultOptions, _options);

                if(options.division != undefined){
                    DIVISION = options.division;
                } else {
                    DIVISION 	  = [0, [100], [50, 50], [40, 30, 30], [40, 20, 20, 20]];
                }

                series = $.extend(true, {}, _series);

                for(var s in series){
                    _styles[s] = $.extend(true, {}, defaultStyles, _styles[s]);
                }
                styles = $.extend(true, {}, _styles);

                removeElement();
                removeCrossLine();

                if(elementGroup.length > 0){
                    paper.set(elementGroup).remove();
                }
                divisionCount = 0;

                elementGroup = [];

                if(sale_select){
                    this.deleteSaleAnalysis(true);
                    this.saleAnalysis(sale_param1, sale_series, sale_series_style);
                }
                if(tipElement != null) tipElement.hide();
                if(xAxisTipElement != null) xAxisTipElement.hide();
                if(yAxisTipElement != null) yAxisTipElement.hide();

                drawSeriesFunctions = {};

                loadData(options, this);
            };

            /**
             * 차트를 다시 그릴때 API
             * 조회(inquery)와 다른점은 데이터가 null로 들어오면 이전 데이터로 그려준다.
             * @param  {json} _data           바뀔 데이터
             * @param  {Object} _styles         바뀌는 스타일
             * @param  {Object} _series         바뀌는 시리즈
             * @param  {Boolean} _reYAxis        false가 아니면 Y축의 값을 재계산 한다.
             * @param  {Boolean} _FIRSTAFTERSKIP 차트 처음 create 이후 중복되는 Element들 수정 생성 안되도록 처리위한 Boolean 변수
             * @param  {String} _thisType       사용자가 사용하는 변수가 아니며, webponent 종합차트에서 사용함.
             * @return null
             */
            element.reDraw = function(_data, _styles, _series, _reYAxis, _FIRSTAFTERSKIP, _thisType){

                if(tipElement != null) tipElement.hide();
                if(xAxisTipElement != null) xAxisTipElement.hide();
                if(yAxisTipElement != null) yAxisTipElement.hide();

                // 주석처리했다가 타임슬라이스 때문에 다시 추가함. 16.07.20 평다진
                if(_FIRSTAFTERSKIP != false) FIRSTAFTERSKIP = true;

                if(_series !== undefined && !$.isEmptyObject(_series)){
                    drawSeriesFunctions = [];
                    series = null;
                    series = $.extend({}, series, _series);
                }
                // 영역별로 기존 확장 스타일에서 새 스타일 적용
                if(_styles !== undefined && !$.isEmptyObject(_styles)){
                    var defaultStylesCopy = null;
                    var tempStyles = null;
                    for(var s in series){

                        defaultStylesCopy = $.extend(true, {}, defaultStyles);

                        tempStyles = $.extend({}, defaultStylesCopy, styles[s]);

                        styles[s] = $.extend(true, tempStyles, _styles[s]);
                        // _styles[s] = $.extend(true, {}, defaultStyles, _styles[s]);
                        // styles[s] = $.extend(true, styles[s], _styles[s]);
                    }
                }

                for(var s in series){

                    for(var z in series[s]) {

                        if(z === 'type') continue;

                        var tp = series[s][z].series;
                        try {
                            var tpStyle = _styles[s].series[tp];

                            styles[s].series[z] = $.extend(true, {}, _styles[s].series.base, tpStyle, _styles[s].series[z]);

                        }catch(e){}
                    }
                }

                // 왜 에러나지????
                // styles = $.extend(true, styles, _styles);

                if(_reYAxis !== undefined){

                    reYAxis = _reYAxis;
                }

                if(_thisType != 'slider' && _thisType != 'option'){

                    removeElement();
                    removeCrossLine();

                }
                if(elementGroup.length > 0){

                    paper.set(elementGroup).remove();
                }

                divisionCount = 0;

                elementGroup = [];

                if(_data != undefined && _data != null){

                    this.setOriginalData(_data);

                    this.init(_data);
                } else {
                    this.init(this.getOriginalData());
                }


                if(sale_select){
                    this.deleteSaleAnalysis(true);
                    this.saleAnalysis(sale_param1, sale_series, sale_series_style);
                }

            };
            /**
             * [실시간과 같이 새로운 데이터가 추가되는 경우 - 데이터가 추가 되는것이므로 스타일및 시리즈의 변경은 일어나지 않는다.]
             * @param  {JSON} _data [Json Object 형 Array]
             */
            element.appendData = function(_data){
                if(_data.length == undefined || _data.length <= 0) return;

                var originDatas = this.getOriginalData();
                originDatas = originDatas.concat(_data);

                this.setOriginalData(originDatas);

                this.reDraw(originDatas);
            };
            /**
             * 차트 옵션 가져오기 API
             * @return {Object} 차트 옵션
             */
            element.getOptions = function(){
                return options;
            };
            /**
             * 차트 스타일 가져오기 API
             * @return {Object} 차트 스타일
             */
            element.getStyles = function(){
                return styles;
            };
            /**
             * 차트 시리즈 가져오기 API
             * @return {Object} 차트 시리즈
             */
            element.getSeries = function(){
                return series;
            };
            /**
             * 차트 시리즈 직접 변경 API
             * @param {Object} _series 사용자 정의 시리즈
             */
            element.setSeries = function(_series){
                series = _series;
            };
            /**
             * [Chart의 맞춤 데이터로 변경되기 이전의 데이터 가져오기]
             * @return  {Array} _data [Json Object 형 Array]
             */
            element.getOriginalData = function(){
                return originalData;
            };
            /**
             * Chart의 원본 데이터 갱신 API
             * @param  {Array} _data [Json Object 형 Array]
             */
            element.setOriginalData = function(_datas){
                originalData = _datas;
            };
            /**
             * 차트 변형 데이터 가져오기 API
             * @return {Object} 차트 맞춤데이터로 변경된 데이터
             */
            element.getData = function(){
                return json;
            };
            /**
             * 종합차트 원본데이터 갱신 API : 일반차트에서는 사용하지 않음
             * @param  {Array} _data [Json Object 형 Array]
             */
            element.setStockOriginalData = function(_datas) {
                stockOriginalData = _datas;
            };
            /**
             * 종합차트 원본데이터 가져오기 API : 일반차트에서는 사용하지 않음
             * @return {Array} [Json Object 형 Array]
             */
            element.getStockOriginalData = function() {
                return stockOriginalData;
            };
            /**
             * [Chart의 X축 Label Nodes 가져오기]
             * @param  {Array} node [element Object 형 Array]
             */
            element.getXAxisLabels = function(){
                return xLabelGroups;
            };
            /**
             * 종합차트 JS에서 호출 전용 API
             * Y축 값 가져오기
             * @param  {Boolean} _multi      멀티축인지 아닌지 true | false
             * @param  {Object} _data       차트 데이터
             * @param  {Object} _styles 	차트 스타일
             * @return {Array}             	Y축 값 배열
             */
            element.getStockYAxis = function(_multi, _data, _baseatzero){
                return setYAxis(_multi, _data, _baseatzero);
            };
            /**
             * 종합차트 JS에서 호출 전용 API
             * Y축 그리기
             * @param  {String} _key         	메인, 서브 등 영역 Key Name
             * @param  {Number} _x            	영역 내 X좌표
             * @param  {Number} _y            	영역 내 Y좌표
             * @param  {Number} _width        	영역 내 넓이
             * @param  {Number} _height       	영역 내 높이
             * @param  {Object} _options      	옵션
             * @param  {Object} _thisStyles   	스타일
             * @param  {Object} _thisStyles2  	스타일2
             * @param  {Array} _yAxis        	영역 내 Y축 값 배열
             * @param  {Node} _elementGroup 	SVG Element 그룹
             * @return {Node}               	SVG Element 그룹
             */
            element.drawStockYAxis = function(_key, _x, _y, _width, _height, _options, _thisStyles, _thisStyles2, _yAxis, _elementGroup){
                return drawYAxis(_key, _x, _y, _width, _height, _options, _thisStyles, _thisStyles, _yAxis, undefined, _elementGroup);
            };
            /**
             * 종합차트 JS에서 호출 전용 API
             * X축 그리기
             * @param  {String} _key         	메인, 서브 등 영역 Key Name
             * @param  {Number} _x            	영역 내 X좌표
             * @param  {Number} _y            	영역 내 Y좌표
             * @param  {Number} _width        	영역 내 넓이
             * @param  {Number} _height       	영역 내 높이
             * @param  {Object} _options      	옵션
             * @param  {Object} _thisStyles   	스타일
             * @param  {Array} _data        	차트 데이터
             * @param  {Node} _elementGroup 	SVG Element 그룹
             * @return {Node}               	SVG Element 그룹
             */
            element.drawStockXAxis = function(_key, _x, _y, _width, _height, _options, _thisStyles, _data, _elementGroup){
                return drawXAxis(_key, _x, _y, _width, _height, _options, _thisStyles, _data, _elementGroup);
            };
            /**
             * 종합차트 JS에서 호출 전용 API
             * 시리즈 그리기
             * @param  {String} _key         	메인, 서브 등 영역 Key Name
             * @param  {Number} _x            	영역 내 X좌표
             * @param  {Number} _y            	영역 내 Y좌표
             * @param  {Number} _width        	영역 내 넓이
             * @param  {Number} _height       	영역 내 높이
             * @param  {Object} _options      	옵션
             * @param  {Object} _thisStyles   	스타일
             * @param  {Object} _series   		시리즈
             * @param  {Array} _data        	차트 데이터
             * @param  {Node} _yAxis 			영역 내 Y축 값 배열
             * @return {Node}               	SVG Element 그룹
             */
            element.drawStockSeries = function(_key, _x, _y, _width, _height, _options, _styles, _series, _data, _yAxis){

                var seriesObject = {
                    key : _key,
                    x: _x,
                    y: _y,
                    width: _width,
                    height: _height,
                    options: _options,
                    styles: _styles,
                    series: _series,
                    data: _data,
                    yaxis: _yAxis
                };
                return drawSeries(seriesObject, 'stock');
            };
            // 매물분석도
            var sale_select = false, sale_param1 = 10;
            var sale_arrX = [], sale_arrY = [], saleTotal = 0, sale_itemHeight = 0, sale_bandT = [], sale_bandA = [], saleGraphTop = 0, saleGraphWidth = 0;
            var sale_layout_style = {}, sale_series_style = {}, sale_series = {};
            var sale_group = [], sale_textGroup = [];
            /**
             * 종합차트의 보조지표 중 매물분석도 초기화
             * @param  {Number} _param   매불분석도 파라메터
             * @param  {Object} __series 시리즈
             * @param  {Object} _styles  스타일
             * @return null
             */
            element.saleAnalysis = function(_param, __series, _styles){

                sale_param1 = _param;
                sale_select = true;
                sale_series = __series;
                var candleSeriesValue = {}, volumeSeriesValue = {};
                for(var i in series){
                    var cont = series[i];
                    for(var j in cont){
                        if(j === 'type') continue;

                        if((cont[j].type === 'MAIN') && cont[j].visible != false){
                            candleSeriesValue.first = i;
                            candleSeriesValue.second = j;
                        }
                        if(cont[j].series === 'column' && cont[j].yaxis === __series.volume){
                            volumeSeriesValue.first = i;
                            volumeSeriesValue.second = j;
                        }
                    }
                }

                var candleData = (json[candleSeriesValue.first])["DATA-"+candleSeriesValue.second];
                if(!$.isEmptyObject(volumeSeriesValue)){
                    var volumeData = (json[volumeSeriesValue.first])["DATA-"+volumeSeriesValue.second];
                } else {
                    var volumeData = {};
                    var volumeDataArray = [];
                    for(var i = candleData.data.length; i--;){
                        var data = candleData.data[i].data;
                        volumeDataArray.unshift({
                            yaxis : data[__series.volume]
                        });
                    }
                    volumeData.data = volumeDataArray;
                }

                var thisStyles = (styles[candleSeriesValue.first]);

                sale_layout_style = thisStyles, sale_series_style = _styles;

                var GRAPH_TOP 	= thisStyles.layout._canvastop + thisStyles.layout._graphtop, GRAPH_LEFT = thisStyles.layout._graphleft;
                var GRAPH_WIDTH = thisStyles.layout._graphwidthpx, GRAPH_HEIGHT = thisStyles.layout._graphheightpx;

                var startY = thisStyles.layout.paddingTop + thisStyles.graph.paddingTop;
                var graphtop = GRAPH_TOP + thisStyles.graph.paddingTop, graphheight = GRAPH_HEIGHT - thisStyles.graph.paddingTop - thisStyles.graph.paddingBottom;

                var yAxisMax = candleData.yAxis[candleData.yAxis.length - 1], yAxisGap = yAxisMax - candleData.yAxis[0];

                var maxValue = candleData.maxvalue, minValue = candleData.minvalue;
                var maxY = Math.round(graphheight * ((yAxisMax - maxValue ) / yAxisGap)) + graphtop;
                var minY = Math.round(graphheight * ((yAxisMax - minValue ) / yAxisGap)) + graphtop;

                saleTotal = 0;
                sale_itemHeight = Math.round((minY - maxY) / _param); // 아이템 높이

                sale_bandT = new Array(_param);
                sale_bandA = []; // 백분율

                saleGraphWidth = GRAPH_WIDTH - 2; /// border 값 대문에 2px 뺌.
                saleGraphTop = maxY;

                var dTotalPrice = [];
                var dMaxPrice = Number(maxValue), dMinPrice = Number(minValue);
                var dStepPrice = (dMaxPrice - dMinPrice) / _param;
                for(var i = 0; i <= _param; i++){
                    dTotalPrice.push(dMinPrice + dStepPrice * i);
                }

                var tClose = 0;
                for(i = 0, len = candleData.data.length; i < len; i ++){

                    if(candleData.data[i].xaxis == undefined || candleData.data[i].xaxis == null || candleData.data[i].xaxis == '' || candleData.data[i].xaxis == ' ') continue;
                    for(var j = 0; j < dTotalPrice.length - 1; j++){
                        tClose = Number(candleData.data[i].close || candleData.data[i].yaxis);
                        if(dTotalPrice[j] <= tClose && tClose < dTotalPrice[j + 1]){
                            if(sale_bandT[j] == undefined) sale_bandT[j] = 0;
                            sale_bandT[j] = sale_bandT[j] + Number((volumeData.data[i]).yaxis);
                            break;
                        }
                    }
                    saleTotal += Number((volumeData.data[i]).yaxis);
                }
                var max = 0;
                for(i = _param; i--;){
                    if(max < sale_bandT[i]) max = sale_bandT[i];
                }

                var maxWidth = max / saleGraphWidth;
                var last = _param - 1;
                for(i = 0; i < _param; i++){
                    sale_arrX[i] = Math.floor(sale_bandT[i] / maxWidth);
                    sale_arrY[i] = Math.floor(saleGraphTop + (sale_itemHeight * (last - i)));
                    sale_bandA.push((sale_bandT[i] / saleTotal) * 100);
                }

                saleAnalysisDraw();
            };
            /**
             * 종합차트의 보조지표 중 매물분석도 그리기 API
             * @return null
             */
            var saleAnalysisDraw = function(){
                var group = [], text_group = [];
                var startX = sale_layout_style.layout._graphleft;
                var graph_half = startX + (saleGraphWidth / 2);

                for(var i = 0; i < sale_param1; i++){
                    if(sale_bandT[i] != undefined){
                        var rp = getRectangle(TYPE, startX, sale_arrY[i], sale_arrX[i], sale_itemHeight, sale_series_style.line.normal.width || 1);
                        var path = paper.rect(rp.x, rp.y, rp.width, rp.height);

                        group.push(path);

                        if(rp.x + rp.width < graph_half) { // series 바깥
                            var text = paper.text(rp.x + rp.width + 10, rp.y + (rp.height/2), String(sale_bandT[i]).format() + ' ' + sale_bandA[i].toFixed(2) + '%').attr({
                                'text-anchor': labelAlign('left')
                            });
                        } else { // series 안
                            var text = paper.text(rp.x + rp.width - 10, rp.y + (rp.height/2), String(sale_bandT[i]).format() + ' ' + sale_bandA[i].toFixed(2) + '%').attr({
                                'text-anchor': labelAlign('right')
                            });
                        }
                        text_group.push(text);
                    }
                }
                sale_group = paper.set(group).attr({
                    fill: sale_series_style.area.normal.color || '#7ca859', 'fill-opacity': sale_series_style.area.normal.opacity || 1,
                    stroke: sale_series_style.line.normal.color || '#7ca859', 'toFixedopacity': sale_series_style.line.normal.opacity || 1
                });
                sale_textGroup = paper.set(text_group).attr({
                    'font-family': sale_series_style.text.family,
                    'font-size': sale_series_style.text.size+'px',
                    'font': sale_series_style.text.size+" '" + sale_series_style.text.family + "'",
                    'fill': sale_series_style.text.color
                });
            };
            /**
             * 종합차트의 보조지표 중 매물분석도 삭제 API
             * @param  {Boolean} _status 매물분석도 on(true) | off(true)
             * @return null
             */
            element.deleteSaleAnalysis = function(_status){
                sale_select = _status;
                sale_group.remove();
                sale_textGroup.remove();
            };

            // 영역별 Y축값 저장
            var saveYAxis = {};
            // 영역별 background 모음
            var background = {};
            /**
             * 차트 영역별 초기화
             * background를 그리고, 이벤트 바인딩, 축값 계산/그리기 호출 등.
             * @return null
             */
            var create = function(){
                if(_selector.is(":hidden")) return;

                var xAxis = [], yAxis = [], drawSeriesArray = [];
                for(t in series) {
                    var thisStyles = styles[t];
                    var thisDatas = json[t];

                    for(var i in thisStyles.series){
                        var thisSeries = (series[t])[i];
                        var thisSeriesStyles = thisStyles.series[i];

                        if(typeof (thisSeriesStyles) == 'object' && thisSeries !== undefined){

                            if(/column|bar|candle|hloc/i.test(thisSeries.series) &&
                                thisSeriesStyles.accessibility != undefined &&
                                thisSeriesStyles.accessibility.use && thisStyles.graph.paddingBottom < 15) {

                                if(thisSeries.series === 'bar') {

                                    if(thisSeries.form && /updown$|updown_base|updown_before|updown_minaxis/i.test(thisSeries.form)){

                                        // accessibility가 사용될때는 그래프의 좌측 여백이 15픽셀 이상으로 고정(바시리즈)
                                        thisStyles.graph.paddingLeft = 15;
                                    } else {
                                        // 바, 컬럼시리즈는 updown, updown_base, updown_before, updown_minaxis가 아니면 accessibility를 사용하지 아니한다.
                                        thisSeriesStyles.accessibility.use = false;
                                    }
                                } else {

                                    if(/candle|hloc/i.test(thisSeries.series) || (thisSeries.form && /updown$|updown_base|updown_before|updown_minaxis/i.test(thisSeries.form))){

                                        // accessibility가 사용될때는 그래프의 하단 여백이 15픽셀 이상으로 고정
                                        thisStyles.graph.paddingBottom = 15;
                                    } else {
                                        // 바, 컬럼시리즈는 updown, updown_base, updown_before, updown_minaxis가 아니면 accessibility를 사용하지 아니한다.
                                        thisSeriesStyles.accessibility.use = false;
                                    }

                                }
                            }
                        }
                    }
                    var GRAPH_TOP 		= thisStyles.layout._canvastop + thisStyles.layout._graphtop,
                        GRAPH_LEFT 		= thisStyles.layout._graphleft;
                    var GRAPH_WIDTH 	= thisStyles.layout._graphwidthpx,
                        GRAPH_HEIGHT 	= thisStyles.layout._graphheightpx;

                    // Graph 배경
                    var rp = getRectangle(TYPE, GRAPH_LEFT, GRAPH_TOP, GRAPH_WIDTH, GRAPH_HEIGHT);

                    if(!background.hasOwnProperty(t)) {
                        // 그래프 영역이 없는 상태면 생성 시작
                        background[t] = new GraphBackground();
                    }

                    var graphBack = null;

                    var thisStylesGraph = thisStyles.graph;

                    if(background[t].background === null){
                        graphBack = background[t].createBackground(paper, rp, thisStylesGraph);

                        graphBack[0].setAttribute('key', t);

                        backgroundBindEvent(graphBack, GRAPH_LEFT, GRAPH_TOP, CHART_WIDTH, CHART_HEIGHT);
                        /*
                         종합차트일때 차트형식 변경시 graphbackground가 위로 올라오면서 legend가 밑으로 깔리는 것때문에
                         해당 옵션 추가
                         */
                        if(options.use.stock){
                            graphBack.toBack();
                            svgBackground.toBack();
                        }

                    } else {
                        background[t].setBackground(rp, thisStylesGraph);
                    }

                    var rect = getLinesRectangle(TYPE, rp);

                    if(!background[t].useBorders){
                        background[t].createBorders(paper, rect, thisStylesGraph);
                    } else {
                        background[t].setBorders(rect, thisStylesGraph);
                    }


                    if(!options.use.multiYAxis){// 단일 Y축

                        if(!useColumnSeriesBullet || useColumnSeriesBullet === 'overlap' || useColumnSeriesBullet === 'updown_overlap') {

                            if(reYAxis != false) {
                                yAxis = setYAxis(options.use.multiYAxis, thisDatas, thisStyles);

                                saveYAxis[t] = yAxis;
                            } else {
                                yAxis = saveYAxis[t];
                            }

                        } else {
                            if(useColumnSeriesBullet === 'updown_bullet')
                                yAxis = [-100, -80, -60, -40, -20, 0, 20, 40, 60, 80, 100];
                            else if(useColumnSeriesBullet === 'bullet')
                                yAxis = [0, 20, 40, 60, 80, 100];
                        }
                        if(!isBarSeries) { // 바시리즈 제외
                            drawYAxis(t, GRAPH_LEFT, GRAPH_TOP, GRAPH_WIDTH, GRAPH_HEIGHT, options, thisStyles, thisStyles, yAxis, undefined);
                        } else { // 바시리즈
                            drawBarYAxis(GRAPH_LEFT, GRAPH_TOP, GRAPH_WIDTH, GRAPH_HEIGHT, options, thisStyles, yAxis, series[t]);
                        }

                        // 단일 X축
                        var tDatas = [];
                        for(var d in thisDatas){
                            if(d !== "xaxis") {
                                (thisDatas)[d].yAxis = yAxis;
                                tDatas = (thisDatas)[d].data;
                                break;
                            }
                        }
                        if(!isBarSeries){
                            drawXAxis(t, GRAPH_LEFT, GRAPH_TOP, GRAPH_WIDTH, GRAPH_HEIGHT, options, thisStyles, tDatas);
                        } else {
                            drawBarXAxis(GRAPH_LEFT, GRAPH_TOP, GRAPH_WIDTH, GRAPH_HEIGHT, options, thisStyles, tDatas, elementGroup);
                        }
                        /**
                         * 영역별 위치, 넓이, 스타일, 시리즈, 데이터, Y축값 등에 대한 정보 저장
                         * @type {Object}
                         */
                        var seriesOjbect = {};
                        seriesOjbect.key 	= t;
                        seriesOjbect.x 		= GRAPH_LEFT;
                        seriesOjbect.y 		= GRAPH_TOP;
                        seriesOjbect.width 	= GRAPH_WIDTH;
                        seriesOjbect.height = GRAPH_HEIGHT;
                        seriesOjbect.options = options;
                        seriesOjbect.styles = thisStyles;
                        seriesOjbect.series = series[t];
                        seriesOjbect.data 	= thisDatas;
                        seriesOjbect.yaxis 	= yAxis;

                        drawSeriesArray.push(seriesOjbect);

                    } else {
                        var thisSeriesID = '', yAxisCount = 0;

                        var yaxisObject = setMultiYAxis(series[t], styles[t], thisDatas);

                        for(var ts in series[t]){
                            if(ts === 'type' || (series[t])[ts].visible == false) continue;
                            var thisSeriesStyles = (styles[t]).series[ts];
                            if(thisSeriesID == '' || thisSeriesID !== (series[t])[ts].yaxisid){
                                // Y축
                                drawYAxis(t, GRAPH_LEFT, GRAPH_TOP, GRAPH_WIDTH, GRAPH_HEIGHT, options, thisStyles, thisSeriesStyles, yaxisObject[(series[t])[ts].yaxisid].data, thisSeriesID);
                                // X축
                                if(thisSeriesID == '') {
                                    drawXAxis(t, GRAPH_LEFT, GRAPH_TOP, GRAPH_WIDTH, GRAPH_HEIGHT, options, thisStyles, (thisDatas)["DATA-"+ts].data);
                                }

                                thisSeriesID = (series[t])[ts].yaxisid;
                            }
                        }
                        var seriesOjbect = {};
                        seriesOjbect.key 	= t;
                        seriesOjbect.x 		= GRAPH_LEFT;
                        seriesOjbect.y 		= GRAPH_TOP;
                        seriesOjbect.width 	= GRAPH_WIDTH;
                        seriesOjbect.height = GRAPH_HEIGHT;
                        seriesOjbect.options = options;
                        seriesOjbect.styles = thisStyles;
                        seriesOjbect.series = series[t];
                        seriesOjbect.data 	= thisDatas;
                        seriesOjbect.yaxis 	= yaxisObject;

                        drawSeriesArray.push(seriesOjbect);
                    }
                }

                var stylesMain = styles.main;
                // MOUSE TOOL TIP
                if(options.use.tip && tipElement == null) {
                    tipElement = createTip(stylesMain, stylesMain.tip.className);
                    _selector.append(tipElement);
                }
                // AXIS TOOL TIP
                if(options.use.axisTip === true || options.use.axisTip.x === true || options.use.axisTip.y === true) {
                    // X축
                    if(options.use.axisTip === true || options.use.axisTip.x === true) {
                        xAxisTipElement = createTip(stylesMain, stylesMain.tip.xAxisclassName);
                        _selector.append(xAxisTipElement);
                    }
                    // Y축
                    if(options.use.axisTip === true || options.use.axisTip.y === true) {
                        yAxisTipElement = createTip(stylesMain, stylesMain.tip.yAxisclassName);
                        _selector.append(yAxisTipElement);
                    }
                }
                if(vCross === null && hCross === null){
                    var cross = createCrossLine(paper, GRAPH_LEFT, GRAPH_TOP, GRAPH_WIDTH, GRAPH_HEIGHT, options, stylesMain);
                    vCross = cross.cross_v;
                    hCross = cross.cross_h;
                }

                // DrawSeries
                var images = [];
                if(!FIRSTAFTERSKIP){
                    for(var k in series){

                        for(var s in series[k]){
                            if(s === 'type') continue;

                            var ss = (series[k])[s];

                            if(ss.visible != false){
                                var seriesStyles = (styles[k]).series[s];
                                /* (2014.08.07 - Pyoung Da Jin)
                                 *	obj.item - image export 시에 java에서 full url을 필요로 함.
                                 *	object의 연계복사 방식을 활용함.
                                 */

                                if((typeof seriesStyles).toLowerCase() !== 'object' || !seriesStyles.hasOwnProperty('area')) break;
                                for(var j in seriesStyles.area){
                                    var seriesStylesArea = seriesStyles.area;
                                    if(seriesStylesArea.items == null && j != "items"){
                                        if(typeof seriesStylesArea[j].color === 'object' && seriesStylesArea[j].color.hasOwnProperty('src')){
                                            var obj = {};
                                            obj.key = j;
                                            obj.src = seriesStylesArea[j].color.src;
                                            obj.item = seriesStylesArea[j].color;
                                            images.push(obj);
                                        }
                                        if(seriesStylesArea[j].over != undefined && typeof seriesStylesArea[j].over.color === 'object' && seriesStylesArea[j].over.color.hasOwnProperty('src')){
                                            var obj = {};
                                            obj.key = j;
                                            obj.src = seriesStylesArea[j].over.color.src;
                                            obj.item = seriesStylesArea[j].over.color;
                                            images.push(obj);
                                        }
                                    } else if(seriesStylesArea.items != null){
                                        for(var t = seriesStylesArea.items.length; t--;){
                                            if(seriesStylesArea.items[t].color.hasOwnProperty('src')){
                                                var obj = {};
                                                obj.key = j+t;
                                                obj.src = seriesStylesArea.items[t].color.src;
                                                obj.item = seriesStylesArea.items[t].color;
                                                images.push(obj);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if(!FIRSTAFTERSKIP && images.length > 0){
                    var count = images.length;
                    var thingToDoCompleted = function (item, img) {

                        count--;
                        if (0 == count) {

                            drawSeriesFunction(drawSeriesArray);

                        }
                    };
                    var loader = function(items, thingToDo, allDone){
                        if(!items) return;
                        if("undefined" === items.length) items = [items];
                        for(var i = 0; i < items.length; i++){
                            loadImage(items, i, allDone);
                        }
                    };
                    var loadImage = function(items, i, onComplete){
                        var img = new Image();

                        img.onload = function(e){

                            items[i].item.src = img.src;
                            img = null;
                            onComplete(items[i], this);
                        };
                        img.onerror = function(e){
                            // console.log(e);
                        };
                        img.src = items[i].src;


                    };
                    loader(images, loadImage, thingToDoCompleted);
                } else {

                    drawSeriesFunction(drawSeriesArray);

                }
            };
            /**
             * 마우스 over된 아이템에 마우스 out 이벤트 강제 실행
             * @param  {Number} mouseIndex    마우스 위치에 있는 아이템의 Index
             * @return null
             */
            var nodesRollOut = function(mouseIndex, oldMouseIndex, tick){

                $.each(json, function(key, value) {

                    $.each(value, function(key2, value2) {

                        var data = value2.data;

                        var thisSeries = value2.series;

                        var elementGroup = (drawSeriesFunctions[key])[key2.split('-')[1]].elementNodes;

                        if(thisSeries === 'column' || thisSeries === 'candle') {

                            var node = (elementGroup[elementGroup.length - 1 - mouseIndex]);

                            if(node != undefined && node != null) node.trigger("mouseout", node);

                        } else {
                            if(elementGroup != undefined && elementGroup.length > 0) {

                                var node = (elementGroup[elementGroup.length - 1 - mouseIndex]);

                                if(node != undefined && node != null) node.trigger("mouseout", node);
                            } else {

                                if(mouseMoveTick != null) {

                                    mouseMoveTick.remove();

                                }
                            }
                        }

                    });
                });
                return null;
            };
            /**
             * 영역 별 마우스 이벤트 등록
             * @param  {Node} _graphBack 영역 백그라운드로 생성된 SVG Node
             * @param  {Number} _left      x좌표
             * @param  {Number} _top       y좌표
             * @param  {Number} _width     넓이
             * @param  {Number} _height    높이
             * @return null
             */
            var backgroundBindEvent = function(_graphBack, _left, _top, _width, _height){
                var over = {};
                var mouseIndex = -1, oldMouseIndex = -1, isRollOver = false;

                var mouseMoveAndDown = function(_this, _e) {
                    mouseInOutCheck = true;

                    var layout = styles.main.layout;

                    var optionsUse = options.use;

                    var m = getMousePosition(_e);
                    var mx = m.x - 1.5, my = m.y - 1.5;

                    if(vCross != null && (optionsUse.vCrossLine || optionsUse.aCrossLine) && !optionsUse.magnet){

                        var graphTop 		= layout._graphtop;
                        var graphHeight 	= graphTop;
                        var lastSeriesKey 	= '';

                        for(var i in styles) {
                            lastSeriesKey = i;
                        }

                        for(i in styles) {

                            var tLayout = styles[i].layout;

                            if(i === lastSeriesKey) {

                                if(i === 'main') {

                                    graphHeight = graphHeight + tLayout._graphheightpx;

                                } else {

                                    graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                }
                                break;
                            }
                        }
                        vCross.attr({
                            'path': drawGridLinePath(mx, graphTop, mx, graphHeight - 1),
                            'opacity': 1
                        });
                    }
                    if(hCross != null && (optionsUse.hCrossLine || optionsUse.aCrossLine) && !optionsUse.magnet){

                        hCross.attr({
                            'path': drawGridLinePath(layout._graphleft + 0.5, my, layout._graphleft + layout._graphwidthpx + 0.5, my),
                            'opacity': 1
                        });
                    }


                    if(options.func.info != null){

                        $.each(json.main, function(key, value){

                            var thisSeries = value.series,
                                thisDatas = value.data;

                            if(thisSeries === 'column' || thisSeries === 'candle'){

                                for(var j = 0, leng = thisDatas.length; j < leng; j++){

                                    var shape = thisDatas[j].shape;

                                    if(shape == undefined || !shape.hasOwnProperty('x')) continue;

                                    if(!optionsUse.stock) {

                                        if(m.x >= shape.x && m.x < shape.x + shape.width){

                                            eval(options.func.info)(thisDatas[j].data);
                                            break;
                                        }
                                    } else {

                                        if(m.x > Math.round(shape.mx) && m.x <= Math.round(shape.mx + shape.mw)){

                                            eval(options.func.info)(thisDatas[j].data);
                                            break;
                                        }
                                    }
                                }
                            } else {

                                for(var j = thisDatas.length; j--;){

                                    var shape = thisDatas[j].shape;

                                    if(shape == undefined || !shape.hasOwnProperty('x')) continue;

                                    if(!optionsUse.stock) {

                                        if(m.x >= shape.x - shape.width/2 && m.x < shape.x + shape.width/2){

                                            eval(options.func.info)(thisDatas[j].data);
                                            break;
                                        }
                                    } else {

                                        if(m.x > Math.round(shape.mx - shape.mw/2) && m.x <= Math.round(shape.mx + shape.mw/2)){

                                            eval(options.func.info)(thisDatas[j].data);
                                            break;
                                        }
                                    }
                                }
                            }
                            return false;
                        });
                    }
                    // main, sub 등 영역의 key
                    var thisGraphKey = _this[0].getAttribute('key');

                    var dataKey = '';

                    $.each(json[thisGraphKey], function(key, value){

                        var data = value.data; // 'DATA-s1'
                        var thisSeries = value.series;

                        for(var j = data.length; j--;){

                            var shape = data[j].shape;

                            if(shape == undefined || shape.hasOwnProperty('x') == false) break;

                            if(thisSeries === 'column' || thisSeries === 'candle') {

                                if(mx >= shape.x && mx < shape.x + shape.width){

                                    dataKey = key;
                                    mouseIndex = j;
                                    isRollOver = true;
                                    break;
                                } else {

                                    isRollOver = false;
                                }
                            } else if(thisSeries === 'bar') {

                                if(my >= shape.y && my < shape.y + shape.height){

                                    dataKey = key;
                                    mouseIndex = j;
                                    isRollOver = true;
                                    break;
                                } else {

                                    isRollOver = false;
                                }
                            } else {

                                var start = shape.x - shape.width/2,
                                    end = shape.x + shape.width/2;

                                if(end - start < 1) end += 1;

                                if(mx >= start && mx < end){

                                    dataKey = key;
                                    mouseIndex = j;
                                    isRollOver = true;
                                    break;
                                } else {

                                    isRollOver = false;
                                }
                            }
                        }

                        if(isRollOver) return false;
                    });

                    if(isRollOver) {


                        $.each(json, function(key, value) {

                            var firstKey = "";

                            $.each(value, function(key2, value2) {

                                if(firstKey == "") firstKey = key2;

                                var data = value2.data;

                                var thisSeries = value2.series;

                                var elementGroup = (drawSeriesFunctions[key])[key2.split('-')[1]].elementNodes;

                                var thisStyles = styles[key].series[key2.split('-')[1]];

                                var thisData = data[mouseIndex],
                                    thisShape = thisData.shape;

                                var thisSeries = series[key][key2.split('-')[1]];

                                if(optionsUse.tip){

                                    if(thisGraphKey == key && dataKey == key2){ // series중 처음 series 에 툴팁 띄우기 위함

                                        if(/column|candle|bar/i.test(thisSeries.series)) {

                                            showToolTip(options.func.tip, thisData, (thisShape.x + thisShape.width/2), thisShape.y, thisSeries);

                                        } else {

                                            if(thisSeries.series === 'area' && thisData.comp == 'down' && (thisSeries.hasOwnProperty('minaxis') || thisSeries.form === 'updown_minaxis')) {
                                                showToolTip(options.func.tip, thisData, (thisShape.x), thisShape.height, thisSeries);
                                            } else {
                                                showToolTip(options.func.tip, thisData, (thisShape.x), thisShape.y, thisSeries);
                                            }
                                        }
                                    }
                                }
                                if(optionsUse.axisTip === true || optionsUse.axisTip.x === true || optionsUse.axisTip.y === true) {

                                    var yAxisStyles = styles[key].yAxis;

                                    var yAxisPosition = yAxisStyles.position,
                                        yAxisGap = yAxisStyles.paddingLeft;

                                    if(yAxisPosition == 'left')
                                        yAxisGap = yAxisGap + yAxisStyles.width + yAxisStyles.paddingRight;
                                    else
                                        yAxisGap = yAxisGap + layout._graphwidthpx;

                                    if(optionsUse.multiYAxis)
                                        yAxisPosition = 'right';

                                    if(thisGraphKey == key && firstKey == key2){ // series중 처음 series 에 툴팁 띄우기 위함

                                        var xPosition = 0, yPosition = 0;

                                        if(/column|candle|bar/i.test(thisSeries.series)) {

                                            xPosition = (thisShape.x + thisShape.width/2), yPosition = thisShape.y;

                                        } else {

                                            if(thisSeries.series === 'area' && thisData.comp == 'down' && (thisSeries.hasOwnProperty('minaxis') || thisSeries.form === 'updown_minaxis')) {

                                                xPosition = thisShape.x, yPosition = thisShape.height;
                                            } else {

                                                xPosition = thisShape.x, yPosition = thisShape.y;

                                            }
                                        }
                                        if(optionsUse.axisTip == true || optionsUse.axisTip.x == true) {
                                            showAxisToolTip('x', xAxisTipElement, options.format.xAxis, thisData, layout, xPosition, yPosition, yAxisPosition, yAxisGap);
                                        }
                                        if(optionsUse.axisTip == true || optionsUse.axisTip.y == true) {
                                            showAxisToolTip('y', yAxisTipElement, options.format.yAxis, thisData, layout, xPosition, yPosition, yAxisPosition, yAxisGap);
                                        }

                                    }
                                }
                                if(vCross != null && (optionsUse.vCrossLine || optionsUse.aCrossLine) && optionsUse.magnet){

                                    if(thisGraphKey == key && firstKey == key2){ // series중 처음 series 에 crossline 띄우기 위함

                                        var vCrossX = thisShape.x;

                                        if(thisSeries.series === 'column' || thisSeries.series === 'candle'){

                                            vCrossX = thisShape.x + thisShape.width/2;

                                        } else if(thisSeries.series === 'bar') {

                                            if(thisData.comp == 'down' && (thisSeries.form == 'updown' || thisSeries.form == 'updown_minaxis')) {

                                                vCrossX = thisShape.x;
                                            } else {

                                                vCrossX = thisShape.x + thisShape.width;
                                            }
                                        }
                                        vCross.attr({
                                            'path': drawGridLinePath(Math.round(vCrossX) + 0.5, 0.5, Math.round(vCrossX) + 0.5, _height+0.5),
                                            'opacity': 1
                                        });

                                    }
                                }

                                if(hCross != null && (optionsUse.hCrossLine || optionsUse.aCrossLine) && optionsUse.magnet){

                                    if(thisGraphKey == key && firstKey == key2){ // series중 처음 series 에 crossline 띄우기 위함

                                        var hCrossY = thisShape.y;

                                        var isHasForm = /updown$|updown_bullet|updown_stack|updown_minaxis|updown_overlap/i.test(thisSeries.form);

                                        if(thisSeries.series === 'column' && thisData.comp === 'down' && isHasForm){

                                            hCrossY = thisShape.y + thisShape.height;

                                        } else if(thisSeries.series === 'bar') {

                                            hCrossY = thisShape.y + thisShape.height / 2;

                                        } else if(thisSeries.series === 'area' && thisData.comp === 'down' && (thisSeries.form === 'updown_minaxis' || thisSeries.hasOwnProperty('minaxis'))) {

                                            hCrossY = thisShape.height;
                                        }
                                        hCross.attr({
                                            'path': drawGridLinePath(layout._graphleft+0.5, hCrossY, layout._graphleft+layout._graphwidthpx+0.5, hCrossY),
                                            'opacity': 1
                                        });
                                    }
                                }

                                if(optionsUse.selectItem){

                                    var elementGroupCount = elementGroup.length;

                                    if(elementGroup != undefined && elementGroupCount > 0) {

                                        if(oldMouseIndex != mouseIndex){

                                            if(oldMouseIndex > -1){
                                                var oldNode = (elementGroup[elementGroupCount - 1 - oldMouseIndex]);

                                                if(oldNode != undefined && oldNode != null) oldNode.trigger('mouseout', oldNode);
                                            }

                                            var node = (elementGroup[elementGroupCount - 1 - mouseIndex]);

                                            if(node != undefined && node != null) {

                                                node.trigger("mouseover", node, {'isItemOver': false});
                                            }
                                        }

                                    } else if(thisStyles.tick != undefined && thisStyles.tick.overStyle != null) {

                                        var stylesTick = thisStyles.tick;

                                        if(mouseMoveTick == null) {

                                            mouseMoveTick = drawTick(data, thisData.index, thisData.comp, thisStyles, options, key2.split('-')[1], stylesTick.overStyle);

                                        } else {

                                            var thisDataShape = thisData.shape;

                                            mouseMoveTick.data('idx', thisData.index);

                                            switch(stylesTick.overStyle) {
                                                case "square":
                                                    mouseMoveTick.attr({
                                                        'x': thisDataShape.x - stylesTick.size,
                                                        'y': thisDataShape.y - stylesTick.size
                                                    });
                                                    break;
                                                case "triangle":
                                                    var path = mouseMoveTick.attr('path');
                                                    var origin = {x: path[0][1], y: path[0][2]};

                                                    mouseMoveTick.animate({
                                                        'path': paper.transformPath(path, ['T', thisDataShape.x - origin.x - stylesTick.size, thisDataShape.y - origin.y - stylesTick.size])
                                                    });
                                                    break;
                                                case "star":
                                                    var path = mouseMoveTick.attr('path');
                                                    var origin = {x: path[0][1], y: path[0][2]};

                                                    mouseMoveTick.animate({
                                                        'path': paper.transformPath(path, ['T', thisDataShape.x - origin.x + stylesTick.size, thisDataShape.y - origin.y])
                                                    });
                                                    break;
                                                case "diamond":
                                                    var path = mouseMoveTick.attr('path');
                                                    var origin = {x: path[0][1], y: path[0][2]};

                                                    mouseMoveTick.animate({
                                                        'path': paper.transformPath(path, ['T', thisDataShape.x - origin.x, thisDataShape.y - origin.y - stylesTick.size])
                                                    });
                                                    break;
                                                default:
                                                    mouseMoveTick.attr({
                                                        'cx': thisDataShape.x,
                                                        'cy': thisDataShape.y
                                                    });
                                                    break;
                                            }
                                        }
                                    }
                                }
                            });
                        });
                        oldMouseIndex = mouseIndex;
                    } else {
                        if(mouseIndex <= -1) return;
                        mouseMoveTick = nodesRollOut(mouseIndex, oldMouseIndex, mouseMoveTick);

                        if(tipElement != null) {

                            tipElement.hide();
                        }


                        oldMouseIndex = -1;
                        mouseIndex = -1;
                    }


                    if(options.use.selectItem){

                        try{
                            var key = _this[0].getAttribute('key');
                            if(drawSeriesFunctions[key].overItem != null){
                                drawSeriesFunctions[key].overItem.attr({
                                    x: 0, y: 0, width: 0, height: 0
                                });
                            }
                        }catch(e){}
                    }
                };

                _graphBack.unmousemove().unmouseout();

                _graphBack.mousemove(function(_e){
                    mouseMoveAndDown(this, _e);

                }).mouseout(function(){

                    if(mouseInOutCheck) return;

                    if(mouseIndex > -1){

                        mouseMoveTick = nodesRollOut(mouseIndex, oldMouseIndex, mouseMoveTick);

                        mouseIndex = -1, oldMouseIndex = -1;
                        isRollOver = false;
                    }
                    if(tipElement != null) {

                        tipElement.hide().css({opacity: 1});
                    }
                    hideCrossLine();
                });

                if(TOUCHDEVICE){
                    _graphBack.unmouseup().unmouseout();
                    _graphBack.mouseup(function(_e){
                        mouseMoveAndDown(this, _e);
                    });
                }
            };
            /**
             * 한 영역에 모든 series의 데이터를 가져올 필요가 없어서,
             * 첫번째 시리즈의 key값을 리턴시키고 종료.
             * @param  {object} objSeries 한 영역의 모든 series
             * @return {string}           첫번째 시리즈의 key값
             */
            function getFirstSeries (objSeries) {
                var firstSeries = '';
                $.each(objSeries, function(key, value) {
                    if(firstSeries == '' && key != 'type' && value.visible != false) {
                        firstSeries = key;
                        return false;
                    }
                });

                return firstSeries;
            }

            /**************************
             DRAW CHART  METHOD
             **************************/
            /**
             * 시리즈 초기화
             * @param  {Array} _drawSeriesArray 영역별 시리즈 정보를 담고 있음.
             * @return null
             */
            var drawSeriesFunction = function(_drawSeriesArray){


                for(var j = 0, len = _drawSeriesArray.length; j < len ; j++) {
                    var seriesObject = _drawSeriesArray[j];

                    element.event.trigger(EVENT.BEFORE_DRAW_SERIES_IN_GRAPH, [element, seriesObject]);

                    drawSeries(seriesObject);
                }
            };
            // 시리즈별 함수 등록
            var drawSeriesFunctions = {};
            /**
             * 시리즈 그리기
             * @param  {String} _seriesObject   영역 정보
             * @param  {String} _type    종합차트 여부(undefined 혹은 'stock')
             * @return {Array}          종합차트 일때만 return 있음.
             */
            var drawSeries = function(_seriesObject, _type){

                var _key 	= _seriesObject.key, // 메인, 서브 등 영역 Key Name
                    _x 		= _seriesObject.x, // 영역 내 X좌표
                    _y 		= _seriesObject.y, // 영역 내 Y좌표
                    _w 		= _seriesObject.width, // 영역 내 넓이
                    _h 		= _seriesObject.height, // 영역 내 높이
                    _options = _seriesObject.options, // 옵션
                    _styles = _seriesObject.styles, // 영역 스타일
                    _series = _seriesObject.series, // 영역 시리즈
                    _data 	= _seriesObject.data, // 데이터
                    _yAxis = _seriesObject.yaxis; // 영역 Y축 데이터

                var prev_seriesKey = '';
                var seriesElements = null;
                if(!drawSeriesFunctions.hasOwnProperty(_key)) drawSeriesFunctions[_key] = {};

                for(var s in _series){
                    if(s === 'type') {
                        continue;
                    }
                    var ss = _series[s];
                    if(ss.visible !== false){

                        if(ss.form === 'updown_base' || ss.form === 'updown_before'){
                            if(_options.data.prevClose != null) {

                                _data['DATA-'+s].prevcprice = Number(_options.data.prevClose);
                            } else {

                                _data['DATA-'+s].prevcprice = _data['DATA-'+s].data[0].yaxis;
                            }
                        }

                        if(!FIRSTAFTERSKIP || (drawSeriesFunctions[_key])[""+s] == undefined){

                            seriesElements = DRAWSERIES["draw" + ss.series](s, _options, _styles, ss, _key);

                            (drawSeriesFunctions[_key])[""+s] = seriesElements;

                        }

                        (drawSeriesFunctions[_key])[""+s].init(_x, _y, _w, _h, _data["DATA-"+s], (_yAxis[ss.yaxisid]) ? _yAxis[ss.yaxisid].data : _yAxis, _data["DATA-"+prev_seriesKey]);

                        prev_seriesKey = s;
                    }
                }
                if(_type === 'stock') {
                    return (drawSeriesFunctions[_key])[""+s].elementGroup;
                }
                if(options.loadingBar.use) {
                    hideLoadingBar(options.loadingBar);
                }


            };
            /**
             * 시계열일때 시리즈 그리기
             * @param  {Object} _series    영역 시리즈
             * @param  {Number} _index     진행되고 있는 아이템 index
             * @param  {Number} _stopIndex 시계열의 마지막 아이템 index
             * @return null
             */
            var drawSeriesTimeSlice = function(_series, _index, _stopIndex){
                for(var s in _series){
                    var ss = _series[s];
                    for(var k in ss){
                        var kk = ss[k];
                        if(kk === 'type') continue;
                        if(kk.visible != false){
                            if((drawSeriesFunctions[s])[""+k] != undefined){
                                eval((drawSeriesFunctions[s])[""+k]).drawTimeSlice(_index, _stopIndex);
                            }
                        }
                    }
                }
            };


            var xLabelWidth = 0; // xlabel : 텍스트의 넓이
            var xLabelGroups = {}; // xlabel text node의 그룹
            var xLabelBlanks = {}; // xlabel 클릭이벤트에 필요한 xlabel text 밑 사각형 투명 node 그룹
            var xAxisLines = {}; // x축에서 시작되는 그리드라인 그룹

            /**
             * X축 그리기
             * @param  {Number} _x X좌표
             * @param  {Number} _y Y좌표
             * @param  {Number} _w 넓이
             * @param  {Number} _h 높이
             * @param  {Object} _options 옵션
             * @param  {Object} _styles 영역 스타일
             * @param  {Array} _data 차트 데이터
             * @param  {Nodes} _elementGroup SVG 노드 그룹
             * @return {Nodes}
             */
            var drawXAxis = function(_key, _x, _y, _w, _h, _options, _styles, _data, _elementGroup){

                var optionsFormatXAxis = _options.format.xAxis;
                var optionsUseStock = _options.use.stock;

                var graphStyles = _styles.graph;
                var xAxisStyles = _styles.xAxis;
                var xAxisStylesText = xAxisStyles.text;
                var xAxisStylesValueAll = xAxisStyles.useValue.all;

                var stylesLayoutCanvasWidth = _styles.layout._canvaswidthpx;

                var isHasXlabelGroupsKey = xLabelGroups.hasOwnProperty(_key);

                /**
                 * 텍스트 길이 픽셀값 구하기
                 * @param  {String} _str 글자
                 * @return {Number}      [description]
                 */
                var getTextWidth = function(_str){

                    var size = xAxisStylesText.size;
                    if(xAxisStylesText.hasOwnProperty('minSize')) {
                        size = xAxisStylesText.minSize;
                    }
                    var text = paper.text(0, 0, _str).attr({
                        'font-size': size
                    });
                    var textWidth = text.getBBox().width;
                    text.remove();

                    return textWidth;
                };

                var fontStyles = {
                    'font-family': xAxisStylesText.family,
                    'font-size': xAxisStylesText.size,
                    'font': xAxisStylesText.size + " '" + xAxisStylesText.family+"'",
                    'fill': xAxisStylesText.color,
                    'opacity': xAxisStylesText.opacity,
                    'font-weight': xAxisStylesText.style
                };

                var count = _data.length;

                var xGap = (_w - graphStyles.paddingLeft - graphStyles.paddingRight) / count;
                var xGapHalf = xGap / 2;

                var startX = _x + graphStyles.paddingLeft;

                if(xAxisStyles.baseAtStart) {
                    xGapHalf = 0;
                    xGap = (xGap * count + xGap) / count;
                }

                var value = String((_data[0]).xaxis);

                if(xLabelWidth <= 0){
                    // xLabel 넓이 구하기
                    if(optionsFormatXAxis == null) {

                        xLabelWidth = getTextWidth(value);
                    } else {

                        xLabelWidth = getTextWidth(eval(optionsFormatXAxis)(value));
                    }
                }

                var xLabelWidthHalf = xLabelWidth / 2;
                var xLabelSkip = xLabelWidth + xAxisStyles.gap;

                var path = "", group = [], fontHeightHalf = xAxisStylesText.size / 2;

                var yPos = _y + _h,
                    yTextPos = yPos + xAxisStyles.paddingTop + fontHeightHalf;

                var useLine = (xAxisStyles.line.width > 0) ? true : false;
                var useText = (xAxisStylesText.size > 0) ? true : false;

                var drawedXais = [];

                var gap = 0, skip = 0, text;
                var xLabelCount = 0;
                for(var i = 0; i < count; i++){
                    gap = (xGap * i) + startX;

                    if(((_data[i]).xaxis).trim() != "")
                        if(optionsFormatXAxis == null) {
                            value = (_data[i]).xaxis;
                        } else {
                            value = eval(optionsFormatXAxis)((_data[i]).xaxis);
                        }
                    else
                        value = "";

                    if((gap - xLabelWidthHalf <= startX && i != 0) && !xAxisStylesValueAll){
                        continue;
                    }



                    //xlabel 중복일때 skip 처리 [박대영 2017.06.13]
                    if($.inArray(value, drawedXais) > -1) {
                        continue;
                    }else {
                        drawedXais.push(value);
                    }

                    if(skip <= gap && CHART_WIDTH > gap || xAxisStyles.useValue.last && i == count - 1 || xAxisStylesValueAll){
                        var x =  gap + xGapHalf + 1;
                        if(useLine){
                            if(!xAxisStyles.baseAtStart || xAxisStyles.baseAtStart && (i > 0 && i < count - 1)){
                                if(!xAxisStyles.betweenLabels){
                                    path += drawGridLinePath(x, _y, x, yPos);
                                } else if(i > 0) {
                                    path += drawGridLinePath(gap, _y, gap, yPos);
                                }
                            }
                        }
                        if(useText){

                            if((optionsUseStock != true && x > 0 && x + xLabelWidthHalf < stylesLayoutCanvasWidth) ||
                                (optionsUseStock && x - xLabelWidthHalf > options.stock.menuWidth)){

                                if(i == 0 && !xAxisStyles.useValue.first) {

                                } else {
                                    if(isHasXlabelGroupsKey === false){

                                        text = drawFillText(paper, value, x, yTextPos, 0, 'center');
                                        text.attr(fontStyles);

                                        group.push(text);

                                        xLabelCount ++;
                                    } else {
                                        var xLabelItem = (xLabelGroups[_key])[xLabelCount];
                                        if(xLabelItem != undefined){
                                            if(xAxisStylesText.align == 'right'){
                                                x = x + _w;
                                            } else if(xAxisStylesText.align == 'center'){
                                                _x = _x + _w/2;
                                            }
                                            xLabelItem.attr({
                                                'text': value,
                                                'x': x,
                                                'y': yTextPos,
                                                'opacity': 1
                                            });
                                        } else {
                                            text = drawFillText(paper, value, x, yTextPos, 0, 'center').attr(fontStyles);
                                            (xLabelGroups[_key]).push(text);
                                        }
                                        xLabelCount ++;
                                    }
                                }
                            }
                        }
                        skip = gap + xLabelSkip;
                    }
                }
                if(useText && xLabelGroups.hasOwnProperty(_key)){

                    if(xLabelGroups[_key].length > xLabelCount){

                        var cloneItem = xLabelGroups[_key];

                        var delItem = cloneItem.splice(xLabelCount, xLabelGroups[_key].length - xLabelCount);
                        delItem.remove();
                    }
                }
                if(optionsUseStock && (_key === 'pnf' || _key === 'three')){
                    // pnf, threeline은 x축 value 안보이므로 text 생성 필요 없음.
                    if(useLine) {
                        xAxisLines[_key] = paper.path(path).attr({
                            'stroke': xAxisStyles.line.color,
                            'stroke-width': xAxisStyles.line.width
                        });
                    }
                } else {
                    if(useLine) {
                        if(!xAxisLines.hasOwnProperty(_key)){
                            xAxisLines[_key] = paper.path(path).attr({
                                'stroke': xAxisStyles.line.color,
                                'stroke-width': xAxisStyles.line.width
                            });
                        } else {
                            xAxisLines[_key].attr({'path': path});
                        }
                    }
                    if(useText){
                        if(!xLabelGroups.hasOwnProperty(_key)){

                            group = paper.set(group).attr(fontStyles);

                            xLabelGroups[_key] = group;
                        }

                        if(xAxisStylesValueAll){

                            var thisGroup = xLabelGroups[_key];
                            for(var i = 1, len = thisGroup.length; i < len; i ++){
                                var prevE = thisGroup[i - 1], thisE = thisGroup[i];
                                var prevB = prevE.getBBox(), thisB = thisE.getBBox();
                                var prevX = prevB.x, prevW = prevB.width, prevH = prevW / 2, prevY = prevB.y;
                                var thisX = thisB.x, thisW = thisB.width, thisH = thisW / 2, thisY = thisB.y;

                                if(prevX + prevH >= thisX - thisH && prevY == thisY){
                                    thisE.attr({y: thisY + thisB.height + thisB.height/2});
                                }
                            };
                        }
                    }
                }
                if(options.use.clickXAxis){
                    paper.set(xLabelBlanks[_key]).remove();
                    xLabelBlanks[_key] = [];

                    var xLabelGroupsKey = xLabelGroups[_key];

                    for(var i = 0, len = xLabelGroupsKey.length; i < len; i ++) {

                        var textNode = xLabelGroupsKey[i];

                        var blank = paper.rect().attr(textNode.getBBox()).attr({
                            'fill': "#000",
                            'opacity': 0,
                            'cursor': "pointer"
                        }).data("nodeIndex", i).click(function(){

                            var node = xLabelGroupsKey[this.data('nodeIndex')];

                            element.xAxisClickEvent(node.attr('text'), node, xLabelGroupsKey);
                        });
                        xLabelBlanks[_key].push(blank);
                    }
                }

                if(_elementGroup != undefined){
                    _elementGroup.unshift(xAxisLines[_key]);
                    _elementGroup.unshift(xLabelGroups[_key]);
                    return _elementGroup;
                }
            };

            var yLabelGroups = {}; // ylabel text node의 그룹
            var yAxisLines = {}; // y축에서 시작되는 그리드라인 그룹
            /**
             * y축 그리기
             * @param  {String} _key              메인, 서브 등 영역 Key Name
             * @param  {Number} _x       영역 내 X좌표
             * @param  {Number} _y       영역 내 Y좌표
             * @param  {Number} _w       영역 내 넓이
             * @param  {Number} _h       영역 내 높이
             * @param  {Object} _options 옵션
             * @param  {Object} _styles  영역 스타일
             * @param  {Object} _thisSeriesStyles 단일축일때는 영역의 y스타일, 멀티축일때는 기준시리즈의 y스타일
             * @param  {Array} _data             setYAxis()에서 구해진 Y축 값 배열
             * @param  {String} _thisSeriesID     단일축일때는 undefined, 멀티축일때는 기준시리즈의 ID
             * @param  {Nodes} _elementGroup 		SVG 노드 그룹
             * @return {Nodes}                   SVG 노드 그룹
             */
            var drawYAxis = function(_key, _x, _y, _w, _h, _options, _styles, _thisSeriesStyles, _data, _thisSeriesID, _elementGroup){

                var thisSeriesStylesYAxis = _thisSeriesStyles.yAxis;
                var thisSeriesStylesYAxisText = thisSeriesStylesYAxis.text;

                var yAxisStyles = _styles.yAxis;

                var prevGap = 0, alter = 0, yLabel_x = 0;
                var step = 1;

                var fontSize = thisSeriesStylesYAxisText.size;
                var fontAlign = thisSeriesStylesYAxisText.align;
                var fontWidth = thisSeriesStylesYAxis.width;

                var fontStyles = {
                    'font-family': 	thisSeriesStylesYAxisText.family,
                    'font-size': 	fontSize+'px',
                    'font': 		fontSize + " '" + thisSeriesStylesYAxisText.family+"'",
                    'fill': 		thisSeriesStylesYAxisText.color,
                    'opacity': 		thisSeriesStylesYAxisText.opacity,
                    'text-anchor': 	labelAlign(fontAlign),
                    'font-weight': 	thisSeriesStylesYAxisText.style
                };

                if(thisSeriesStylesYAxis.position === 'left') {

                    yLabel_x = _x - fontWidth - thisSeriesStylesYAxis.paddingRight;
                } else {

                    yLabel_x = _x + _w + thisSeriesStylesYAxis.paddingLeft;
                }

                var yLabelHeightHalf = Math.round(fontSize / 2);

                var height = _h - _styles.graph.paddingTop - _styles.graph.paddingBottom;

                if(_data.length >= 10 && !_styles.yAxis.hasOwnProperty('step') && !useColumnSeriesBullet) {
                    step = 1;
                }

                var path = "", group = [];

                var useLine = (yAxisStyles.line.width > 0) ?  true : false;
                var useText = (fontSize > 0) ? true : false;

                var gap, text;
                var value = '';
                var yLabelCount = 0;
                alter = 0;
                var check = false;

                for(var i = 0, len = _data.length; i < len; i += step) {
                    gap = ylabelInterval(height, _data, i);
                    gap = Math.round(height - gap + _y + _styles.graph.paddingTop) + 0.5;

                    if(i == 0) {prevGap = gap + fontSize;}

                    if(i == 0 && !thisSeriesStylesYAxis.useValue.min) {
                        continue;
                    } else if(i == len - 1 && !thisSeriesStylesYAxis.useValue.max){
                        continue;
                    }

                    if(prevGap <= gap + fontSize  || gap <= 0){
                        alter = alter + 1;
                        check = true;
                    } else {
                        prevGap = gap;
                        if(i > 0 && check) break;
                    }

                }

                var zeroIndex = 0;
                // baseAtZero 이며 단일축일때 zeroIndex를 구함.
                if(_styles.yAxis.baseAtZero && _thisSeriesID == undefined) {
                    for(i = 0, len = _data.length; i < len; i++) {
                        if(_data[i] == 0) {
                            zeroIndex = i;

                            break;
                        }
                    }
                }

                var alterCopy = 0;
                for(i = zeroIndex, len = _data.length; i < len; i += step){

                    if(alterCopy <= 0) {

                        gap = ylabelInterval(height, _data, i);
                        gap = Math.round(height - gap + _y + _styles.graph.paddingTop) + 0.5;

                        if(i == 0 && !thisSeriesStylesYAxis.useValue.min) {continue;}
                        else if(i == len - 1 && !thisSeriesStylesYAxis.useValue.max){continue;}


                        value = _data[i];
                        if(_options.format.yAxis != null){
                            value = eval(_options.format.yAxis)(value, _key);
                        } else {
                            if(thisSeriesStylesYAxisText.format != null){
                                value = eval(thisSeriesStylesYAxisText.format)(value, _key);
                            }
                        }
                        if(useLine && (_thisSeriesID == '' || _thisSeriesID == undefined)){
                            if(_y < gap && _y + 1 < gap && i > 0){
                                // 맨 밑줄은 무조건 탈락, 0.5 픽셀차이로 맨 위 라인이 그려지는것 방지,
                                path += drawGridLinePath(_x, gap, _x + _w, gap);
                            }
                        }
                        if(useText){

                            if(options.use.stock && (_key === 'pnf' || _key === 'three')){
                                text = drawFillText(paper, value, yLabel_x, gap, fontWidth, fontAlign);
                                group.push(text);
                            } else {
                                if(!yLabelGroups.hasOwnProperty(_key) ||
                                    yLabelGroups.hasOwnProperty(_key) && !yLabelGroups[_key].hasOwnProperty(thisSeriesStylesYAxis.position)){

                                    text = drawFillText(paper, value, yLabel_x, gap, fontWidth, fontAlign);
                                    text.attr(fontStyles);
                                    group.push(text);
                                } else {
                                    var yLabelItem = ((yLabelGroups[_key])[thisSeriesStylesYAxis.position])[yLabelCount];
                                    if(yLabelItem != undefined){
                                        var labelX = yLabel_x;
                                        if(fontAlign === 'right'){
                                            labelX = yLabel_x + fontWidth;
                                        } else if(fontAlign === 'center'){
                                            labelX = yLabel_x + fontWidth / 2;
                                        }
                                        yLabelItem.attr({
                                            'text': value,
                                            x: labelX,
                                            y: Math.round(gap),
                                            opacity: thisSeriesStylesYAxisText.opacity
                                        });
                                    } else {
                                        text = drawFillText(paper, value, yLabel_x, gap, fontWidth, fontAlign);
                                        text.attr(fontStyles);
                                        yLabelGroups[_key][thisSeriesStylesYAxis.position].push(text);
                                    }
                                }
                            }

                            yLabelCount ++;
                        }
                    }

                    if(alterCopy <= 0) {
                        alterCopy = alter + 1;
                    }
                    alterCopy = alterCopy - 1;
                }

                /**
                 * zeroIndex가 0보다 크다는 것은 마이너스 값이 존재하기 때문에 0이 아니라는 뜻이다.
                 * 그 마이너스 값을 그리기 위한 소스임.2016.02.04
                 */
                if(zeroIndex > 0) {

                    for(var i = zeroIndex , len = 0; i > len; i -= step){

                        if(alterCopy <= 0) {

                            gap = ylabelInterval(height, _data, i);
                            gap = Math.round(height - gap + _y + _styles.graph.paddingTop) + 0.5;

                            if(i == 0 && !thisSeriesStylesYAxis.useValue.min) {continue;}
                            else if(i == len - 1 && !thisSeriesStylesYAxis.useValue.max){continue;}


                            value = _data[i];
                            if(_options.format.yAxis != null){
                                value = eval(_options.format.yAxis)(value, _key);
                            } else {
                                if(thisSeriesStylesYAxisText.format != null){
                                    value = eval(thisSeriesStylesYAxisText.format)(value, _key);
                                }
                            }
                            if(useLine && (_thisSeriesID == '' || _thisSeriesID == undefined)){
                                if(_y < gap && _y + 1 < gap && i > 0){
                                    // 맨 밑줄은 무조건 탈락, 0.5 픽셀차이로 맨 위 라인이 그려지는것 방지,
                                    path += drawGridLinePath(_x, gap, _x + _w, gap);
                                }
                            }
                            if(useText && value != 0){

                                if(options.use.stock && (_key === 'pnf' || _key === 'three')){
                                    text = drawFillText(paper, value, yLabel_x, gap, fontWidth, fontAlign);
                                    group.push(text);
                                } else {
                                    if(!yLabelGroups.hasOwnProperty(_key) ||
                                        yLabelGroups.hasOwnProperty(_key) && !yLabelGroups[_key].hasOwnProperty(thisSeriesStylesYAxis.position)){
                                        text = drawFillText(paper, value, yLabel_x, gap, fontWidth, fontAlign);
                                        text.attr(fontStyles);
                                        group.push(text);
                                    } else {
                                        var yLabelItem = ((yLabelGroups[_key])[thisSeriesStylesYAxis.position])[yLabelCount];
                                        if(yLabelItem != undefined){
                                            var labelX = yLabel_x;
                                            if(fontAlign === 'right'){
                                                labelX = yLabel_x + fontWidth;
                                            } else if(fontAlign === 'center'){
                                                labelX = yLabel_x + fontWidth / 2;
                                            }
                                            yLabelItem.attr({
                                                'text': value,
                                                'x': labelX,
                                                'y': Math.round(gap),
                                                'opacity': thisSeriesStylesYAxisText.opacity
                                            });
                                        } else {
                                            text = drawFillText(paper, value, yLabel_x, gap, fontWidth, fontAlign);
                                            text.attr(fontStyles);
                                            yLabelGroups[_key][thisSeriesStylesYAxis.position].push(text);
                                        }
                                    }
                                }

                                yLabelCount ++;
                            }
                        }

                        if(alterCopy <= 0) {
                            alterCopy = alter + 1;
                        }
                        alterCopy = alterCopy - 1;
                    }
                }

                if(useText && yLabelGroups.hasOwnProperty(_key) && yLabelGroups[_key].hasOwnProperty(thisSeriesStylesYAxis.position)){

                    if((yLabelGroups[_key])[thisSeriesStylesYAxis.position].length > yLabelCount){

                        var cloneItem = yLabelGroups[_key][thisSeriesStylesYAxis.position];
                        var delItem = cloneItem.splice(yLabelCount, yLabelGroups[_key][thisSeriesStylesYAxis.position].length - yLabelCount);
                        delItem.remove();
                    }
                }
                if(options.use.stock && (_key === 'pnf' || _key === 'three')){
                    if(useLine && path != '') {
                        yAxisLines[_key] = paper.path(path).attr({'stroke': yAxisStyles.line.color, 'stroke-width': yAxisStyles.line.width});
                    }
                    if(useText) {

                        group = paper.set(group).attr(fontStyles);

                        if(typeof yLabelGroups[_key] != 'object'){
                            (yLabelGroups[_key]) = {};
                        }
                        ((yLabelGroups)[_key])[thisSeriesStylesYAxis.position] = group;
                    }
                } else {
                    if(useLine && path != '') {

                        if(!yAxisLines.hasOwnProperty(_key))
                            yAxisLines[_key] = paper.path(path).attr({'stroke': yAxisStyles.line.color, 'stroke-width': yAxisStyles.line.width});
                        else
                            yAxisLines[_key].attr({path: path});
                    }
                    if(useText && (!yLabelGroups.hasOwnProperty(_key) || yLabelGroups.hasOwnProperty(_key) && !yLabelGroups[_key].hasOwnProperty(thisSeriesStylesYAxis.position))) {

                        group = paper.set(group).attr(fontStyles);

                        if(typeof yLabelGroups[_key] != 'object'){
                            (yLabelGroups[_key]) = {};
                        }
                        ((yLabelGroups)[_key])[thisSeriesStylesYAxis.position] = group;
                    }
                }

                if(_elementGroup != undefined){
                    _elementGroup.unshift(yAxisLines[_key]);
                    _elementGroup.unshift(((yLabelGroups)[_key])[thisSeriesStylesYAxis.position]);
                    return _elementGroup;
                }
            };
            /**
             * 바시리즈의 X축 그리기 : Y축위치에 그려짐
             * 바시리즈의 경우 다른 시리즈와 혼합하지 않으며, 단일축이다.
             * @param  {Number} _x 				X좌표
             * @param  {Number} _y 				Y좌표
             * @param  {Number} _w 				넓이
             * @param  {Number} _h 				높이
             * @param  {Object} _options 		옵션
             * @param  {Object} _styles 		영역 스타일
             * @param  {Object} _thisSeriesStyles 영역 스타일
             * @param  {Array} _data 			차트 데이터
             * @param  {Nodes} _elementGroup SVG 노드 그룹
             * @return {Nodes}
             */
            var drawBarXAxis = function(_x, _y, _w, _h, _options, _thisSeriesStyles, _data, _elementGroup){
                var count = _data.length;

                var thisSeriesStylesGraph = _thisSeriesStyles.graph;
                var thisSeriesStylesYAxis = _thisSeriesStyles.yAxis;

                var xGap = (_w - thisSeriesStylesGraph.paddingLeft - thisSeriesStylesGraph.paddingRight) / count;

                if(thisSeriesStylesYAxis.position === 'left') {
                    yLabel_x = _x - thisSeriesStylesYAxis.width - thisSeriesStylesYAxis.paddingRight;
                } else {
                    yLabel_x = _x + _w + thisSeriesStylesYAxis.paddingLeft;
                }

                var height = _h - thisSeriesStylesGraph.paddingTop - thisSeriesStylesGraph.paddingBottom;

                var yGap = (height / _data.length);

                var gap = 0;
                var value = '', path = '', group = [];
                var xLabelWidth = thisSeriesStylesYAxis.width;

                var textSize = thisSeriesStylesYAxis.text.size;

                for(var i = 0; i < count; i++){

                    gap = (yGap * i) + _thisSeriesStyles.layout.paddingTop + thisSeriesStylesGraph.paddingTop + 0.5;

                    if(_options.format.xAxis == null) {
                        value = (_data[i]).xaxis;
                    } else {
                        value = eval(_options.format.xAxis)((_data[i]).xaxis);
                    }

                    if(thisSeriesStylesYAxis.line.width > 0 && i > 0){
                        path += drawGridLinePath(_x, gap, _x + _w, gap);
                    }

                    if(textSize > 0){
                        var text = drawFillText(paper, value, yLabel_x, Math.round(gap + yGap/2), xLabelWidth,
                            thisSeriesStylesYAxis.text.align);
                        group.push(text);
                    }
                }
                if(thisSeriesStylesYAxis.line.width > 0) {
                    _elementGroup.unshift(paper.path(path).attr({'stroke': thisSeriesStylesYAxis.line.color, 'stroke-width': thisSeriesStylesYAxis.line.width}));
                }
                if(textSize > 0){

                    group = paper.set(group).attr({
                        'font-family': 	thisSeriesStylesYAxis.text.family,
                        'font-size': 	textSize+'px',
                        'font': 		textSize + " '" + thisSeriesStylesYAxis.text.family+"'",
                        'fill': 		thisSeriesStylesYAxis.text.color,
                        'opacity': 		thisSeriesStylesYAxis.text.opacity,
                        'text-anchor': 	labelAlign(thisSeriesStylesYAxis.text.align),
                        'font-weight': 	thisSeriesStylesYAxis.text.style
                    });
                    _elementGroup.unshift(group);
                }
            };
            /**
             * 바시리즈의 y축 그리기 : X축위치에 그려짐
             * 바시리즈의 경우 다른 시리즈와 혼합하지 않으며, 단일축이다.
             * @param  {Number} _x       		영역 내 X좌표
             * @param  {Number} _y       		영역 내 Y좌표
             * @param  {Number} _w       		영역 내 넓이
             * @param  {Number} _h       		영역 내 높이
             * @param  {Object} _options 		옵션
             * @param  {Object} _styles  		영역 스타일
             * @param  {Array} _data            setYAxis()에서 구해진 Y축 값 배열
             * @param  {String} _series     	시리즈
             * @return null
             */
            var drawBarYAxis = function(_x, _y, _w, _h, _options, _styles, _data, _series){

                var graphStyles = _styles.graph;
                var xAxisStyles = _styles.xAxis;

                /* 폰트 관련 */
                var fontSize 	= xAxisStyles.text.size;
                var fontFamily 	= xAxisStyles.text.family;

                var fontHeightHalf = Math.round(fontSize/2);

                var fontStyles = {
                    'font-family'	: fontFamily,
                    'font-size'		: fontSize+'px',
                    'font'			: fontSize + " '" + fontFamily+"'",
                    'fill'			: xAxisStyles.text.color,
                    'opacity'		: xAxisStyles.text.opacity,
                    'text-anchor'	: labelAlign(xAxisStyles.text.align),
                    'font-weight'	: xAxisStyles.text.style
                };


                var getTextWidth = function(_str){
                    _selector.append("<div class='svgtextwidth' style='display: inline;font-size:"+fontSize+";font-family:"+fontFamily+";'>"+_str+"</div>");
                    var textWidth = _selector.find('.svgtextwidth').innerWidth();
                    _selector.find('.svgtextwidth').remove();

                    return textWidth;
                };

                var thisForm = 'normal';
                for(var i in _series) {
                    if(i === 'type') continue;

                    if(_series[i].hasOwnProperty('form')){

                        thisForm = _series[i].form;
                        break;
                    }
                }

                var value = '';
                var path = []; // 그리드라인 그룹
                var group = []; // xLabel 그룹
                var prevGap = 0;
                var step = 1;



                // 무조건 출력 기본으로 세팅
                var useValue = {
                    min: true,
                    max: true
                };

                if(!xAxisStyles.hasOwnProperty('useValue')){
                    xAxisStyles.useValue = {};
                }
                xAxisStyles.useValue = $.extend(true, useValue, xAxisStyles.useValue);

                if(_data.length >= 10 && !_styles.yAxis.hasOwnProperty('step') && !useColumnSeriesBullet) {

                    step = 2;
                }

                var formatFunc = '';
                if(_options.format.yAxis != null) {
                    formatFunc = _options.format.yAxis;
                } else if(_styles.format != undefined && _styles.format.yAxis != null) {
                    formatFunc = _styles.format.yAxis;
                } else {
                    formatFunc = function(text) { return String(text);}
                }
                /* 사이즈 관련 */
                var width = _w - graphStyles.paddingLeft - graphStyles.paddingRight;

                // X라벨들의 최대 넓이 구하기
                var xLabelMaxWidth = 0;
                for(var i = 0, len = _data.length; i < len; i += step){

                    value = _data[i];

                    value = eval(formatFunc)(value);

                    var xLabelWidth = getTextWidth(value) + 10;

                    xLabelMaxWidth = Math.max(xLabelMaxWidth, xLabelWidth);
                }

                var xLabelWidthHalf = Math.round((xLabelMaxWidth) / 2);

                var xLabelY = _y + _h;

                var xTextY = xLabelY + xAxisStyles.paddingTop + fontHeightHalf;

                // 일반형태일때
                if(thisForm != 'updown' && thisForm != 'updown_stack') {

                    for(var i = 0, len = _data.length; i < len; i += step){

                        var gap = ylabelInterval(width, _data, i);
                        gap = Math.round(gap + _x + graphStyles.paddingLeft) - 0.5;

                        value = _data[i];

                        value = eval(formatFunc)(value);

                        if(gap < prevGap || gap + xLabelWidthHalf > CHART_WIDTH) continue;

                        if(i == 0 && !xAxisStyles.useValue.min) continue;

                        if(xAxisStyles.line.width > 0 && i > 0){
                            if((thisForm === 'bullet' || thisForm === 'updown_bullet') && i === (len - 1)) {
                                // 불렛형식은 0부터 100까지 무조건 출력되는데 마지막 선은 그릴 필요가 없기 때문에 조건문으로 걸러낸다.
                            } else {

                                path.push(drawGridLinePath(gap, _y, gap, xLabelY));
                            }
                        }

                        if(fontSize > 0){

                            var text_x = gap - xLabelWidthHalf;


                            var text = drawFillText(paper, value, text_x, xTextY, xLabelMaxWidth, 'center');
                            text.attr(fontStyles);

                            group.push(text);
                            elementGroup.unshift(text);
                        }

                        prevGap = gap + xLabelMaxWidth;
                    }

                    // 우축 사용시에 마지막 path는 삭제
                    if(_styles.yAxis.position === 'right') {
                        path.pop();
                    }

                    if(xAxisStyles.useValue.max == false) {
                        path.pop();
                        path = path.join();
                        group[group.length - 1].remove();
                    } else {
                        path = path.join();
                    }

                    if(xAxisStyles.line.width > 0) {
                        var drawline = paper.path(path).attr({
                            'stroke'		: xAxisStyles.line.color,
                            'stroke-width'	: xAxisStyles.line.width
                        });
                        elementGroup.unshift(drawline);
                    }
                } else {
                    // updown, updown_stack
                    var zeroIndex = 0;
                    for(var i = 0, len = _data.length; i < len; i ++){
                        if(_data[i] === 0) {
                            zeroIndex = i;
                            break;
                        }
                    }

                    // 상승
                    for(i = zeroIndex, len = _data.length; i < len; i += step){
                        var gap = ylabelInterval(width, _data, i);

                        gap = Math.round(gap + _x + graphStyles.paddingLeft) - 0.5;

                        value = _data[i];
                        value = eval(formatFunc)(value);

                        if(gap < prevGap || gap + xLabelWidthHalf > CHART_WIDTH) continue;

                        if(xAxisStyles.line.width > 0 && i > 0){
                            path.push(drawGridLinePath(gap, _y, gap, xLabelY));
                        }

                        if(fontSize > 0){

                            var text = drawFillText(paper, value, gap - xLabelWidthHalf, xTextY, xLabelMaxWidth, 'center');
                            text.attr(fontStyles);

                            group.push(text);
                            elementGroup.unshift(text);
                        }

                        prevGap = gap + xLabelMaxWidth;
                    }
                    // 하락
                    for(i = zeroIndex; i >= 0; i -= step){

                        var gap = ylabelInterval(width, _data, i);

                        gap = Math.round(gap + _x + graphStyles.paddingLeft) - 0.5;

                        value = _data[i];
                        value = eval(formatFunc)(value);

                        if(gap > prevGap || gap - xLabelWidthHalf < 0) continue;

                        if(xAxisStyles.line.width > 0 && i > 0){
                            path.unshift(drawGridLinePath(gap, _y, gap, xLabelY));
                        }

                        if(fontSize > 0){

                            var text = drawFillText(paper, value, gap - xLabelWidthHalf, xTextY, xLabelMaxWidth, 'center');
                            text.attr(fontStyles);

                            group.unshift(text);
                            elementGroup.unshift(text);
                        }

                        prevGap = gap - xLabelMaxWidth;
                    }
                    // 우축 사용시에 마지막 path는 삭제
                    if(_styles.yAxis.position === 'right') {
                        path.pop();
                    }

                    if(xAxisStyles.useValue.max != false && xAxisStyles.useValue.min != false) {
                        path = path.join();

                    } else {
                        if(xAxisStyles.useValue.min == false) {
                            path.shift();
                            group[0].remove();
                        }
                        if(xAxisStyles.useValue.max == false) {
                            path.pop();
                            group[group.length - 1].remove();
                        }
                        path = path.join();

                    }

                    if(xAxisStyles.line.width > 0) {
                        elementGroup.unshift(paper.path(path).attr({'stroke': xAxisStyles.line.color, 'stroke-width': xAxisStyles.line.width}));
                    }
                }
            };



            /**************************
             DRAW SERIES  METHOD
             **************************/
                // 시리즈별 생성 함수를 저장한다.
            var DRAWSERIES = {};
            /**
             * 세로막대(Column)시리즈 그리기
             * @param  {String} _serieskey 메인, 서브 등 영역 Key Name
             * @param  {Object} _options   옵션
             * @param  {Object} _styles    스타일
             * @param  {Object} _series    시리즈
             * @return {Function}            그려진 시리즈 객체
             */
            DRAWSERIES.drawcolumn = function(_serieskey, _options, _styles, _series){
                // 기본 스타일 정의
                var defaultStyles = {
                    itemWidth: 60,
                    area: {
                        normal: { color: [ [0, '#2bcdba'], [100, '#6bdccf'] ], opacity: 1, over: {color: [ [0, '#2bcdba'], [100, '#6bdccf'] ], opacity: 1}},
                        up: 	{ color: [ [0, '#fe5855'], [100, '#fe8a88'] ], opacity: 1, over: {color: [ [0, '#ca2c29'], [100, '#d55552'] ], opacity: 1}},
                        down: 	{ color: [ [0, '#4db4e4'], [100, '#0093d8'] ], opacity: 1, over: {color: [ [0, '#337fb9'], [100, '#0260a9'] ], opacity: 1}},
                        flat: 	{ color: [ [0, '#6a8091'], [100, '#8899a7'] ], opacity: 1, over: {color: [ [0, '#4f677a'], [100, '#718594'] ], opacity: 1}},
                        items: null
                    },
                    line: {
                        normal: { color: '#2bcdba', width: 0, opacity: 1, over: { color: '#2bcdba', width: 0, opacity: 1 } },
                        up:     { color: '#fe5855', width: 0, opacity: 1, over: { color: '#fe5855', width: 0, opacity: 1 } },
                        down:   { color: '#4db4e4', width: 0, opacity: 1, over: { color: '#4db4e4', width: 0, opacity: 1 } },
                        flat:   { color: '#6a8091', width: 0, opacity: 1, over: { color: '#6a8091', width: 0, opacity: 1 } },
                        base:   { color: '#465866', width: 2, opacity: 1, over: { color: '#465866', width: 2, opacity: 1 } },
                        items: null
                    },
                    gradient: {
                        direction: 'vertical'
                    },
                    text: {
                        use: false, valign: 'top',
                        family: 'Noto Sans KR', size: 12, color: '#666666', align: 'center',
                        style: 'normal', opacity: 1, format: null, func: null
                    },
                    accessibility: {
                        use: false, style: 'normal'
                    },
                    itemRenderer: {
                        style: 'normal', // normal, ox
                        setRenderer: null
                    }
                };

                var self = {};

                var options = _options, series = _series;
                // 해당 시리즈 스타일만
                var thisSeriesStyles = $.extend(true, defaultStyles, _styles.series[_serieskey]);

                if(TYPE == 'VML') {
                    // 글꼴 흐림현상으로 VML은 Dotum으로 Fix
                    thisSeriesStyles.text.family = ie8Font;
                }

                _styles.series[_serieskey] = thisSeriesStyles;
                // 영역 스타일 전체
                var thisStyles = self.styles = _styles;

                var GRAPH_TOP = 0, GRAPH_LEFT = 0, GRAPH_WIDTH = 0, GRAPH_HEIGHT = 0;
                var yAxisMax = 0, yAxisMin = 0, yAxisGap = 0;

                var seriesColumnCount = (_styles.seriesBCCount > 0) ? _styles.seriesBCCount : 1;
                var seriesColumnIndex = (thisSeriesStyles.seriesBCIndex > 0) ? thisSeriesStyles.seriesBCIndex: 1; // stack, double

                var elementGroups = [];
                self.elementGroup = null;
                self.elementNodes = [];

                var thisData = null;
                // 활성화된 아이템 저장
                self.overItem = null;
                /**
                 * 시리즈 실행
                 * @param  {Number} _x        		시리즈가 그려질 X위치
                 * @param  {Number} _y         		시리즈가 그려질 Y위치
                 * @param  {Number} _w         		시리즈가 그려질 넓이
                 * @param  {Number} _h        		시리즈가 그려질 높이
                 * @param  {Array} _data      		차트데이터
                 * @param  {Array} _yAxis     		Y축 값 데이터 배열
                 * @param  {Number} _prev_data 		base, before 폼계열에서 사용하는 값으로 전일비교금액이 있을때 사용
                 * @return null
                 */
                self.init = function(_x, _y, _w, _h, _data, _yAxis, _prev_data){
                    yAxisMax = _yAxis[_yAxis.length - 1];
                    yAxisMin = _yAxis[0];
                    yAxisGap = yAxisMax - yAxisMin;
                    GRAPH_TOP = _y;
                    GRAPH_LEFT = _x;
                    GRAPH_WIDTH = _w;
                    GRAPH_HEIGHT = _h;

                    thisSeriesStyles = $.extend(true, defaultStyles, _styles.series[_serieskey]);

                    _styles.series[_serieskey] = thisSeriesStyles;

                    elementGroups = [];
                    self.elementGroup = null;
                    self.elementNodes = [];

                    parse(_data, _yAxis, _prev_data);
                };


                /**
                 * 시리즈의 아이템별 위치, 크기 등을 구하는 함수
                 * @param  {Array} _data      차트데이터
                 * @param  {Array} _yAxis     Y축 값 데이터 배열
                 * @param  {Number} _prev_data base, before 폼계열에서 사용하는 값으로 전일비교금액이 있을때 사용
                 * @return null
                 */
                var parse = function(_data, _yAxis, _prev_data){

                    var optionsUseMultiYAxis = options.use.multiYAxis;

                    var stylesGraph = thisStyles.graph;

                    var ud_base = false;
                    if(series.form === 'updown_base'){
                        ud_base = true;
                    }
                    var ud_before = false;
                    if(series.form === 'updown_before'){
                        ud_before = true;
                    }

                    thisData = _data;
                    var data = thisData.data, count = data.length;

                    var BASE = 0;
                    if(ud_base || ud_before) {
                        BASE = thisData.prevcprice;
                    } else {
                        BASE = thisData.base;
                    }

                    var isNotMultiAndZero = optionsUseMultiYAxis == false && thisStyles.yAxis.baseAtZero;
                    var isUseMultiAndZero = optionsUseMultiYAxis && thisSeriesStyles.yAxis.baseAtZero;
                    var checkSeriesForm = /updown$|updown_stack|updown_bullet|updown_overlap/i.test(series.form);

                    if(isNotMultiAndZero || isUseMultiAndZero || checkSeriesForm){

                        BASE = 0;
                    }
                    // 그래프 영역의 높이에서 상하 패딩값 제외
                    var graphheight = GRAPH_HEIGHT - stylesGraph.paddingTop - stylesGraph.paddingBottom;
                    // 그래프 영역의 시작에서 상단 패딩값 포함한 시작 위치
                    var startY 		= GRAPH_TOP + stylesGraph.paddingTop;

                    var baseLine = 0;
                    if(checkSeriesForm === false) {

                        baseLine = GRAPH_HEIGHT + GRAPH_TOP;
                    } else {
                        baseLine = Math.round((graphheight) * (yAxisMax - BASE) / yAxisGap) + startY;
                    }
                    // 아이템이 그려질 공간 넓이
                    var xGap = (GRAPH_WIDTH - stylesGraph.paddingLeft - stylesGraph.paddingRight) / count;
                    // 아이템이 그려질 공간 넓이의 절반값
                    var xGapHalf = xGap / 2;
                    // 아이템의 공간 넓이에서 아이템의 넓이를 뺀값
                    var xPdn = (xGap - (xGap * (Number(thisSeriesStyles.itemWidth) / 100)));
                    // 아이템의 공간 넓이에서 아이템의 넓이를 뺀 절반값
                    var xPdnHalf = xPdn/2;
                    // 막대시리즈가 여러개일경우 실제 넓이(xGap - xPdn) 에서 여러개를 나눈 값
                    var w = Math.round((xGap - xPdn) / seriesColumnCount);

                    if(w < 1) w = 1;
                    // 그래프 영역의 넓이에서 좌측 패딩을 포함한 시작 위치
                    var startX = GRAPH_LEFT + stylesGraph.paddingLeft;


                    var indexWidth = startX + (w * (seriesColumnIndex - 1));

                    var rect = {}, close = 0, height = 0;

                    var value, valueYAxis;

                    var stopCount = (options.timeSlice.use && options.timeSlice.status == 'start') ? options.timeSlice.timePlayIndex + 1 : count;

                    var itemClosePosition = (graphheight - Math.round((graphheight) * (yAxisMax - yAxisMin * 2) / yAxisGap));

                    var isHasMinaxis = series.hasOwnProperty('minaxis');

                    var isFormStackAndPrevData = series.form === 'stack' && _prev_data !== undefined && String(_prev_data.yaxisid) == (series.yaxisid || 'undefined');

                    for(var i = 0; i < count; i++){

                        value = data[i];

                        valueYAxis = value.yaxis;

                        rect = {};

                        if($.trim(value.xaxis) == '') {

                            continue;
                        }

                        if(!isHasMinaxis){
                            // minaxis를 사용하지 않는 경우 : 일반적인 형태
                            if(ud_before){
                                if(i > 0) {
                                    BASE = data[i - 1].yaxis;
                                } else if(i == 0) {

                                    if(valueYAxis > BASE) {
                                        value.comp = 'up';
                                    } else if(valueYAxis < BASE) {
                                        value.comp = 'down';
                                    } else {
                                        value.comp = 'flat';
                                    }
                                }
                            }
                            if(!ud_before || ud_before && i > 0){
                                if(valueYAxis > BASE) {
                                    value.comp = 'up';
                                } else if(valueYAxis < BASE) {
                                    value.comp = 'down';
                                } else {
                                    value.comp = 'flat';
                                }
                            }
                        } else {
                            // minaxis를 사용하는 경우
                            if(valueYAxis > value.minaxis) {
                                value.comp = 'up';
                            } else if(valueYAxis < value.minaxis) {
                                value.comp = 'down';
                            } else {
                                value.comp = 'flat';
                            }
                        }

                        rect.x 		= ((xGap * i) + xPdnHalf)  + indexWidth;

                        rect.width 	= w;
                        // 증권차트에서 마우스 이벤트 Info 용
                        rect.mx 	= rect.x - xPdnHalf;
                        rect.mw 	= xGap;

                        close 		= Math.round((graphheight) * (yAxisMax - valueYAxis) / yAxisGap) + startY;
                        height 		= (graphheight) - (close) + startY;

                        if(isFormStackAndPrevData){

                            close  = _prev_data.data[i].shape.y - height - itemClosePosition;
                            height = _prev_data.data[i].shape.y - close;
                        }

                        if(checkSeriesForm === false) {

                            rect.y = close;

                            if(!isHasMinaxis){

                                rect.height = height;
                            } else {

                                var min = Math.round((graphheight) * (yAxisMax - value.minaxis) / yAxisGap) + GRAPH_TOP + 1;

                                if(value.comp === 'down'){

                                    rect.y = min;
                                    rect.height	= Math.abs(min - close);
                                } else {
                                    if(TYPE === 'VML') {
                                        rect.y -= 1;
                                    }
                                    rect.height	= Math.abs(min - close);
                                }
                            }
                        } else {

                            if(value.comp === 'up'){
                                rect.y 		= close ;
                                rect.height = baseLine - close;
                            } else {
                                rect.y 		= baseLine;
                                rect.height = close - baseLine;
                            }
                            rect.baseline = baseLine;
                            if(TYPE === 'VML'){
                                rect.y -= 1;
                            }
                        }

                        value['shape'] = rect;
                    }
                    draw(startY, baseLine, stopCount);
                };
                /**
                 * 시리즈 스타일 가져오기
                 * @param  {Number} width 아이템 하나의 넓이
                 * @return {Object}       스타일
                 */
                self.getStyles = function(width){

                    return getStyles('column', thisSeriesStyles, width);
                };

                /**
                 * 시리즈 그리기
                 * @param  {Number} _startY    시리즈가 그려질 시작(Y) 위치
                 * @param  {Number} _baseLine  아이템의 시작 위치 혹은 시리즈의 중간 위치 값
                 * @param  {Number} _stopCount 그려지는 아이템의 개수
                 *                             시계열에서 조정에 따라 개수가 달라질수 있음.
                 * @return null
                 */
                var draw = function(_startY, _baseLine, _stopCount){
                    if(self.overItem != null) {
                        self.overItem.remove();
                    }
                    var data = thisData.data, count = data.length;

                    var itemWidth = data[0].shape.width;
                    var fsStyles = getStyles('column', thisSeriesStyles, itemWidth, count);

                    var item, textGroup = [];

                    var textStyles 			= thisSeriesStyles.text,
                        textStylesUse 		= textStyles.use,
                        textStylesFunc 		= textStyles.func,
                        textStylesFormat 	= textStyles.format,
                        textStylesValign 	= textStyles.valign,
                        textStylesSize 		= parseInt(textStyles.size);

                    var overData = null;
                    var seriesComp = '';

                    if(series.form && series.form.indexOf('updown') > -1) {
                        seriesComp = 'updown';
                    }

                    var value = null, comp = '';
                    var valueYAxis = '';
                    var shape = null;
                    for(var i = 0; i < count; i ++){
                        if(_stopCount <= i) {
                            break;
                        }

                        value = data[i], comp = value.comp;

                        valueYAxis = value.yaxis;

                        if($.trim(value.xaxis) == '' || isNaN(valueYAxis)) {
                            continue;
                        }

                        shape = value.shape;
                        // elementGroup의 갯수를 맞추기 위해 0인 경우에도 draw 시킴(ver20151223 평다진)
                        if(thisSeriesStyles.area.items != null){

                            fsStyles = getStyles('column', thisSeriesStyles, itemWidth, count, i);
                        }
                        // FILL
                        item = createItem(seriesComp, i, shape, value.comp, _baseLine, fsStyles);
                        elementGroup.unshift(item);
                        elementGroups.unshift(item);

                        if(textStylesUse && value.xaxis != ''){

                            if(textStylesFunc == null){

                                var yValue = valueYAxis;
                                if(textStylesFormat != null) {

                                    yValue = eval(textStylesFormat)(valueYAxis, value);
                                }

                                var yPos = shape.y - textStylesSize;

                                if(textStylesValign === 'middle') {

                                    yPos = Math.floor(shape.y + shape.height / 2);

                                } else if(textStylesValign === 'bottom') {

                                    yPos = Math.floor(shape.y + shape.height - textStylesSize);
                                }

                                var text = paper.text(shape.x + (shape.width / 2), yPos, yValue);
                            } else {

                                var value = eval(textStylesFunc)(value);

                                var text = paper.text(value.x, value.y, value.text);
                            }

                            textGroup.push(text);
                        }
                    }

                    if(thisSeriesStyles.accessibility.use){

                        fsStyles.accessibilitystyle = thisSeriesStyles.accessibility.style;
                        drawAccessibility('up', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT);
                        drawAccessibility('down', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT);
                        drawAccessibility('flat', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT);
                    }

                    /*
                     만들어진 컬럼 아이템들에 over, out, move, click 이벤트 바인딩
                     */
                    var groups = paper.set(elementGroups).unhover().hover(function(e){ // Tooltip

                        var thisDataIdx = this.data('idx');
                        overData = thisData.data[thisDataIdx];

                        var shape = overData.shape,
                            comp = seriesComp !== 'updown' ? '' : this.data('comp');

                        var stylesOverStrokeWidth = fsStyles['over' + comp + 'strokewidth'];

                        if(TYPE === 'VML'){
                            var rp = getRectangle(TYPE, shape.x, shape.y, shape.width, shape.height + stylesOverStrokeWidth, stylesOverStrokeWidth);
                        } else {
                            var rp = getRectangle(TYPE, shape.x, shape.y, shape.width, shape.height, stylesOverStrokeWidth);
                        }

                        mouseOverSeriesKey = _serieskey;

                        if(options.use.tip && e.isItemOver != false) {
                             showToolTip(options.func.tip, overData, shape.x + shape.width/2, shape.y, series);
                        }

                        if(options.use.selectItem){

                            if(thisSeriesStyles.area.items != null){

                                fsStyles = getStyles('column', thisSeriesStyles, itemWidth, count, thisDataIdx);
                            }

                            if(self.overItem != null) {

                                var overfsStyles = fsStyles;
                                if(thisSeriesStyles.area.items != null){

                                    overfsStyles = getStyles('column', thisSeriesStyles, itemWidth, count, self.overItem.data('idx'));
                                }
                                self.drawStyles(self.overItem, overfsStyles, self.overItem.data('data'), seriesComp, '');
                                self.overItem = null;
                            }
                            self.overItem = this;

                            self.overItem.data('data', overData);
                            if(e.isTrusted){
                                self.drawStyles(self.overItem, fsStyles, overData, seriesComp);
                            }

                        }
                    }, function(e){

                        if(options.use.selectItem && overData != null){

                            self.drawStyles(self.overItem, fsStyles, overData, seriesComp, '');
                        }
                    }).mousemove(function(_e){


                        if(overData == null) return;

                        var shape = overData.shape;

                        var itemY = shape.y;

                        if(/updown$|updown_bullet|updown_stack|updown_minaxis|updown_overlap/i.test(series.form) && overData.comp === 'down'){

                            itemY = itemY + shape.height;
                        }
                        var graphTop 		= styles.main.layout._graphtop;
                        var graphHeight 	= graphTop;
                        var lastSeriesKey 	= '';

                        for(var i in styles) {
                            lastSeriesKey = i;
                        }

                        for(i in styles) {

                            var tLayout = styles[i].layout;

                            if(i === lastSeriesKey) {
                                if(i === 'main') {

                                    graphHeight = graphHeight + tLayout._graphheightpx;
                                } else {

                                    graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                }
                                break;
                            }
                        }
                        var rect = getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1);
                        var xy = {
                            x: Math.round(shape.x + shape.width/2) - 1,
                            y: Math.round(itemY) - 2
                        };
                        moveCrossLine(rect, getMousePosition(_e), vCross, hCross, xy, options.use.magnet);

                    }).click(function(_e) {

                        if(overData == null) {

                            overData = thisData.data[this.data('idx')];
                        }
                        if(options.func.itemClick != null) {
                            eval(options.func.itemClick(overData));
                        }
                    });

                    // if(TOUCHDEVICE) {
                    //     groups.unmouseup().mouseup(function(e) {
                    //
                    //         var thisDataIdx = this.data('idx');
                    //
                    //         overData = thisData.data[thisDataIdx];
                    //
                    //         var shape = overData.shape,
                    //             comp = seriesComp !== 'updown' ? '' : this.data('comp');
                    //
                    //         var stylesOverStrokeWidth = fsStyles['over' + comp + 'strokewidth'];
                    //
                    //         var rp = null;
                    //         if(TYPE === 'VML'){
                    //             rp = getRectangle(TYPE, shape.x, shape.y, shape.width, shape.height + stylesOverStrokeWidth, stylesOverStrokeWidth);
                    //         } else {
                    //             rp = getRectangle(TYPE, shape.x, shape.y, shape.width, shape.height, stylesOverStrokeWidth);
                    //         }
                    //         mouseOverSeriesKey = _serieskey;
                    //         if(options.use.tip && e.isItemOver != false) {
                    //
                    //             showToolTip(options.func.tip, overData, shape.x + shape.width/2, shape.y, series);
                    //         }
                    //         if(options.use.selectItem){
                    //
                    //             if(thisSeriesStyles.area.items != null){
                    //
                    //                 fsStyles = getStyles('column', thisSeriesStyles, itemWidth, count, thisDataIdx);
                    //             }
                    //
                    //             if(self.overItem != null) {
                    //                 var overfsStyles = fsStyles;
                    //                 if(thisSeriesStyles.area.items != null){
                    //                     overfsStyles = getStyles('column', thisSeriesStyles, itemWidth, count, self.overItem.data('idx'));
                    //                 }
                    //                 self.drawStyles(self.overItem, overfsStyles, self.overItem.data('data'), seriesComp, '');
                    //                 self.overItem = null;
                    //             }
                    //             self.overItem = this;
                    //             self.overItem.data('data', overData);
                    //             self.drawStyles(self.overItem, fsStyles, overData, seriesComp);
                    //
                    //         }
                    //
                    //         if(overData == null) {
                    //             return;
                    //         }
                    //
                    //         var itemY = shape.y;
                    //
                    //         if(/updown$|updown_bullet|updown_stack|updown_minaxis|updown_overlap/i.test(series.form) && overData.comp === 'down') {
                    //
                    //             itemY = itemY + shape.height;
                    //         }
                    //         var graphTop 		= styles.main.layout._graphtop;
                    //         var graphHeight 	= graphTop;
                    //         var lastSeriesKey 	= '';
                    //         for(var i in styles) {
                    //             lastSeriesKey = i;
                    //         }
                    //         for(i in styles) {
                    //             var tLayout = styles[i].layout;
                    //
                    //             if(i === lastSeriesKey) {
                    //                 if(i === 'main') {
                    //                     graphHeight = graphHeight + tLayout._graphheightpx;
                    //                 } else {
                    //
                    //                     graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                    //                 }
                    //             }
                    //         }
                    //
                    //         var rect = getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1);
                    //         var xy = {
                    //             x: Math.round(shape.x + shape.width/2) - 1,
                    //             y: Math.round(itemY) - 2
                    //         };
                    //         moveCrossLine(rect, getMousePosition(e), vCross, hCross, xy, options.use.magnet);
                    //     });
                    // }

                    if(textGroup.length > 0){ // useitemvalue : true
                        var group = paper.set(textGroup).attr({
                            'fill': 		textStyles.color,
                            'font-size': 	textStylesSize+'px',
                            'font-family': 	textStyles.family,
                            'font': 		textStylesSize+" '" + textStyles.family + "'",
                            'text-anchor': 	textStyles.align
                        });
                        var paths = group.items, prevTextWidth = 80, thisTextWidth = prevTextWidth;
                        for(var i = 1, len = paths.length; i < len; i ++){

                            prevTextWidth = paths[i - 1].getBBox().width <= 1 	? prevTextWidth : paths[i - 1].getBBox().width;
                            thisTextWidth = paths[i].getBBox().width <= 1 		? thisTextWidth : paths[i].getBBox().width;

                            var prevPath = $.extend({}, paths[i-1].attrs), prevPathWidth = prevTextWidth/2;
                            var thisPath = $.extend({}, paths[i].attrs),   thisPathWidth = thisTextWidth/2;

                            var prevRect = {lt: {x: prevPath.x - prevPathWidth, y: prevPath.y }, 					rt: {x: prevPath.x + prevPathWidth, y: prevPath.y },
                                lb: {x: prevPath.x - prevPathWidth, y: prevPath.y + textStylesSize }, 	rb: {x: prevPath.x + prevPathWidth, y: prevPath.y + textStylesSize }};
                            var thisRect = {lt: {x: thisPath.x - thisPathWidth, y: thisPath.y }, 					rt: {x: thisPath.x + thisPathWidth, y: thisPath.y },
                                lb: {x: thisPath.x - thisPathWidth, y: thisPath.y + textStylesSize }, 	rb: {x: thisPath.x + thisPathWidth, y: thisPath.y + textStylesSize }};

                            if((prevRect.rt.y <= thisRect.lt.y && prevRect.rb.y >= thisRect.lt.y) || (prevRect.rt.y <= thisRect.lb.y && prevRect.rb.y >= thisRect.lb.y)){
                                if(prevRect.rt.x < thisRect.lt.x){

                                } else {
                                    paths[i].attr({y: prevPath.y - textStylesSize});
                                }
                            }
                        }
                        elementGroup.unshift(group);
                    }

                    if(/updown$|updown_bullet|updown_stack|updown_overlap/i.test(series.form) && thisSeriesStyles.line.base.width > 0){

                        var thisSeriesStylesLineBase = thisSeriesStyles.line.base;

                        var line = getLine(TYPE, GRAPH_LEFT, _baseLine, GRAPH_WIDTH + GRAPH_LEFT, _baseLine);

                        var y1 = line.y1, y2 = line.y2;

                        if(TYPE === 'SVG') {
                            y1 = y1 + 1, y2 = y2 + 1;
                        }
                        var item = paper.path("M"+line.x1 + ',' + (y1) + ',' + line.x2 + ',' + (y2)).attr({
                            'stroke': 			thisSeriesStylesLineBase.color,
                            'stroke-width': 	thisSeriesStylesLineBase.width,
                            'stroke-opacity': 	thisSeriesStylesLineBase.opacity
                        });
                        elementGroup.unshift(item);
                    }
                    self.elementGroup = elementGroups;
                    self.elementNodes = elementGroups;
                };
                /**
                 * 마우스 오버,아웃시 활성화된 아이템에 색상 입히기
                 * @param  {Node}  item       SVG Node
                 * @param  {Object}  fsStyles   스타일
                 * @param  {Object}  overData   활성화된 아이템의 데이터
                 * @param  {String}  seriesComp 아이템의 현황 up, down, normal
                 * @param  {Boolean} isOver     활성화된 상태인지 아닌지
                 * @return {Node}             스타일이 변경된 아이템
                 */
                self.drawStyles = function(item, fsStyles, overData, seriesComp, isOver){

                    if(overData == null) return;

                    var shape = overData.shape;

                    var comp = '';
                    if(seriesComp != '') {
                        comp = overData.comp;
                    }

                    if(isOver != undefined && isOver === ''){

                    } else {
                        comp = 'over' + comp;
                    }
                    item.attr({
                        'fill' 			: fsStyles[comp + 'fillcolor'],
                        'stroke' 		: fsStyles[comp + 'strokecolor'],
                        'stroke-width'	: fsStyles[comp + 'strokewidth'],
                        'stroke-opacity': fsStyles[comp + 'strokealpha']
                    });
                    if(fsStyles[comp + 'fillcolor'].indexOf('url') <= -1){

                        item.attr({
                            'fill-opacity'	: fsStyles[comp + 'fillalpha']
                        });
                    }

                    return item;
                };
                /**
                 * 시리즈 그리기 : 시계열 사용시
                 * @param  {Number} _index    시리즈가 그려질 시작(Y) 위치
                 * @param  {Number} _stopIndex 그려지는 아이템의 개수
                 *                             시계열에서 조정에 따라 개수가 달라질수 있음.
                 * @return null
                 */
                self.drawTimeSlice = function(_index, _stopIndex){
                    if(_index == 0) {
                        elementGroups = [];
                    }
                    var data = thisData.data, count = data.length;

                    var optionsUseMultiYAxis = options.use.multiYAxis;

                    var stylesGraph = thisStyles.graph;

                    var ud_base = false;
                    if(series.hasOwnProperty('form') && series.form === 'updown_base'){
                        ud_base = true;
                    }
                    var ud_before = false;
                    if(series.hasOwnProperty('form') && series.form === 'updown_before'){
                        ud_before = true;
                    }

                    var BASE = 0;
                    if(ud_base || ud_before) {
                        BASE = thisData.prevcprice;
                    } else {
                        BASE = thisData.base;
                    }


                    var isNotMultiAndZero = optionsUseMultiYAxis == false && thisStyles.yAxis.baseAtZero;
                    var isUseMultiAndZero = optionsUseMultiYAxis && thisSeriesStyles.yAxis.baseAtZero;

                    var checkSeriesForm = /updown$|updown_stack|updown_bullet|updown_overlap/i.test(series.form);

                    if(isNotMultiAndZero || isUseMultiAndZero || checkSeriesForm){

                        BASE = 0;
                    }

                    var graphheight = GRAPH_HEIGHT - stylesGraph.paddingTop - stylesGraph.paddingBottom;

                    var startY = GRAPH_TOP + stylesGraph.paddingTop;

                    var baseLine = 0;
                    if(checkSeriesForm === false) {
                        baseLine = GRAPH_HEIGHT + GRAPH_TOP;
                    } else {
                        baseLine = Math.round((graphheight) * (yAxisMax - BASE) / yAxisGap) + startY;
                    }

                    var itemWidth = data[_index].shape.width;
                    var fsStyles = getStyles('column', thisSeriesStyles, itemWidth, count);

                    var textStyles 			= thisSeriesStyles.text;
                    var textStylesUse 		= textStyles.use;
                    var textStylesFunc 		= textStyles.func;
                    var textStylesFormat 	= textStyles.format;
                    var textStylesValign 	= textStyles.valign;
                    var textStylesSize 		= parseInt(textStyles.size);

                    var item, textGroup = [];

                    var seriesComp = '';

                    if(series.form && series.form.indexOf('updown') > -1) {
                        seriesComp = 'updown';
                    }

                    for(var i = _index; i < _stopIndex; i ++){
                        var value = data[i], comp = value.comp;

                        var valueYAxis = value.yaxis;

                        if($.trim(value.xaxis) == '' || isNaN(valueYAxis)) {
                            continue;
                        }

                        var shape = value.shape;

                        if(thisSeriesStyles.area.items != null){
                            fsStyles = getStyles('column', thisSeriesStyles, itemWidth, count, i);
                        }
                        // FILL
                        item = createItem(seriesComp, i, shape, value.comp, baseLine, fsStyles);

                        elementGroup.unshift(item);
                        elementGroups.unshift(item);

                        if(textStylesUse && value.xaxis != ''){
                            if(textStylesFunc == null){

                                var yValue = valueYAxis;
                                if(textStylesFormat != null) {

                                    yValue = eval(textStylesFormat)(valueYAxis, value);
                                }

                                var yPos = shape.y - textStylesSize;

                                if(textStylesValign === 'middle') {

                                    yPos = Math.floor(shape.y + shape.height / 2);

                                } else if(textStylesValign === 'bottom') {

                                    yPos = Math.floor(shape.y + shape.height - textStylesSize);
                                }

                                var text = paper.text(shape.x + (shape.width / 2), yPos, yValue);
                            } else {
                                var value = eval(textStylesFunc)(value);

                                var text = paper.text(value.x, value.y, value.text);
                            }
                            textGroup.push(text);
                        }
                    }
                    if(thisSeriesStyles.accessibility.use){
                        fsStyles.accessibilitystyle = thisSeriesStyles.accessibility.style;
                        drawAccessibility('up', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT, _index, _stopIndex);
                        drawAccessibility('down', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT, _index, _stopIndex);
                        drawAccessibility('flat', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT, _index, _stopIndex);
                    }

                    var overData = null;

                    var groups = paper.set(elementGroups).unhover().hover(function(e){ // Tooltip

                        var thisDataIdx = this.data('idx');

                        overData = thisData.data[thisDataIdx];

                        var shape = overData.shape,
                            comp = seriesComp !== 'updown' ? '' : this.data('comp');

                        var stylesOverStrokeWidth = fsStyles['over' + comp + 'strokewidth'];

                        if(TYPE === 'VML'){
                            var rp = getRectangle(TYPE, shape.x, shape.y, shape.width, shape.height + stylesOverStrokeWidth, stylesOverStrokeWidth);
                        } else {
                            var rp = getRectangle(TYPE, shape.x, shape.y, shape.width, shape.height, stylesOverStrokeWidth);
                        }
                        mouseOverSeriesKey = _serieskey;

                        if(options.use.tip && e.isItemOver != false) {

                            showToolTip(options.func.tip, overData, shape.x + shape.width/2, shape.y, series);
                        }
                        if(options.use.selectItem){

                            if(thisSeriesStyles.area.items != null){

                                fsStyles = getStyles('column', thisSeriesStyles, itemWidth, count, thisDataIdx);
                            }

                            if(self.overItem != null) {

                                var overfsStyles = fsStyles;

                                if(thisSeriesStyles.area.items != null){

                                    overfsStyles = getStyles('column', thisSeriesStyles, itemWidth, count, self.overItem.data('idx'));
                                }

                                self.drawStyles(self.overItem, overfsStyles, self.overItem.data('data'), seriesComp, '');
                                self.overItem = null;
                            }
                            self.overItem = this;
                            self.overItem.data('data', overData);

                            self.drawStyles(self.overItem, fsStyles, overData, seriesComp);
                        }
                    }, function(){
                        if(options.use.selectItem && overData != null){
                            self.drawStyles(self.overItem, fsStyles, overData, seriesComp, '');
                        }
                    }).unmousemove().mousemove(function(_e){

                        if(overData == null) return;

                        var shape = overData.shape;

                        var itemY = shape.y;

                        if(/updown$|updown_bullet|updown_stack|updown_minaxis|updown_overlap/i.test(series.form) && overData.comp === 'down') {

                            itemY = itemY + shape.height;
                        }

                        var graphTop = styles.main.layout._graphtop;
                        var graphHeight = graphTop;
                        var lastSeriesKey = '';

                        for(var i in styles) {
                            lastSeriesKey = i;
                        }

                        for(i in styles) {
                            var tLayout = styles[i].layout;

                            if(i === lastSeriesKey) {
                                if(i === 'main') {
                                    graphHeight = graphHeight + tLayout._graphheightpx;
                                } else {

                                    graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                }

                                break;
                            }
                        }

                        var rect = getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1);
                        var xy = {
                            x: Math.round(shape.x + shape.width/2) - 1,
                            y: Math.round(itemY) - 2
                        };
                        moveCrossLine(rect, getMousePosition(_e), vCross, hCross, xy, options.use.magnet);

                    }).unclick().click(function(_e) {
                        if(overData == null) {
                            overData = thisData.data[this.data('idx')];
                        }
                        if(options.func.itemClick != null) {
                            eval(options.func.itemClick(overData));
                        }
                    });
                    if(textGroup.length > 0){ // useitemvalue : true
                        var group = paper.set(textGroup).attr({
                            'fill': 		textStyles.color,
                            'font-size': 	textStylesSize+'px',
                            'font-family': 	textStyles.family,
                            'font': 		textStylesSize+" '" + textStyles.family + "'",
                            'text-anchor': 	textStyles.align
                        });
                        var paths = group.items, prevTextWidth = 80, thisTextWidth = prevTextWidth;
                        for(var i = 1, len = paths.length; i < len; i ++){
                            prevTextWidth = paths[i - 1].getBBox().width <= 1 	? prevTextWidth : paths[i - 1].getBBox().width;
                            thisTextWidth = paths[i].getBBox().width <= 1 		? thisTextWidth : paths[i].getBBox().width;

                            var prevPath = $.extend({}, paths[i-1].attrs), prevPathWidth = prevTextWidth/2;//, 		prevPathHeight = textStylesSize;//paths[i-1][0].offsetHeight;
                            var thisPath = $.extend({}, paths[i].attrs),   thisPathWidth = thisTextWidth/2;//,   	thisPathHeight = textStylesSize;//paths[i][0].offsetHeight;

                            var prevRect = {lt: {x: prevPath.x - prevPathWidth, y: prevPath.y },			 		rt: {x: prevPath.x + prevPathWidth, y: prevPath.y },
                                lb: {x: prevPath.x - prevPathWidth, y: prevPath.y + textStylesSize}, 	rb: {x: prevPath.x + prevPathWidth, y: prevPath.y + textStylesSize }};
                            var thisRect = {lt: {x: thisPath.x - thisPathWidth, y: thisPath.y }, 					rt: {x: thisPath.x + thisPathWidth, y: thisPath.y },
                                lb: {x: thisPath.x - thisPathWidth, y: thisPath.y + textStylesSize}, 	rb: {x: thisPath.x + thisPathWidth, y: thisPath.y + textStylesSize }};

                            if((prevRect.rt.y <= thisRect.lt.y && prevRect.rb.y >= thisRect.lt.y) || (prevRect.rt.y <= thisRect.lb.y && prevRect.rb.y >= thisRect.lb.y)){
                                if(prevRect.rt.x < thisRect.lt.x){

                                } else {
                                    paths[i].attr({y: prevPath.y - textStylesSize});
                                }
                            }
                        }
                        elementGroup.unshift(group);
                    }

                    self.elementGroup = elementGroups;
                    self.elementNodes = elementGroups;
                };
                /**
                 * 아이템을 생성하고 스타일 입히기 전 초기화
                 * 컬럼시리즈는 아이템 렌더러라는 중간 개념이 있는데 이는 사용자가 직접 컬럼 모양을 변경하고 싶을때 사용한다.
                 * @param  {String} _seriesComp updown 스타일을 입혀야 하는지 체크
                 * @param  {Number} _idx        _idx번째 아이템(index)
                 * @param  {Object} _shape      _idx번째 아이템의 위치값
                 * @param  {String} _comp       _idx번째 아이템의 상승/하락 구분
                 * @param  {Number} _base       최저값의 위치
                 * @param  {Object} _styles     시리즈 스타일
                 * @return {Node}             생성된 SVG 노드
                 */
                var createItem = function(_seriesComp, _idx, _shape, _comp, _base, _styles){

                    var _fc, _fa, _sw, _sc, _sa;
                    if(_seriesComp !== 'updown') {
                        _fc = _styles.fillcolor;
                        _fa = _styles.fillalpha;
                        _sw = _styles.strokewidth;
                        _sc = _styles.strokecolor;
                        _sa = _styles.strokealpha;
                    } else {
                        _fc = _styles[_comp + 'fillcolor'];
                        _fa = _styles[_comp + 'fillalpha'];
                        _sw = _styles[_comp + 'strokewidth'];
                        _sc = _styles[_comp + 'strokecolor'];
                        _sa = _styles[_comp + 'strokealpha'];
                    }

                    var item = null;

                    if(thisSeriesStyles.itemRenderer.setRenderer == null){
                        item = drawFillRectangle(_shape, _comp, _base, _fc, _fa, _sw, _sc, _sa);
                    } else {
                        item = thisSeriesStyles.itemRenderer.setRenderer(paper, {'left': _shape.x, 'top': _shape.y, 'width': _shape.width, 'height': _shape.height}, thisData.data[_idx], thisSeriesStyles);
                    }
                    item.data({
                        'idx': _idx,
                        'comp': _comp
                    });
                    return item;
                };

                // Rectangle Fill
                /**
                 * 실제로 아이템을 만들고 색상을 입히는 함수
                 * @param  {Object} _shape 아이템의 위치값
                 * @param  {String} _comp  아이템의 상승/하락 구분
                 * @param  {Number} _base  최저값의 위치
                 * @param  {String} _fc    면 색상
                 * @param  {Number} _fa    면 투명도
                 * @param  {Number} _sw    선 두께
                 * @param  {String} _sc    선 색상
                 * @param  {Number} _sa    선 투명도
                 * @return {Node}        생성된 SVG 노드
                 */
                var drawFillRectangle = function(_shape, _comp, _base, _fc, _fa, _sw, _sc, _sa){

                    var _x = _shape.x,
                        _y = _shape.y,
                        _w = _shape.width,
                        _h = _shape.height;

                    var rp = getRectangle(TYPE, _x, _y, _w, _h, _sw);

                    var rect = null;
                    if(options.use.animate && TYPE !== "VML"){
                        var y = rp.y + rp.height;

                        if((series.form && series.form.indexOf('updown') > -1) && _comp === 'down' && series.form !== 'updown_minaxis') {
                            y = getRectangle(TYPE, _x, _base, _w, _h, _sw).y + 1;
                        }

                        rect = paper.rect(rp.x, _base, rp.width, 0);
                        rect.attr({
                            'fill': _fc,
                            'fill-opacity': _fa,
                            'stroke-width': (_fc.indexOf('.') > -1) ? 0:_sw,
                            'stroke': _sc,
                            'stroke-opacity': _sa
                        });

                        rect.stop().animate({
                            'x': rp.x,
                            'y': rp.y,
                            'width': rp.width,
                            'height': rp.height
                        }, options.animate.speed, options.animate.type, function(){
                            if(_fc.indexOf('.') > -1) {
                                this.animate({'stroke-width': _sw}, 100);
                            }
                        });
                    } else {
                        if(options.getResize && TYPE !== "VML"){
                            rect = paper.rect(rp.x, rp.y, rp.width, rp.height);
                            rect.attr({
                                'fill': _fc,
                                'fill-opacity': _fa,
                                'stroke-width': _sw,
                                'stroke': _sc,
                                'stroke-opacity': _sa
                            });
                        } else {
                            if(rp.height < 0) {
                                rp.height = 0;
                            }
                            rect = paper.rect(rp.x, rp.y, rp.width, rp.height);
                            rect.attr({
                                'fill': _fc,
                                'fill-opacity': _fa,
                                'stroke-width': _sw,
                                'stroke': _sc,
                                'stroke-opacity': _sa
                            });
                        }
                    }

                    return rect;
                };
                return self;
            };

            // Bar
            /**
             * 가로막대(Bar)시리즈 그리기
             * @param  {String} _serieskey 메인, 서브 등 영역 Key Name
             * @param  {Object} _options   옵션
             * @param  {Object} _styles    스타일
             * @param  {Object} _series    시리즈
             * @return {Function}            그려진 시리즈 객체
             */
            DRAWSERIES.drawbar = function(_serieskey, _options, _styles, _series){
                // 기본 스타일 정의
                var defaultStyles = {
                    itemWidth: 60,
                    area: {
                        normal: { color: [ [0, '#2bcdba'], [100, '#6bdccf'] ], opacity: 1, over: {color: [ [0, '#2bcdba'], [100, '#6bdccf'] ], opacity: 1}},
                        up: 	{ color: [ [0, '#fe5855'], [100, '#fe8a88'] ], opacity: 1, over: {color: [ [0, '#ca2c29'], [100, '#d55552'] ], opacity: 1}},
                        down: 	{ color: [ [0, '#4db4e4'], [100, '#0093d8'] ], opacity: 1, over: {color: [ [0, '#0260a9'], [100, '#337fb9'] ], opacity: 1}},
                        flat: 	{ color: [ [0, '#6a8091'], [100, '#8899a7'] ], opacity: 1, over: {color: [ [0, '#4f677a'], [100, '#718594'] ], opacity: 1}},
                        items: null
                    },
                    line: {
                        normal: { color: '#2bcdba', width: 0, opacity: 1, over: { color: '#2bcdba', width: 0, opacity: 1 } },
                        up:     { color: '#fe5855', width: 0, opacity: 1, over: { color: '#fe5855', width: 0, opacity: 1 } },
                        down:   { color: '#4db4e4', width: 0, opacity: 1, over: { color: '#4db4e4', width: 0, opacity: 1 } },
                        flat:   { color: '#6a8091', width: 0, opacity: 1, over: { color: '#6a8091', width: 0, opacity: 1 } },
                        base:   { color: '#465866', width: 2, opacity: 1, over: { color: '#465866', width: 2, opacity: 1 } },
                        items: null
                    },
                    gradient: {
                        direction: 'vertical'
                    },
                    text: {
                        use: false,
                        family: 'Noto Sans KR', size: 12, color: '#666666', align: 'center',
                        style: 'normal', opacity: 1, format: null, func: null
                    },
                    accessibility: {
                        use: false, style: 'normal'
                    },
                    itemRenderer: {
                        style: 'normal', // normal, ox
                        setRenderer: null
                    }
                };

                var self = {};

                var options = _options, series = _series;
                // 해당 시리즈 스타일만
                var thisSeriesStyles = $.extend(true, {}, defaultStyles, _styles.series[_serieskey]);

                if(TYPE == 'VML') {
                    // 글꼴 흐림현상으로 VML은 Dotum으로 Fix
                    thisSeriesStyles.text.family = ie8Font;
                }

                _styles.series[_serieskey] = thisSeriesStyles;

                var thisStyles = self.styles = _styles;

                var GRAPH_TOP = 0, GRAPH_LEFT = 0, GRAPH_WIDTH = 0, GRAPH_HEIGHT = 0;
                var yAxisMax = 0, yAxisMin = 0, yAxisGap = 0;

                var seriesColumnCount = (_styles.seriesBCCount > 0) ? _styles.seriesBCCount : 1;
                var seriesColumnIndex = (thisSeriesStyles.seriesBCIndex > 0) ? thisSeriesStyles.seriesBCIndex: 1; // stack, double

                var thisData = null;
                // 활성화된 아이템 저장
                self.overItem = null;

                self.elementGroup = null;
                self.elementNodes = [];
                /**
                 * 시리즈 실행
                 * @param  {Number} _x        		시리즈가 그려질 X위치
                 * @param  {Number} _y         		시리즈가 그려질 Y위치
                 * @param  {Number} _w         		시리즈가 그려질 넓이
                 * @param  {Number} _h        		시리즈가 그려질 높이
                 * @param  {Array} _data      		차트데이터
                 * @param  {Array} _yAxis     		Y축 값 데이터 배열
                 * @param  {Number} _prev_data 		base, before 폼계열에서 사용하는 값으로 전일비교금액이 있을때 사용
                 * @return null
                 */
                self.init = function(_x, _y, _w, _h, _data, _yAxis, _prev_data){
                    yAxisMax = _yAxis[_yAxis.length - 1];
                    yAxisMin = _yAxis[0];
                    yAxisGap = yAxisMax - yAxisMin;
                    GRAPH_TOP = _y;
                    GRAPH_LEFT = _x;
                    GRAPH_WIDTH = _w;
                    GRAPH_HEIGHT = _h;

                    thisSeriesStyles = $.extend(true, {}, defaultStyles, _styles.series[_serieskey]);

                    _styles.series[_serieskey] = thisSeriesStyles;

                    self.elementGroup = null;
                    self.elementNodes = [];

                    parse(_data, _yAxis, _prev_data);
                };


                /**
                 * 시리즈의 아이템별 위치, 크기 등을 구하는 함수
                 * @param  {Array} _data      차트데이터
                 * @param  {Array} _yAxis     Y축 값 데이터 배열
                 * @param  {Number} _prev_data base, before 폼계열에서 사용하는 값으로 전일비교금액이 있을때 사용
                 * @return null
                 */
                var parse = function(_data, _yAxis, _prev_data){

                    var stylesGraph = thisStyles.graph;

                    var ud_base = false;
                    if(series.form === 'updown_base'){
                        ud_base = true;
                    }
                    var ud_before = false;
                    if(series.form === 'updown_before'){
                        ud_before = true;
                    }

                    thisData = _data;
                    var data = thisData.data, count = data.length;

                    var BASE = 0;
                    if(ud_base || ud_before) {
                        BASE = thisData.prevcprice;
                    } else {
                        BASE = thisData.base;
                    }

                    // 컬럼시리즈와 다르게 바시리즈는 멀티축 적용이 안된다.
                    var isBaseZero = thisStyles.yAxis.baseAtZero;
                    var checkSeriesForm = /updown$|updown_stack|updown_bullet|updown_overlap/i.test(series.form);

                    if(isBaseZero || checkSeriesForm){

                        BASE = 0;
                    }

                    var startY 		= GRAPH_TOP + stylesGraph.paddingTop;
                    var graphleft 	= GRAPH_LEFT + stylesGraph.paddingLeft;
                    var graphwidth 	= GRAPH_WIDTH - stylesGraph.paddingLeft - stylesGraph.paddingRight;

                    var baseLine = 0;

                    if(checkSeriesForm === false) {
                        baseLine = graphleft;
                    } else {
                        baseLine = (graphwidth - (graphwidth) * (yAxisMax - BASE) / yAxisGap) + graphleft;
                    }

                    var xGap = (GRAPH_HEIGHT - stylesGraph.paddingTop - stylesGraph.paddingBottom) / count;
                    var xGapHalf = xGap / 2;
                    var xPdn = (xGap - (xGap * (Number(thisSeriesStyles.itemWidth) / 100)));
                    var xPdnHalf = xPdn/2;
                    var h = Math.round((xGap - xPdn) / seriesColumnCount);

                    var rect = {}, close = 0, height = 0;

                    var value, valueYAxis;

                    var isHasMinaxis = series.hasOwnProperty('minaxis');

                    for(var i = 0; i < count; i++){
                        value = data[i];

                        valueYAxis = value.yaxis;

                        rect = {};

                        if($.trim(value.xaxis) == '') continue;

                        if(!isHasMinaxis){
                            // minaxis를 사용하지 않는 경우 : 일반적인 형태
                            if(ud_before){
                                if(i > 0) {
                                    BASE = data[i - 1].yaxis;
                                } else if(i == 0) {
                                    if(valueYAxis > BASE) {
                                        value.comp = 'up';
                                    } else if(valueYAxis < BASE) {
                                        value.comp = 'down';
                                    } else {
                                        value.comp = 'flat';
                                    }
                                }
                            }
                            if(!ud_before || ud_before && i > 0){
                                if(valueYAxis > BASE) {
                                    value.comp = 'up';
                                } else if(valueYAxis < BASE) {
                                    value.comp = 'down';
                                } else {
                                    value.comp = 'flat';
                                }

                            }
                        } else {
                            // minaxis를 사용하는 경우
                            if(valueYAxis > value.minaxis) {
                                value.comp = 'up';
                            } else if(valueYAxis < value.minaxis) {
                                value.comp = 'down';
                            } else {
                                value.comp = 'flat';
                            }
                        }

                        rect.x 		= baseLine;
                        close 		= (graphwidth - (graphwidth * ((yAxisMax - valueYAxis) / yAxisGap)));
                        rect.y 		= Math.round((xGap * i) + xPdnHalf)  + startY + (h * (seriesColumnIndex - 1));
                        rect.height = h;
                        if(series.form === 'stack' && _prev_data !== undefined && _prev_data.yaxisid == (series.yaxisid || 'undefined')){

                            rect.x 	= _prev_data.data[i].shape.x + _prev_data.data[i].shape.width;

                            close = (graphwidth - (graphwidth * ((yAxisMax - (valueYAxis + yAxisMin)) / yAxisGap)));
                        }

                        if(checkSeriesForm === false) {

                            rect.width = close;

                            if(!isHasMinaxis){

                            } else {
                                var min = Math.round(graphwidth - (graphwidth) * (yAxisMax - value.minaxis) / yAxisGap);

                                rect.x	= min + baseLine;
                                rect.width = close - min;
                                if(value.comp === 'down') {
                                    rect.width = Math.abs(rect.width);
                                    rect.x = rect.x - rect.width;
                                }
                            }
                        } else {
                            if(value.comp === 'up'){
                                rect.width = close - baseLine + graphleft;
                            } else {
                                rect.x = close + graphleft;
                                rect.width = baseLine - rect.x;
                                if(value.comp == 'flat' && rect.width < 0) {
                                    rect.width = 0;
                                }
                            }

                            rect.baseline = baseLine;
                        }

                        value['shape'] = rect;
                    }
                    draw(startY, baseLine);
                };
                /**
                 * 시리즈 그리기
                 * @param  {Number} _startY    시리즈가 그려질 시작(Y) 위치
                 * @param  {Number} _baseLine  아이템의 시작 위치 혹은 시리즈의 중간 위치 값
                 * @param  {Number} _stopCount 그려지는 아이템의 개수
                 *                             시계열에서 조정에 따라 개수가 달라질수 있음.
                 * @return null
                 */
                var draw = function(_startY, _baseLine, _stopCount){
                    if(self.overItem != null) {
                        self.overItem.remove();
                    }
                    var data = thisData.data, count = data.length;

                    var itemWidth = data[0].shape.width;
                    var fsStyles = getStyles('bar', thisSeriesStyles, itemWidth, count);

                    var item, textGroup = [];

                    var textStyles 			= thisSeriesStyles.text;
                    var textStylesUse 		= textStyles.use;
                    var textStylesFunc 		= textStyles.func;
                    var textStylesFormat 	= textStyles.format;
                    var textStylesAlign 	= textStyles.align;
                    var textStylesSize 		= parseInt(textStyles.size);

                    var elementGroups = [];
                    var overData = null;
                    var seriesComp = '';

                    if(series.form && series.form.indexOf('updown') > -1) {
                        seriesComp = 'updown';
                    }

                    for(var i = 0; i < count; i ++){
                        if(_stopCount <= i) {
                            break;
                        }

                        var value = data[i], comp = value.comp;

                        var valueYAxis = value.yaxis;

                        if($.trim(value.xaxis) == '' || isNaN(valueYAxis)) {
                            continue;
                        }

                        var shape = value.shape;
                        // elementGroup의 갯수를 맞추기 위해 0인 경우에도 draw 시킴(ver20151223 평다진)
                        if(thisSeriesStyles.area.items != null){

                            fsStyles = getStyles('bar', thisSeriesStyles, itemWidth, count, i);
                        }
                        // FILL
                        item = createItem(seriesComp, i, shape, value.comp, _baseLine, fsStyles);

                        elementGroup.unshift(item);
                        elementGroups.unshift(item);

                        if(textStylesUse && value.xaxis != ''){

                            var textX = shape.x + shape.width;// + 10;

                            if(textStylesFunc == null){
                                var yValue = (textStylesFormat != null) ? eval(textStylesFormat)(valueYAxis,value) : valueYAxis;

                                var text = paper.text(textX, shape.y + shape.height/2, yValue);
                                text.attr({
                                    'text-anchor': labelAlign(textStylesAlign)
                                });

                                if((GRAPH_WIDTH / 2) + GRAPH_LEFT < shape.x + shape.width){
                                    text.attr({ x: textX - (text.getBBox().width / 2 + 10) });
                                } else {
                                    text.attr({ x: textX + (text.getBBox().width / 2 + 10) });
                                }
                            } else {
                                var value = eval(textStylesFunc)(value);
                                var text = paper.text(value.x, value.y, value.text);
                                text.attr({
                                    'text-anchor': labelAlign(textStylesAlign)
                                });
                            }

                            textGroup.push(text);
                        }
                    }
                    if(thisSeriesStyles.accessibility.use){
                        fsStyles.accessibilitystyle = thisSeriesStyles.accessibility.style;
                        drawAccessibilityBar('up', data, fsStyles, GRAPH_LEFT);
                        drawAccessibilityBar('down', data, fsStyles, GRAPH_LEFT);
                        drawAccessibilityBar('flat', data, fsStyles, GRAPH_LEFT);
                    }

                    var groups = paper.set(elementGroups).unhover().hover(function(e){ // Tooltip

                        var thisDataIdx = this.data('idx');

                        overData = thisData.data[thisDataIdx];

                        var shape = overData.shape,
                            comp = seriesComp !== 'updown' ? '' : this.data('comp');

                        var stylesOverStrokeWidth = fsStyles['over' + comp + 'strokewidth'];

                        if(TYPE === 'VML'){
                            var rp = getRectangle(TYPE, shape.x, shape.y, shape.width, shape.height + stylesOverStrokeWidth, stylesOverStrokeWidth);
                        } else {
                            var rp = getRectangle(TYPE, shape.x, shape.y, shape.width, shape.height, stylesOverStrokeWidth);
                        }
                        mouseOverSeriesKey = _serieskey;

                        if(options.use.tip && e.isItemOver != false) {

                             showToolTip(options.func.tip, overData, shape.x + shape.width/2, shape.y, series);
                        }
                        if(options.use.selectItem){

                            if(thisSeriesStyles.area.items != null){
                                fsStyles = getStyles('bar', thisSeriesStyles, itemWidth, count, thisDataIdx);
                            }

                            if(self.overItem != null) {
                                var overfsStyles = fsStyles;
                                if(thisSeriesStyles.area.items != null){
                                    overfsStyles = getStyles('bar', thisSeriesStyles, itemWidth, count, self.overItem.data('idx'));
                                }

                                self.drawStyles(self.overItem, overfsStyles, self.overItem.data('data'), seriesComp, '');
                                self.overItem = null;
                            }
                            self.overItem = this;
                            self.overItem.data('data', overData);

                            if(e.isTrusted){
                                self.drawStyles(self.overItem, fsStyles, overData, seriesComp);
                            }
                        }
                    }, function(){
                        if(options.use.selectItem && overData != null){
                            self.drawStyles(self.overItem, fsStyles, overData, seriesComp, '');
                        }

                    }).mousemove(function(_e){

                        if(overData == null) return;

                        var shape = overData.shape;

                        var itemX = Math.round(shape.x + shape.width) - 1;

                        if(/updown$|updown_bullet|updown_stack|updown_minaxis|updown_overlap/i.test(series.form) && overData.comp === 'down'){

                            itemX = shape.x - 1;
                        }
                        var graphTop 		= styles.main.layout._graphtop;
                        var graphHeight 	= graphTop;
                        var lastSeriesKey 	= '';

                        for(var i in styles) {
                            lastSeriesKey = i;
                        }

                        for(i in styles) {
                            var tLayout = styles[i].layout;

                            if(i === lastSeriesKey) {
                                if(i === 'main') {
                                    graphHeight = graphHeight + tLayout._graphheightpx;
                                } else {

                                    graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                }
                                break;
                            }
                        }

                        var rect = getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1);
                        var xy = {
                            x: Math.round(itemX),
                            y: Math.round(shape.y + shape.height / 2) - 2
                        };

                        moveCrossLine(rect, getMousePosition(_e), vCross, hCross, xy, options.use.magnet);
                    }).click(function(_e) {

                        if(overData == null) {
                            overData = thisData.data[this.data('idx')];
                        }
                        if(options.func.itemClick != null) {
                            eval(options.func.itemClick(overData));
                        }
                    });

                    if(TOUCHDEVICE) {
                        groups.unmouseup().mouseup(function(e) {

                            var thisDataIdx = this.data('idx');

                            overData = thisData.data[thisDataIdx];

                            var shape = overData.shape,
                                comp = seriesComp !== 'updown' ? '' : this.data('comp');

                            var stylesOverStrokeWidth = fsStyles['over' + comp + 'strokewidth'];

                            if(TYPE === 'VML'){
                                var rp = getRectangle(TYPE, shape.x, shape.y, shape.width, shape.height + stylesOverStrokeWidth, stylesOverStrokeWidth);
                            } else {
                                var rp = getRectangle(TYPE, shape.x, shape.y, shape.width, shape.height, stylesOverStrokeWidth);
                            }
                            mouseOverSeriesKey = _serieskey;
                            if(options.use.tip && e.isItemOver != false) {

                                showToolTip(options.func.tip, overData, overData.shape.x + overData.shape.width/2, overData.shape.y, series);
                            }
                            if(options.use.selectItem){

                                if(thisSeriesStyles.area.items != null){
                                    fsStyles = getStyles('bar', thisSeriesStyles, itemWidth, count, thisDataIdx);
                                }

                                if(self.overItem != null) {
                                    var overfsStyles = fsStyles;
                                    if(thisSeriesStyles.area.items != null){
                                        overfsStyles = getStyles('bar', thisSeriesStyles, itemWidth, count, self.overItem.data('idx'));
                                    }

                                    self.drawStyles(self.overItem, overfsStyles, self.overItem.data('data'), seriesComp, '');
                                    self.overItem = null;
                                }
                                self.overItem = this;
                                self.overItem.data('data', overData);

                                self.drawStyles(self.overItem, fsStyles, overData, seriesComp);
                            }
                        });
                    }

                    if(textGroup.length > 0){ // useitemvalue : true
                        var group = paper.set(textGroup).attr({
                            'fill': 		textStyles.color,
                            'font-size': 	textStylesSize+'px',
                            'font-family': 	textStyles.family,
                            'font': 		textStylesSize+" '" + textStyles.family + "'",
                            'text-anchor': 	textStyles.align
                        });

                        elementGroup.unshift(group);
                    }
                    if((series.form && series.form.indexOf('updown') > -1) && thisSeriesStyles.line.base.width > 0 && series.form !== 'updown_minaxis') {

                        var thisSeriesStylesLineBase = thisSeriesStyles.line.base;

                        var line = {}
                        if(TYPE === 'SVG') {
                            line = getLine(TYPE, _baseLine, GRAPH_TOP, _baseLine, GRAPH_HEIGHT + GRAPH_TOP);
                        } else {
                            line = getLine(TYPE, _baseLine - 1.5, GRAPH_TOP - 1.5, _baseLine - 1.5, GRAPH_HEIGHT + GRAPH_TOP - 1.5);
                        }

                        var item = paper.path("M"+line.x1 + ',' + (line.y1) + ',' + line.x2 + ',' + (line.y2)).attr({
                            'stroke': thisSeriesStylesLineBase.color,
                            'stroke-width': thisSeriesStylesLineBase.width,
                            'stroke-opacity': thisSeriesStylesLineBase.opacity
                        });
                        elementGroup.unshift(item);
                    }
                    self.elementGroup = elementGroups;
                    self.elementNodes = elementGroups;
                };
                /**
                 * 마우스 오버,아웃시 활성화된 아이템에 색상 입히기
                 * @param  {Node}  item       SVG Node
                 * @param  {Object}  fsStyles   스타일
                 * @param  {Object}  overData   활성화된 아이템의 데이터
                 * @param  {String}  seriesComp 아이템의 현황 up, down, normal
                 * @param  {Boolean} isOver     활성화된 상태인지 아닌지
                 * @return {Node}             스타일이 변경된 아이템
                 */
                self.drawStyles = function(item, fsStyles, overData, seriesComp, isOver){

                    if(overData == null) return;

                    var shape = overData.shape;

                    var comp = '';
                    if(seriesComp != '') {
                        comp = overData.comp;
                    }

                    if(isOver != undefined && isOver === ''){

                    } else {
                        comp = 'over' + comp;
                    }
                    item.attr({
                        'fill' 			: fsStyles[comp + 'fillcolor'],
                        'stroke' 		: fsStyles[comp + 'strokecolor'],
                        'stroke-width'	: fsStyles[comp + 'strokewidth'],
                        'stroke-opacity': fsStyles[comp + 'strokealpha']
                    });
                    if(fsStyles[comp + 'fillcolor'].indexOf('url') <= -1){

                        item.attr({
                            'fill-opacity'	: fsStyles[comp + 'fillalpha']
                        });
                    }

                    return item;
                };
                /**
                 * 시리즈 그리기 : 시계열 사용시 : 바시리즈는 시계열 없음.
                 * @param  {Number} _index    시리즈가 그려질 시작(Y) 위치
                 * @param  {Number} _stopIndex 그려지는 아이템의 개수
                 *                             시계열에서 조정에 따라 개수가 달라질수 있음.
                 * @return null
                 */
                self.drawTimeSlice = function(_index, _stopIndex){

                };
                /**
                 * 아이템을 생성하고 스타일 입히기 전 초기화
                 * 컬럼시리즈는 아이템 렌더러라는 중간 개념이 있는데 이는 사용자가 직접 컬럼 모양을 변경하고 싶을때 사용한다.
                 * @param  {String} _seriesComp updown 스타일을 입혀야 하는지 체크
                 * @param  {Number} _idx        _idx번째 아이템(index)
                 * @param  {Object} _shape      _idx번째 아이템의 위치값
                 * @param  {String} _comp       _idx번째 아이템의 상승/하락 구분
                 * @param  {Number} _base       최저값의 위치
                 * @param  {Object} _styles     시리즈 스타일
                 * @return {Node}             생성된 SVG 노드
                 */
                var createItem = function(_seriesComp, _idx, _shape, _comp, _base, _styles){

                    var _fc, _fa, _sw, _sc, _sa;
                    if(_seriesComp !== 'updown') {
                        _fc = _styles.fillcolor;
                        _fa = _styles.fillalpha;
                        _sw = _styles.strokewidth;
                        _sc = _styles.strokecolor;
                        _sa = _styles.strokealpha;
                    } else {
                        _fc = _styles[_comp + 'fillcolor'];
                        _fa = _styles[_comp + 'fillalpha'];
                        _sw = _styles[_comp + 'strokewidth'];
                        _sc = _styles[_comp + 'strokecolor'];
                        _sa = _styles[_comp + 'strokealpha'];
                    }

                    var item = null;

                    if(thisSeriesStyles.itemRenderer.setRenderer == null){
                        item = drawFillRectangle(_shape, _comp, _base, _fc, _fa, _sw, _sc, _sa);
                    } else {
                        item = thisSeriesStyles.itemRenderer.setRenderer(paper, {'left': _shape.x, 'top': _shape.y, 'width': _shape.width, 'height': _shape.height}, thisData.data[_idx], thisSeriesStyles);
                    }
                    item.data({
                        'idx': _idx,
                        'comp': _comp
                    });
                    return item;
                };

                // Rectangle Fill
                /**
                 * 실제로 아이템을 만들고 색상을 입히는 함수
                 * @param  {Object} _shape 아이템의 위치값
                 * @param  {String} _comp  아이템의 상승/하락 구분
                 * @param  {Number} _base  최저값의 위치
                 * @param  {String} _fc    면 색상
                 * @param  {Number} _fa    면 투명도
                 * @param  {Number} _sw    선 두께
                 * @param  {String} _sc    선 색상
                 * @param  {Number} _sa    선 투명도
                 * @return {Node}        생성된 SVG 노드
                 */
                var drawFillRectangle = function(_shape, _comp, _base, _fc, _fa, _sw, _sc, _sa){

                    var _x = _shape.x;
                    var _y = _shape.y;
                    var _w = _shape.width;
                    var _h = _shape.height;

                    var rp = getRectangle(TYPE, _x, _y, _w, _h, _sw);

                    var rect = null;
                    if(options.use.animate && TYPE !== "VML"){
                        var y = rp.y + rp.height;

                        if((series.form && series.form.indexOf('updown') > -1) && _comp === 'down' && series.form !== 'updown_minaxis') {
                            y = getRectangle(TYPE, _x, _base, _w, _h, _sw).y + 1;
                        }

                        rect = paper.rect(_base, rp.y, 0, rp.height)
                            .attr({
                                'fill': _fc,
                                'fill-opacity': _fa,
                                'stroke-width': (_fc.indexOf('.') > -1) ? 0:_sw,
                                'stroke': _sc,
                                'stroke-opacity': _sa
                            });

                        rect.stop().animate({
                            'x': rp.x,
                            'y': rp.y,
                            'width': rp.width,
                            'height': rp.height
                        }, options.animate.speed, options.animate.type, function(){
                            if(_fc.indexOf('.') > -1) {
                                this.animate({'stroke-width': _sw}, 100);
                            }
                        });
                    } else {
                        if(options.getResize && TYPE !== "VML"){
                            rect = paper.rect(rp.x, rp.y, rp.width, rp.height)
                                .attr({
                                    'fill': _fc,
                                    'fill-opacity': _fa,
                                    'stroke-width': _sw,
                                    'stroke': _sc,
                                    'stroke-opacity': _sa
                                });
                        } else {
                            if(rp.width < 0) {
                                rp.width = 0;
                            }
                            rect = paper.rect(rp.x, rp.y, rp.width, rp.height)
                                .attr({
                                    'fill': _fc,
                                    'fill-opacity': _fa,
                                    'stroke-width': _sw,
                                    'stroke': _sc,
                                    'stroke-opacity': _sa
                                });
                        }
                    }

                    return rect;
                };
                return self;
            };
            // Line
            /**
             * 선(Line)시리즈 그리기
             * @param  {String} _serieskey 메인, 서브 등 영역 Key Name
             * @param  {Object} _options   옵션
             * @param  {Object} _styles    스타일
             * @param  {Object} _series    시리즈
             * @return {Function}            그려진 시리즈 객체
             */
            DRAWSERIES.drawline = function(_serieskey, _options, _styles, _series, _key){
                // 기본 스타일 정의
                var defaultStyles = {
                    line: {
                        normal: { color: '#2bcdba', width: 3, opacity: 1, over: { color: '#00a693', width: 3, opacity: 1 } },
                        up:     { color: '#ff625f', width: 3, opacity: 1, over: { color: '#ca2a27', width: 3, opacity: 1 } },
                        down:   { color: '#0093d8', width: 3, opacity: 1, over: { color: '#005fa8', width: 3, opacity: 1 } },
                        flat:   { color: '#465866', width: 3, opacity: 1, over: { color: '#465866', width: 3, opacity: 1 } },
                        base: 	{ color: '#465866', width: 2, opacity: 1 }
                    },
                    tick: {
                        style: null, size: 5, overSize: 1.5,
                        area: {
                            normal: {color: '#ffffff', opacity: 1, over: {color: '#ffffff', opacity: 1}},
                            up: 	{color: '#ffffff', opacity: 1, over: {color: '#ffffff', opacity: 1}},
                            down: 	{color: '#ffffff', opacity: 1, over: {color: '#ffffff', opacity: 1}},
                            flat: 	{color: '#ffffff', opacity: 1, over: {color: '#ffffff', opacity: 1}}
                        },
                        line: {
                            normal: {color: '#2bcdba', opacity: 1, width: 3, over: {color: '#465866', opacity: 1, width: 3}},
                            up: 	{color: '#ff625f', opacity: 1, width: 3, over: {color: '#465866', opacity: 1, width: 3}},
                            down: 	{color: '#0093d8', opacity: 1, width: 3, over: {color: '#465866', opacity: 1, width: 3}},
                            flat: 	{color: '#465866', opacity: 1, width: 3, over: {color: '#465866', opacity: 1, width: 3}}
                        }
                    },
                    text: {
                        use: false,
                        family: 'Noto Sans KR', size: 12, color: '#666666', align: 'center',
                        style: 'normal', opacity: 1, format: null, func: null
                    }
                };

                var self = {};

                var options = _options, series = _series;
                var thisSeriesStyles = $.extend(true, {}, defaultStyles, _styles.series[_serieskey]);

                if(TYPE == 'VML') {
                    // 글꼴 흐림현상으로 VML은 Dotum으로 Fix
                    thisSeriesStyles.text.family = ie8Font;
                }

                _styles.series[_serieskey] = thisSeriesStyles;

                var thisStyles = self.styles = _styles;

                var KEY = _key; /// main , volume, macd 등 첫번째 키 이름

                var GRAPH_TOP = 0, GRAPH_LEFT = 0, GRAPH_WIDTH = 0, GRAPH_HEIGHT = 0;
                var yAxisMax = 0, yAxisMin = 0, yAxisGap = 0;

                var thisData = null;

                self.elementNodes = [];
                self.overTick = null;
                /**
                 * 시리즈 실행
                 * @param  {Number} _x        		시리즈가 그려질 X위치
                 * @param  {Number} _y         		시리즈가 그려질 Y위치
                 * @param  {Number} _w         		시리즈가 그려질 넓이
                 * @param  {Number} _h        		시리즈가 그려질 높이
                 * @param  {Array} _data      		차트데이터
                 * @param  {Array} _yAxis     		Y축 값 데이터 배열
                 * @param  {Number} _prev_data 		base, before 폼계열에서 사용하는 값으로 전일비교금액이 있을때 사용
                 * @return null
                 */
                self.init = function(_x, _y, _w, _h, _data, _yAxis, _prev_data){
                    yAxisMax = _yAxis[_yAxis.length - 1];
                    yAxisMin = _yAxis[0];
                    yAxisGap = yAxisMax - yAxisMin;

                    GRAPH_TOP = _y;
                    GRAPH_LEFT = _x;
                    GRAPH_WIDTH = _w;
                    GRAPH_HEIGHT = _h;

                    thisSeriesStyles = $.extend(true, {}, defaultStyles, _styles.series[_serieskey]);
                    _styles.series[_serieskey] = thisSeriesStyles;

                    self.elementNodes = [];

                    parse(_data, _yAxis);
                };

                self.draw = function(_startY, _baseLine, _stopCount){

                    if(self.overItem != null) {
                        self.overItem.remove();
                    }
                    var data = thisData.data, count = data.length;
                    var textGroup = [];

                    var textStyles 			= thisSeriesStyles.text,
                        textStylesUse 		= textStyles.use,
                        textStylesFunc 		= textStyles.func,
                        textStylesFormat 	= textStyles.format,
                        textStylesValign 	= textStyles.valign,
                        textStylesSize 		= parseInt(textStyles.size);


                    var value = null, comp = '';
                    var valueYAxis = '';
                    var shape = null;
                    for(var i = 0; i < count; i ++){
                        if(_stopCount <= i) {
                            break;
                        }

                        value = data[i], comp = value.comp;

                        valueYAxis = value.yaxis;

                        if($.trim(value.xaxis) == '' || isNaN(valueYAxis)) {
                            continue;
                        }

                        shape = value.shape;

                        if(textStylesUse && value.xaxis != ''){

                            if(textStylesFunc == null){

                                var yValue = valueYAxis;
                                if(textStylesFormat != null) {

                                    yValue = eval(textStylesFormat)(valueYAxis, value);
                                }

                                var yPos = shape.y - textStylesSize;

                                if(textStylesValign === 'middle') {

                                    yPos = Math.floor(shape.y + shape.height / 2);

                                } else if(textStylesValign === 'bottom') {

                                    yPos = Math.floor(shape.y + shape.height - textStylesSize);
                                }

                                var text = paper.text(shape.x , yPos-5, yValue);
                            } else {

                                var value = eval(textStylesFunc)(value);

                                var text = paper.text(value.x, value.y, value.text);
                            }

                            textGroup.push(text);
                            elementGroup.push(text);
                        }

                        if(textGroup.length > 0){ // useitemvalue : true
                            var group = paper.set(textGroup).attr({
                                'fill': 		textStyles.color,
                                'font-size': 	textStylesSize+'px',
                                'font-family': 	textStyles.family,
                                'font': 		textStylesSize+" '" + textStyles.family + "'",
                                'text-anchor': 	textStyles.align
                            });

                        }
                    }

                };

                /**
                 * 시리즈의 아이템별 위치, 크기 등을 구하고 그리는 함수
                 * @param  {Array} _data      차트데이터
                 * @param  {Array} _yAxis     Y축 값 데이터 배열
                 * @return null
                 */
                var parse = function(_data, _yAxis){
                    var ud_base = (series.hasOwnProperty('form') && (series.form === 'updown_base' || series.form === 'updown')) ? true : false;

                    thisData = _data;
                    var data = thisData.data, count = data.length;
                    var BASE = (ud_base) ? thisData.prevcprice : thisData.base;
                    if(series.form === 'updown'){
                        BASE = 0;
                    }

                    var thisStylesGraph = thisStyles.graph;

                    var startX = GRAPH_LEFT + thisStylesGraph.paddingLeft;
                    var startY = thisStyles.layout.paddingTop + thisStylesGraph.paddingTop;

                    var baseLine = 0;
                    if(ud_base) {
                        baseLine = Math.round((GRAPH_HEIGHT - thisStylesGraph.paddingTop - thisStylesGraph.paddingBottom) * (yAxisMax - BASE) / yAxisGap) + GRAPH_TOP + thisStylesGraph.paddingTop;
                    } else {
                        baseLine = GRAPH_HEIGHT + startY;
                    }

                    var xGap = (GRAPH_WIDTH - thisStylesGraph.paddingLeft - thisStylesGraph.paddingRight) / count;
                    var xGapHalf = xGap / 2;

                    var height = GRAPH_HEIGHT - thisStylesGraph.paddingTop - thisStylesGraph.paddingBottom;

                    if(thisStyles.xAxis.baseAtStart) {
                        xGapHalf = 0;
                        xGap = (GRAPH_WIDTH - thisStylesGraph.paddingLeft - thisStylesGraph.paddingRight) / (count - 1);
                    }

                    var value, rect = {};

                    for(var start = 0, len = data.length; start < len; start++){
                        if(data[start].yaxis != null) break;
                    }
                    for(var last = data.length - 1; last >= 0; last--){
                        if(data[last].yaxis != null) break;
                    }

                    var stopCount = (options.timeSlice.status == 'start') ? options.timeSlice.timePlayIndex + 1 : count;

                    var rectLeft = startX + xGapHalf;
                    var rectTop  = GRAPH_TOP + thisStylesGraph.paddingTop;
                    for(var i = start; i < count; i++){
                        value = data[i];
                        rect = {};
                        if($.trim(value.xaxis) == '' && $.trim(value.yaxis) == '' ) {

                        } else {
                            if(!value.hasOwnProperty('minaxis')){

                                if(value.yaxis > BASE) value.comp = 'up';
                                else if(value.yaxis < BASE) value.comp = 'down';
                                else value.comp = 'flat';
                            } else {

                            }
                            rect.x = Math.round(xGap * i) + rectLeft;
                            rect.y = Math.round(height * (yAxisMax - value.yaxis) / yAxisGap) + rectTop;

                            rect.width = xGap;

                            // 증권차트에서 마우스 이벤트 Info 용
                            rect.mx = Math.round(xGap * i) + startX;
                            rect.mw = xGap;
                        }
                        value['shape'] = rect;
                    }
                    var rect = null, item = null, prevData;
                    var path = "", shape = {};
                    if(ud_base){ // form : updown_base, updown
                        rect = [];
                        var getUD = function(_idx, _prevClose){
                            var ud = '';
                            for(var i = _idx; i < count; i++){
                                if(_prevClose == data[i].yaxis) {continue;}
                                else if(_prevClose < data[i].yaxis) {ud = 'up'; break;}
                                else if(_prevClose > data[i].yaxis) {ud = 'down'; break;}
                            }
                            if(ud == '') ud = 'flat';

                            return ud;
                        };
                        var prevClose = BASE;
                        var ud = getUD(start, prevClose);

                        var thisSeriesStylesLine = thisSeriesStyles.line;
                        var lineStyle = {
                            'stroke': 			thisSeriesStylesLine[ud].color,
                            'stroke-width': 	thisSeriesStylesLine[ud].width,
                            'stroke-opacity': 	thisSeriesStylesLine[ud].opacity
                        };

                        for(var i = start; i < count; i++){
                            value = data[i], shape = value.shape;

                            var valueYaxis = value.yaxis;

                            if(i == start) {
                                path = "M"+shape.x  + " " +  shape.y;
                            } else if(i > start) {
                                prevData = data[i - 1];
                            }
                            if(i > start && (prevData.yaxis < prevClose && valueYaxis >= prevClose || prevData.yaxis > prevClose && valueYaxis <= prevClose)){

                                var cross = getCrossPoint({x: prevData.shape.x, y: prevData.shape.y}, {x: shape.x, y: shape.y}, baseLine);
                                if(cross != null) {
                                    path += "L"+cross.x + " " + cross.y;
                                    item = paper.path(path).attr(lineStyle);
                                    item.data('comp', ud);
                                    rect.push(item);

                                    ud = getUD(i, prevClose);

                                    lineStyle.stroke 			= thisSeriesStylesLine[ud].color;
                                    lineStyle['stroke-width'] 	= thisSeriesStylesLine[ud].width;
                                    lineStyle['stroke-opacity'] = thisSeriesStylesLine[ud].opacity;
                                    path = "M"+cross.x + " " + cross.y;
                                }
                                path += "L"+shape.x + " " + shape.y;
                            } else {
                                if(i > start && prevClose == valueYaxis && i < count - 1 && valueYaxis != data[i+1].yaxis){
                                    path += "L"+shape.x + " " + shape.y;
                                    item = paper.path(path).attr(lineStyle);
                                    item.data('comp', ud);
                                    rect.push(item);

                                    ud = getUD(i, prevClose);

                                    lineStyle.stroke 			= thisSeriesStylesLine[ud].color;
                                    lineStyle['stroke-width'] 	= thisSeriesStylesLine[ud].width;
                                    lineStyle['stroke-alpha'] 	= thisSeriesStylesLine[ud].opacity;
                                    path = "M"+shape.x + " " + shape.y;
                                } else {
                                    path += "L"+shape.x + " " + shape.y;
                                }
                            }
                            if( i == count - 1){
                                item = paper.path(path).attr(lineStyle);
                                item.data('comp', ud);

                                rect.push(item);

                                rect = paper.set(rect).attr({'opacity': 0});

                                elementGroup.unshift(rect);
                            }
                        }
                        if(thisSeriesStylesLine.base.width > 0) {
                            var line = getLine(TYPE, GRAPH_LEFT, baseLine, GRAPH_WIDTH + GRAPH_LEFT, baseLine);
                            if(TYPE === 'SVG') {
                                line = getLine(TYPE, GRAPH_LEFT, baseLine, GRAPH_WIDTH + GRAPH_LEFT, baseLine);
                            } else {
                                line = getLine(TYPE, GRAPH_LEFT - 0.5, baseLine - 0.5, GRAPH_WIDTH + GRAPH_LEFT - 0.5, baseLine - 0.5);
                            }
                            var base = paper.path("M"+line.x1 + ' ' + line.y1 + ' L' + line.x2 + ' ' + line.y2).attr({
                                'stroke': 		thisSeriesStylesLine.base.color,
                                'stroke-width': thisSeriesStylesLine.base.width,
                                'stroke-alpha': thisSeriesStylesLine.base.opacity
                            });
                            elementGroup.unshift(base);
                        }

                        if(String(thisSeriesStyles.tick.style) != "null"){


                            var tickGroup = [];//paper.set();
                            for(var i = start; i < count; i++){

                                value = data[i];
                                shape = value.shape;
                                var tick = null;
                                if(i == start) {
                                    tick = drawTickNoEvent(data, i, value.comp, thisSeriesStyles, options, _serieskey);
                                } else if(i > start) {
                                    prevData = data[i - 1];
                                }
                                if(i > start && (prevData.yaxis < prevClose && value.yaxis >= prevClose || prevData.yaxis > prevClose && value.yaxis <= prevClose)){
                                    var cross = getCrossPoint({x: prevData.shape.x, y: prevData.shape.y}, {x: shape.x, y: shape.y}, baseLine);

                                    tick = drawTickNoEvent(data, i, value.comp, thisSeriesStyles, options, _serieskey);
                                } else {
                                    if(i > start && prevClose == value.yaxis && i < count - 1 && value.yaxis != data[i+1].yaxis){
                                        tick = drawTickNoEvent(data, i, value.comp, thisSeriesStyles, options, _serieskey);

                                    } else {
                                        if(i > start) tick = drawTickNoEvent(data, i, value.comp, thisSeriesStyles, options, _serieskey);
                                    }
                                }
                                elementGroup.unshift(tick);

                                if(tick != null) tickGroup.push(tick);
                            }
                            if(options.use.animate && TYPE !== "VML")
                                paper.set(tickGroup).attr({'opacity': 0}).animate({'opacity': 1}, options.animate.speed, options.animate.type);

                            self.elementNodes = tickGroup.reverse();

                            drawTickBindEvent(data, '', thisSeriesStyles);
                        }
                        if(rect != null){
                            var comp = '';
                            var overData = null;
                            rect.hover(function(_e){
                                mouseOverSeriesKey = _serieskey;

                                var mouse = getMousePosition(_e);

                                var fsHalfGap = xGap / 2;
                                if(fsHalfGap < 1) {
                                    fsHalfGap = 1;
                                }
                                if(options.use.tip && _e.isItemOver != false) {
                                    for(var i = data.length; i --;){
                                        overData = data[i];

                                        var firstShape = overData.shape;

                                        if(mouse.x > firstShape.x - fsHalfGap && mouse.x < firstShape.x + fsHalfGap){
                                            showToolTip(options.func.tip, overData, firstShape.x, firstShape.y, series);

                                            break;
                                        }
                                    }
                                }
                                if(options.use.selectItem){
                                    for(i = rect.length; i--;){
                                        var comp = rect[i].data('comp');
                                        rect[i].animate({
                                            'stroke': thisSeriesStyles.line[comp].over.color,
                                            'stroke-width': thisSeriesStyles.line[comp].over.width,
                                            'stroke-opacity': thisSeriesStyles.line[comp].over.opacity
                                        }, 100);
                                    }
                                }
                            }, function(){
                                if(options.use.selectItem){
                                    for(i = rect.length; i--;){
                                        var comp = rect[i].data('comp');
                                        rect[i].animate({
                                            'stroke': thisSeriesStyles.line[comp].color,
                                            'stroke-width': thisSeriesStyles.line[comp].width,
                                            'stroke-opacity': thisSeriesStyles.line[comp].opacity
                                        }, 100);
                                    }
                                }
                                overData = null;
                            }).mousemove(function(_e){
                                if(overData == null) return;

                                var graphTop = styles.main.layout._graphtop;
                                var graphHeight = graphTop;
                                var lastSeriesKey = '';

                                for(var i in styles) {
                                    lastSeriesKey = i;
                                }

                                for(i in styles) {
                                    var tLayout = styles[i].layout;

                                    if(i === lastSeriesKey) {
                                        if(i === 'main') {
                                            graphHeight = graphHeight + tLayout._graphheightpx;
                                        } else {

                                            graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                        }
                                    }
                                }
                                moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                                    getMousePosition(_e),
                                    vCross, hCross,
                                    {x: Math.round(overData.shape.x) - 1, y: Math.round(overData.shape.y) - 2},
                                    options.use.magnet);
                            });

                            if(TOUCHDEVICE) {
                                rect.unmouseup().mouseup(function(_e) {
                                    mouseOverSeriesKey = _serieskey;

                                    var mouse = getMousePosition(_e);

                                    var fsHalfGap = xGap / 2;
                                    var fsHalfGap = xGap / 2;
                                    if(fsHalfGap < 1) {
                                        fsHalfGap = 1;
                                    }
                                    for(var i = data.length; i --;){
                                        overData = data[i];
                                        var firstShape = overData.shape;

                                        if(mouse.x > firstShape.x - fsHalfGap && mouse.x < firstShape.x + fsHalfGap){
                                            comp = overData.comp;
                                            if(options.use.tip && _e.isItemOver != false) {
                                                showToolTip(options.func.tip, overData, firstShape.x, firstShape.y, series);
                                            }
                                            break;

                                        }
                                    }
                                    if(options.use.selectItem){
                                        for(i = rect.length; i--;){
                                            var comp = rect[i].data('comp');
                                            rect[i].animate({
                                                'stroke': thisSeriesStyles.line[comp].over.color,
                                                'stroke-width': thisSeriesStyles.line[comp].over.width,
                                                'stroke-opacity': thisSeriesStyles.line[comp].over.opacity
                                            }, 100);
                                        }
                                    }
                                });
                            }
                        }
                        if(options.use.animate && TYPE !== "VML"){
                            rect.animate({'opacity': 1}, options.animate.speed, options.animate.type);
                        } else {
                            rect.attr({'opacity': 1});
                        }
                    } else {
                        // form : step 일때
                        if((series.hasOwnProperty('form') && series.form === 'step')){
                            var getPathStep = function(_start, _end, step){
                                for(var i = _start; i < _end; i++){
                                    value = data[i];
                                    if(($.trim(value.xaxis) == '' && $.trim(value.yaxis) == '') || value.yaxis === null || data[i + 1].yaxis === null) continue;

                                    path += getPathStepString('first', value['shape'], (data[i + 1]).shape);

                                    if(step == undefined || step == 'second')
                                        path += getPathStepString('second', value['shape'], (data[i + 1]).shape);
                                }
                            };
                            var step = 2;
                            var animation = function(_this, _start, _end){
                                //
                                if(step == 2) {
                                    getPathStep(_start, _end, 'first');
                                } else if(step == 1) {
                                    getPathStep(_start, _end, 'second');
                                }


                                try{
                                    _this.stop().animate({path: path}, options.animate.speed, options.animate.type, function(){

                                        if(_end < count-1){

                                            if(step == 1) {
                                                if(String(thisSeriesStyles.tick.style) != "null"){
                                                    var tick = drawTickNoEvent(data, _end, undefined, thisSeriesStyles, options, _serieskey);
                                                    elementGroup.push(tick);
                                                    self.elementNodes.unshift(tick);
                                                }
                                                ++_start;
                                                _end = _start + 1;
                                            }

                                            step = step - 1;

                                            if(step == 0) step = 2;

                                            animation(_this, _start, _end);
                                        } else if(_end == count - 1 && step == 2) {
                                            // 마지막 라인에 애니메이션하기 위한 else문.

                                            step = step - 1;
                                            animation(_this, _start, _end);
                                        } else {
                                            // Step의 제일 마지막 처리
                                            if(String(thisSeriesStyles.tick.style) != "null"){
                                                var tick = drawTickNoEvent(data, _end, undefined, thisSeriesStyles, options, _serieskey);
                                                elementGroup.push(tick);
                                                self.elementNodes.unshift(tick);
                                            }
                                            if(String(thisSeriesStyles.tick.style) != "null"){
                                                drawTickBindEvent(data, undefined, thisSeriesStyles);
                                            }
                                        }
                                    });
                                }catch (e){

                                }
                            };

                            var lineStyle = {
                                'stroke': thisSeriesStyles.line.normal.color,
                                'stroke-width': thisSeriesStyles.line.normal.width,
                                'stroke-opacity': thisSeriesStyles.line.normal.opacity
                            };
                            if(options.use.animate && TYPE !== "VML" && isTimeSliceAnimate != false){

                                var firstShape = data[start].shape;
                                rect = paper.path("M"+firstShape.x + "," + firstShape.y).attr(lineStyle);
                                if(String(thisSeriesStyles.tick.style) != "null") {
                                    var tick = drawTickNoEvent(data, 0, undefined, thisSeriesStyles, options, _serieskey);
                                    elementGroup.push(tick);
                                    self.elementNodes.push(tick);
                                }
                                animation(rect, start, start + 1);
                                elementGroup.unshift(rect);

                            } else {
                                var stopIndex = count;

                                if(stopIndex <= 1) return;

                                getPathStep(start, stopIndex-1);

                                rect = paper.path(path).attr(lineStyle);

                                elementGroup.unshift(rect);

                                if(String(thisSeriesStyles.tick.style) != "null"){
                                    for(var i = stopIndex; i--; i > start){
                                        var tick = drawTickNoEvent(data, i, undefined, thisSeriesStyles, options, _serieskey);
                                        elementGroup.push(tick);
                                        self.elementNodes.push(tick);
                                    }
                                    drawTickBindEvent(data, undefined, thisSeriesStyles);
                                }
                                isTimeSliceAnimate = options.use.animate;
                            }
                        } else {
                            // form : normal 일때
                            var getPath = function(_start, _end){
                                for(var i = _start; i < _end; i++){
                                    value = data[i];
                                    // data값 한개인 경우 발생하는 error 방지
                                    if(data[i+1] == undefined){data[i+1]=data[i]};
                                    if(($.trim(value.xaxis) == '' && $.trim(value.yaxis) == '') || value.yaxis === null || data[i + 1].yaxis === null) continue;
                                    path += getPathString(value['shape'], (data[i + 1]).shape);
                                }
                                return path;
                            };
                            var animation = function(_this, _start, _end){
                                path = getPath(_start, _end);
                                try{
                                    _this.stop().animate({path: path}, options.animate.speed, options.animate.type, function(){
                                        if(String(thisSeriesStyles.tick.style) != "null"){
                                            var tick = drawTickNoEvent(data, _end, undefined, thisSeriesStyles, options, _serieskey);
                                            elementGroup.push(tick);
                                            self.elementNodes.unshift(tick);
                                        }
                                        if(_end < count-1){
                                            ++_start;
                                            _end = _start + 1;
                                            animation(_this, _start, _end);
                                        } else {
                                            if(String(thisSeriesStyles.tick.style) != "null"){
                                                drawTickBindEvent(data, undefined, thisSeriesStyles);
                                            }
                                        }
                                    });
                                }catch (e){

                                }
                            };
                            var lineStyle = {
                                'stroke': thisSeriesStyles.line.normal.color,
                                'stroke-width': thisSeriesStyles.line.normal.width,
                                'stroke-opacity': thisSeriesStyles.line.normal.opacity
                            };
                            if(options.use.animate && TYPE !== "VML" && isTimeSliceAnimate != false){
                                if(start > 0 && String(thisSeriesStyles.tick.style) != "null") {

                                    // 값이 비어있는 채로 시작하고 틱을 사용할 경우
                                    // 강제로 비어있는 tick 생성
                                    for(var n = 0; n < start; n ++) {

                                        var tick = drawTickNoEvent(data, n, undefined, thisSeriesStyles, options, _serieskey);
                                        elementGroup.push(tick);
                                        self.elementNodes.push(tick);
                                    }
                                }

                                var firstShape = data[start].shape;
                                rect = paper.path("M"+firstShape.x + "," + firstShape.y).attr(lineStyle);
                                if(start > 0) {
                                    setTimeout(function(){
                                        if(String(thisSeriesStyles.tick.style) != "null") {
                                            var tick = drawTickNoEvent(data, start, undefined, thisSeriesStyles, options, _serieskey);
                                            elementGroup.push(tick);
                                            self.elementNodes.unshift(tick);
                                        }
                                        animation(rect, start, start + 1);
                                    }, options.animate.speed * start);
                                } else {
                                    if(String(thisSeriesStyles.tick.style) != "null") {
                                        var tick = drawTickNoEvent(data, start, undefined, thisSeriesStyles, options, _serieskey);
                                        elementGroup.push(tick);
                                        self.elementNodes.unshift(tick);
                                    }
                                    animation(rect, start, start + 1);
                                }
                                elementGroup.unshift(rect);

                            } else {
                                var stopIndex = count;

                                if(stopIndex <= 1) return;
                                path = getPath(start, stopIndex-1);

                                rect = paper.path(path).attr(lineStyle);
                                elementGroup.unshift(rect);

                                if(String(thisSeriesStyles.tick.style) != "null"){
                                    for(var i = stopIndex; i--; i > start){
                                        var tick = drawTickNoEvent(data, i, undefined, thisSeriesStyles, options, _serieskey);
                                        elementGroup.push(tick);
                                        self.elementNodes.push(tick);
                                    }
                                    drawTickBindEvent(data, undefined, thisSeriesStyles);
                                }
                                isTimeSliceAnimate = options.use.animate;
                            }
                            if(rect != null){
                                var overData = null;
                                rect.hover(function(_e){
                                    mouseOverSeriesKey = _serieskey;

                                    var mouse = getMousePosition(_e);
                                    // var fsHalfGap = (data[1].shape.x - data[0].shape.x) / 2;
                                    var fsHalfGap = xGap / 2;
                                    if(fsHalfGap < 1) {
                                        fsHalfGap = 1;
                                    }
                                    for(var i = data.length; i --;){
                                        overData = data[i];
                                        var firstShape = overData.shape;

                                        if(mouse.x > firstShape.x - fsHalfGap && mouse.x < firstShape.x + fsHalfGap){

                                            comp = overData.comp;
                                            if(options.use.tip && _e.isItemOver != false) showToolTip(options.func.tip, overData, firstShape.x, firstShape.y, series);
                                            break;

                                        }
                                    }
                                    if(options.use.selectItem){
                                        this.animate({'stroke': thisSeriesStyles.line.normal.over.color, 'stroke-width': thisSeriesStyles.line.normal.over.width, 'stroke-opacity': thisSeriesStyles.line.normal.over.opacity}, 100);
                                    }

                                }, function(){
                                    if(options.use.selectItem) this.animate(lineStyle, 100);
                                    overData = null;
                                }).mousemove(function(_e){
                                    if(overData == null) return;

                                    var graphTop = styles.main.layout._graphtop;
                                    var graphHeight = graphTop;
                                    var lastSeriesKey = '';
                                    for(var i in styles) {
                                        lastSeriesKey = i;
                                    }
                                    for(i in styles) {
                                        var tLayout = styles[i].layout;

                                        if(i === lastSeriesKey) {
                                            if(i === 'main') {
                                                graphHeight = graphHeight + tLayout._graphheightpx;
                                            } else {

                                                graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                            }
                                        }
                                    }
                                    moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                                        getMousePosition(_e),
                                        vCross, hCross,
                                        {x: Math.round(overData.shape.x) - 1, y: Math.round(overData.shape.y) - 2},
                                        options.use.magnet);
                                });

                                if(TOUCHDEVICE) {
                                    rect.unmouseup().mouseup(function(_e) {
                                        mouseOverSeriesKey = _serieskey;

                                        var mouse = getMousePosition(_e);

                                        var fsHalfGap = xGap / 2;
                                        if(fsHalfGap < 1) {
                                            fsHalfGap = 1;
                                        }
                                        for(var i = data.length; i --;){
                                            overData = data[i];
                                            var firstShape = overData.shape;

                                            if(mouse.x > firstShape.x - fsHalfGap && mouse.x < firstShape.x + fsHalfGap){

                                                comp = overData.comp;

                                                if(options.use.tip && _e.isItemOver != false) {
                                                    showToolTip(options.func.tip, overData, firstShape.x, firstShape.y, series);
                                                }

                                                break;

                                            }
                                        }
                                        if(options.use.selectItem){
                                            this.animate({
                                                'stroke': thisSeriesStyles.line.normal.over.color,
                                                'stroke-width': thisSeriesStyles.line.normal.over.width,
                                                'stroke-opacity': thisSeriesStyles.line.normal.over.opacity
                                            }, 100);
                                        }
                                    });
                                }
                            }
                        }
                        self.draw(startY, baseLine, stopCount);
                    }
                };
                var timeSliceBack = null, timeSliceXGrid = null, timeSliceYGrid = null;
                var timeSliceXGridPath = [], timeSlideXGridLength = 0;
                var timeSliceYGridPath = [], timeSlideYGridLength = 0;
                var timeSliceYGridTop = null, timeSliceYGridBottom = null;
                var timeSliceYGridTopPath = [], timeSliceYGridBottomPath = 0;
                var isTimeSliceAnimate = options.use.animate;
                var timeSliceBackWidth = 0;
                /**
                 * 시리즈 그리기 : 시계열 사용시
                 * @param  {Number} _index    시리즈가 그려질 시작(Y) 위치
                 * @param  {Number} _stopIndex 그려지는 아이템의 개수
                 *                             시계열에서 조정에 따라 개수가 달라질수 있음.
                 * @return null
                 */
                self.drawTimeSlice = function(_index, _stopIndex){
                    if(options.timeSlice.status === 'stop'){
                        if(timeSliceBack != null){
                            timeSliceBack.remove();
                            timeSliceBack = null;
                        }
                        if(timeSliceXGrid != null){
                            timeSliceXGrid.remove();
                            timeSliceXGrid = null;
                        }
                        if(timeSliceYGrid != null){
                            timeSliceYGrid.remove();
                            timeSliceYGrid = null;
                        }

                        if(timeSliceYGridTop != null){
                            timeSliceYGridTop.remove();
                            timeSliceYGridTop = null;
                        }
                        if(timeSliceYGridBottom != null){
                            timeSliceYGridBottom.remove();
                            timeSliceYGridBottom = null;
                        }

                        return;
                    }
                    var data = thisData.data, count = data.length;
                    if(timeSliceBack == null){
                        isTimeSliceAnimate = false;
                        parse(thisData);

                        timeSliceBack = background[KEY].getBackground().clone();
                        if(timeSliceBack.attr('opacity') == 0) timeSliceBack.attr('opacity', 1);


                        var rect = timeSliceBack.getBBox();
                        timeSliceBackWidth = rect.width;
                        timeSliceBack.attr({
                            x: rect.x,
                            y: rect.y + 1,
                            width: timeSliceBackWidth,
                            height: rect.height + thisStyles.xAxis.paddingTop

                        });

                        timeSliceXGrid = xAxisLines[KEY].clone();
                        timeSliceYGrid = yAxisLines[KEY].clone();

                        timeSliceBack.toFront();
                        timeSliceXGrid.toFront();
                        timeSliceYGrid.toFront();

                        timeSliceXGridPath = timeSliceXGrid.attr('path');
                        timeSliceYGridPath = timeSliceYGrid.attr('path');


                        timeSliceYGrid.attr({'path': timeSliceYGridPath});
                        timeSliceXGrid.attr({'path': timeSliceXGridPath});

                        if(background[KEY].borders.hasOwnProperty('top')){
                            timeSliceYGridTop = background[KEY].borders.top.clone();
                            timeSliceYGridTop.toFront();
                            timeSliceYGridTopPath = timeSliceYGridTop.attr('path');
                            timeSliceYGridTop.attr({'path': timeSliceYGridTopPath});
                        }
                        if(background[KEY].borders.hasOwnProperty('bottom')){
                            timeSliceYGridBottom = background[KEY].borders.bottom.clone();
                            timeSliceYGridBottom.toFront();
                            timeSliceYGridBottomPath = timeSliceYGridBottom.attr('path');
                            timeSliceYGridBottom.attr({'path': timeSliceYGridBottomPath});
                        }
                        if(TYPE !== 'SVG'){
                            var splitPath = String(timeSliceXGridPath).split('M');
                            var splitPathArray = [];
                            for(i = 0; i < splitPath.length; i ++) {
                                if(splitPath[i] == "") continue;
                                var temp = splitPath[i].split(',');

                                splitPathArray.push(["M", Number(temp[0]), Number(temp[1])]);
                                splitPathArray.push(["L", Number(temp[2]), Number(temp[3])]);
                            }

                            timeSliceXGridPath = splitPathArray;
                        }

                    }


                    var firstShape = null, secondShape = data[_index].shape;

                    if(_index > 0){
                        firstShape = data[_index - 1].shape;
                    } else {
                        firstShape = {x: secondShape.x - (data[_index + 1].shape.x - secondShape.x)};
                    }

                    for(var i = timeSliceYGridPath.length; i--;){
                        if(i % 2 == 0){
                            var path = timeSliceYGridPath[i];
                            path[1] = secondShape.x;
                            timeSliceYGridPath[i] = path;
                        }
                    }


                    if(timeSliceYGridTop != null){
                        (timeSliceYGridTopPath[0])[1] = secondShape.x;
                        timeSliceYGridTop.animate({path: timeSliceYGridTopPath}, options.timeSlice.delay, 'linear');
                    }
                    if(timeSliceYGridBottom != null){
                        (timeSliceYGridBottomPath[0])[1] = secondShape.x;
                        timeSliceYGridBottom.animate({path: timeSliceYGridBottomPath}, options.timeSlice.delay, 'linear');
                    }


                    timeSliceYGrid.animate({path: timeSliceYGridPath}, options.timeSlice.delay, 'linear');

                    timeSliceBackWidth = timeSliceBackWidth - (secondShape.x - firstShape.x);
                    timeSliceBack.animate({x: secondShape.x, width: timeSliceBackWidth }, options.timeSlice.delay, 'linear', function(){
                        if(_index < data.length && timeSliceXGridPath.length > 0){

                            var timeSliceXGridPathClone = $.extend([], timeSliceXGridPath);

                            var xGridPath = Math.floor((timeSliceXGridPathClone.splice(0, 1)[0])[1]);

                            if(Math.floor(firstShape.x) < xGridPath && Math.floor(secondShape.x) >= xGridPath){

                                timeSliceXGridPath.splice(0, 2);

                                if(timeSliceXGridPath.length > 0)
                                    timeSliceXGrid.attr({'path': timeSliceXGridPath});
                                else
                                    timeSliceXGrid.attr({opacity: 0});
                            }
                        }

                        if(_index == data.length - 1){
                            timeSliceBack.remove();
                            timeSliceXGrid.remove();
                            timeSliceYGrid.remove();
                            timeSliceBack = null, timeSliceXGrid = null, timeSliceYGrid = null;

                            if(timeSliceYGridTop != null){
                                timeSliceYGridTop.remove();
                                timeSliceYGridTop = null;
                            }
                            if(timeSliceYGridBottom != null){
                                timeSliceYGridBottom.remove();
                                timeSliceYGridBottom = null;
                            }
                        }
                    });

                };
                // Path 값 String 으로 변환
                /**
                 * Path 값을 String 으로 변환 : step 폼이 아닌 경우
                 * @param  {Object} _rect1 좌표 1
                 * @param  {Object} _rect2 좌표 2
                 * @return {String}        좌표 문자열
                 */
                var getPathString = function(_rect1, _rect2){
                    return "M" + _rect1.x +"," + _rect1.y + "," + _rect2.x + "," + _rect2.y;
                };
                // Path 값 String 으로 변환
                /**
                 * Path 값을 String 으로 변환 : step 인 경우
                 * @param  {String} type 첫번째와 두번째 구분
                 * @param  {Object} _rect1 좌표 1
                 * @param  {Object} _rect2 좌표 2
                 * @return {String}        좌표 문자열
                 */
                var getPathStepString = function(type, _rect1, _rect2){
                    if(type === "first")
                        return "M" + _rect1.x +"," + _rect1.y + "," + _rect2.x + "," + _rect1.y;
                    else
                        return "M" + _rect2.x +"," + _rect1.y + "," + _rect2.x + "," + _rect2.y;
                };
                /**
                 * Tick을 사용할때 Tick에 이벤트 바인딩
                 * @param  {Array} _data             차트데이터
                 * @param  {String} _comp             up, down, normal 상태값
                 * @param  {Object} _thisSeriesStyles 시리즈 스타일
                 * @return null
                 */
                var drawTickBindEvent = function(_data, _comp, _thisSeriesStyles){

                    paper.set(self.elementNodes).hover(function(e){
                        // 만약 활성화가 되어있는 상태이면 초기화시킴.
                        if(self.overTick != null)
                            self.overTick.trigger('mouseout', self.overTick);

                        var data = _data[this.data('idx')];

                        if(data == undefined || !data.hasOwnProperty('comp')) return;

                        var comp = (data.comp && _comp !== undefined) ? data.comp : 'normal';

                        mouseOverSeriesKey = _serieskey;
                        if(options.use.tip && e.isItemOver != false) {

                            showToolTip(options.func.tip, data, data.shape.x, data.shape.y, series);
                        }
                        if(options.use.selectItem){

                            this.animate({'transform': 's'+_thisSeriesStyles.tick.overSize+','+_thisSeriesStyles.tick.overSize,
                                'fill'			: _thisSeriesStyles.tick.area[comp].over.color,
                                'fill-opacity'	: _thisSeriesStyles.tick.area[comp].over.opacity,
                                'stroke'		: _thisSeriesStyles.tick.line[comp].over.color,
                                'stroke-width'	: _thisSeriesStyles.tick.line[comp].over.width,
                                'stroke-opacity': _thisSeriesStyles.tick.line[comp].over.opacity
                            }, 100);
                        }
                        self.overTick = this;
                    }, function(e){

                        var data = _data[this.data('idx')];

                        if(data == undefined || !data.hasOwnProperty('comp')) return;

                        var comp = (data.comp && _comp !== undefined) ?  data.comp : 'normal';
                        if(options.use.selectItem){
                            this.animate({'transform': 's1,1',
                                'fill'			: _thisSeriesStyles.tick.area[comp].color,
                                'fill-opacity'	: _thisSeriesStyles.tick.area[comp].opacity,
                                'stroke'		: _thisSeriesStyles.tick.line[comp].color,
                                'stroke-width'	: _thisSeriesStyles.tick.line[comp].width,
                                'stroke-opacity': _thisSeriesStyles.tick.line[comp].opacity
                            }, 100);
                        }
                        self.overTick = null;
                    });
                };

                return self;
            };
            /**
             * 면(Area)시리즈 그리기
             * @param  {String} _serieskey 메인, 서브 등 영역 Key Name
             * @param  {Object} _options   옵션
             * @param  {Object} _styles    스타일
             * @param  {Object} _series    시리즈
             * @return {Function}            그려진 시리즈 객체
             */
            // Area
            DRAWSERIES.drawarea = function(_serieskey, _options, _styles, _series, _key){
                // 기본 스타일 정의
                var defaultStyles = {
                    area: {
                        normal: { color: '#2bcdba', opacity: 0.4, over: { color: '#2bcdba', opacity: 0.4 } },
                        up: 	{ color: '#e01f1b', opacity: 0.3, over: { color: '#e01f1b', opacity: 0.3 } },
                        down: 	{ color: '#5fbaf3', opacity: 0.4, over: { color: '#5fbaf3', opacity: 0.4 } },
                        flat: 	{ color: '#000000', opacity: 1, over: { color: '#000000', opacity: 1 } }
                    },
                    line: {
                        normal: { color: '#2bcdba', opacity: 1, width: 3, over: { color: '#2bcdba', opacity: 1, width: 3 } },
                        up: 	{ color: '#e01f1b', opacity: 1, width: 3, over: { color: '#ca2a27', opacity: 1, width: 3 } },
                        down: 	{ color: '#0093d8', opacity: 1, width: 3, over: { color: '#005fa8', opacity: 1, width: 3 } },
                        flat: 	{ color: '#000000', opacity: 1, width: 2, over: { color: '#000000', opacity: 1, width: 2 } },
                        base: 	{ color: '#465866', opacity: 1, width: 2, over: { color: '#465866', opacity: 1, width: 2 } }
                    },
                    tick: {
                        style: null, size: 5, overSize: 1.5,
                        area: {
                            normal: { color: '#ffffff', opacity: 1, over: { color: '#ffffff', opacity: 1 } },
                            up: 	{ color: '#ffffff', opacity: 1, over: { color: '#ffffff', opacity: 1 } },
                            down: 	{ color: '#ffffff', opacity: 1, over: { color: '#ffffff', opacity: 1 } },
                            flat: 	{ color: '#ffffff', opacity: 1, over: { color: '#ffffff', opacity: 1 }}
                        },
                        line: {
                            normal: { color: '#2bcdba', opacity: 1, width: 3, over: { color: '#465866', opacity: 1, width: 3 } },
                            up: 	{ color: '#ff625f', opacity: 1, width: 3, over: { color: '#465866', opacity: 1, width: 3 } },
                            down: 	{ color: '#0093d8', opacity: 1, width: 3, over: { color: '#465866', opacity: 1, width: 3 } },
                            flat: 	{ color: '#465866', opacity: 1, width: 3, over: { color: '#465866', opacity: 1, width: 3 } }
                        }
                    },
                    gradient: {
                        direction: 'horizontal'
                    },
                    text: {
                        use: false,
                        family: 'Noto Sans KR', size: 12, color: '#666666', align: 'center',
                        style: 'normal', opacity: 1, format: null
                    }
                };
                var self = {};

                var options = _options, series = _series;
                var thisSeriesStyles = $.extend(true, {}, defaultStyles, _styles.series[_serieskey]);

                if(TYPE == 'VML') {
                    // 글꼴 흐림현상으로 VML은 Dotum으로 Fix
                    thisSeriesStyles.text.family = ie8Font;
                }

                _styles.series[_serieskey] = thisSeriesStyles;

                var thisStyles = self.styles = _styles;

                var KEY = _key; /// main , volume, macd 등 첫번째 키 이름

                var GRAPH_TOP = 0, GRAPH_LEFT = 0, GRAPH_WIDTH = 0, GRAPH_HEIGHT = 0;
                var yAxisMax = 0, yAxisMin = 0, yAxisGap = 0;

                var thisData = null;

                self.elementNodes = [];
                /**
                 * 시리즈 실행
                 * @param  {Number} _x        		시리즈가 그려질 X위치
                 * @param  {Number} _y         		시리즈가 그려질 Y위치
                 * @param  {Number} _w         		시리즈가 그려질 넓이
                 * @param  {Number} _h        		시리즈가 그려질 높이
                 * @param  {Array} _data      		차트데이터
                 * @param  {Array} _yAxis     		Y축 값 데이터 배열
                 * @param  {Number} _prev_data 		base, before 폼계열에서 사용하는 값으로 전일비교금액이 있을때 사용
                 * @return null
                 */
                self.init = function(_x, _y, _w, _h, _data, _yAxis, _prev_data){
                    yAxisMax = _yAxis[_yAxis.length - 1];
                    yAxisMin = _yAxis[0];
                    yAxisGap = yAxisMax - yAxisMin;
                    GRAPH_TOP = _y;
                    GRAPH_LEFT = _x;
                    GRAPH_WIDTH = _w;
                    GRAPH_HEIGHT = _h;

                    thisSeriesStyles = $.extend(true, {}, defaultStyles, _styles.series[_serieskey]);
                    _styles.series[_serieskey] = thisSeriesStyles;

                    self.elementNodes = [];

                    parse(_data, _yAxis);
                };

                /**
                 * 시리즈의 아이템별 위치, 크기 등을 구하고 그리는 함수
                 * @param  {Array} _data      차트데이터
                 * @param  {Array} _yAxis     Y축 값 데이터 배열
                 * @return null
                 */
                var parse = function(_data, _yAxis){
                    var useminaxis = series.hasOwnProperty('minaxis'),
                        useupdownminaxis = (useminaxis && series.form === 'updown_minaxis') ? true : false;

                    thisData = _data;
                    var data = thisData.data, count = data.length;
                    for(var start = 0, len = data.length; start < len; start++){
                        if(data[start].yaxis != null) break;
                    }
                    for(var last = data.length - 1; last >= 0; last--){
                        if(data[last].yaxis != null) break;
                    }
                    // count = last + 1;

                    var BASE = (useupdownminaxis) ? Math.min(data[start].yaxis, data[start].minaxis) : thisData.base;

                    if((!options.use.multiYAxis && thisStyles.yAxis.baseAtZero) || (options.use.multiYAxis && thisSeriesStyles.yAxis.baseAtZero) || series.form === 'updown') {
                        BASE = 0;
                    }

                    var startY = GRAPH_TOP + thisStyles.graph.paddingTop, graphheight = GRAPH_HEIGHT - thisStyles.graph.paddingTop - thisStyles.graph.paddingBottom;
                    var baseLine = 0;

                    if(/updown$|updown_stack|updown_bullet|updown_overlap/i.test(series.form) === false) {
                        baseLine = GRAPH_HEIGHT + GRAPH_TOP;
                    } else {
                        baseLine = Math.round((graphheight) * (yAxisMax - BASE) / yAxisGap) + GRAPH_TOP + thisStyles.graph.paddingTop;
                    }

                    var xGap = (GRAPH_WIDTH - thisStyles.graph.paddingLeft - thisStyles.graph.paddingRight) / count, xGapHalf = xGap / 2;
                    var startX = GRAPH_LEFT + thisStyles.graph.paddingLeft;

                    if(thisStyles.xAxis.baseAtStart) {
                        xGapHalf = 0;
                        xGap = (GRAPH_WIDTH - thisStyles.graph.paddingLeft - thisStyles.graph.paddingRight) / (count - 1);
                        // xGap = (xGap * count + xGap) / count;
                    }


                    var value, rect = {};
                    var tickArr = [];

                    for(var start = 0, len = data.length; start < len; start++){
                        if(data[start].yaxis != null) break;
                    }
                    for(var last = data.length - 1; last >= 0; last--){
                        if(data[last].yaxis != null) break;
                    }

                    var stopCount = (options.timeSlice.use && options.timeSlice.status == 'start') ? options.timeSlice.timePlayIndex + 1 : count;


                    for(var i = start; i < count; i++){
                        value = data[i];
                        rect = {};
                        if($.trim(value.xaxis) == '' && $.trim(value.yaxis) == '') {

                        } else {
                            if(!useminaxis){
                                if(value.yaxis > BASE) 		value.comp = 'up';
                                else if(value.yaxis < BASE) value.comp = 'down';
                                else 						value.comp = 'flat';
                            } else {
                                if(value.yaxis > value.minaxis) 		value.comp = 'up';
                                else if(value.yaxis < value.minaxis) 	value.comp = 'down';
                                else 									value.comp = 'flat';
                            }
                            rect.x = Math.round((xGap * i))  + startX + xGapHalf;
                            rect.width = xGap;

                            if(/updown$|updown_stack|updown_bullet|updown_overlap/i.test(series.form) === false) {
                                rect.y = Math.round((graphheight) * (yAxisMax - value.yaxis) / yAxisGap) + startY;
                                if(!useminaxis){
                                    rect.height = (GRAPH_HEIGHT + GRAPH_TOP);
                                } else {
                                    rect.height = Math.round((graphheight) * (yAxisMax - value.minaxis) / yAxisGap) + startY;
                                }
                            } else {
                                rect.y = Math.round((graphheight) * (yAxisMax - value.yaxis) / yAxisGap) + startY;
                                rect.height = Math.round((graphheight) * (yAxisMax - BASE) / yAxisGap) + startY;
                            }
                            rect.mx = Math.round((xGap * i))  + startX, rect.mw = xGap; // 증권차트에서 마우스 이벤트 Info 용
                        }

                        value['shape'] = rect;
                    }

                    var fsStyles = getStyles('area', thisSeriesStyles, data[start].shape.width, count);

                    var areaStyle = {
                        'fill': fsStyles.fillcolor,
                        'stroke-width': 0,
                        'stroke': undefined,
                        'fill-opacity': 1
                    };
                    var lineStyle = {
                        'stroke': fsStyles.strokecolor,
                        'stroke-width': fsStyles.strokewidth,
                        'stroke-opacity': fsStyles.strokealpha
                    };

                    if(series.form !== 'updown' && series.form !== 'updown_minaxis'){ // 기본형
                        var areaPath = "";
                        var linePath = "";
                        var linePathMin = "";

                        var areaGroup = paper.set();
                        var areaPosControl1 = 0, areaPosControl2 = 0;
                        if(series.form !== 'step') {
                            var getPath = function(_type, _start, _end, _min){
                                if(_type === 'area'){
                                    areaPath = "";
                                    for(var i = _start; i <= _end; i++){

                                        value = data[i].shape;

                                        if(i == _start) {
                                            areaPath += (Math.ceil(value.x) - areaPosControl1) + ',' + value.height + 'L';
                                        } else {
                                            areaPath += (Math.ceil(value.x) + areaPosControl2) + ',' + value.height + 'L';
                                        }
                                    }
                                    for(var i = _end; i >= _start; i--){

                                        value = data[i].shape;

                                        if(i == _end) {
                                            areaPath += (Math.ceil(value.x) + areaPosControl2) + ',' + value.y;
                                        } else {
                                            areaPath += (Math.ceil(value.x) - areaPosControl1) + ',' + value.y;
                                        }
                                        if(i > _start) {
                                            areaPath += 'L';
                                        }
                                    }
                                    return areaPath;
                                } else {
                                    for(var i = _start; i < _end; i++){

                                        value = data[i];

                                        if(_min == undefined){
                                            linePath += getPathString(value['shape'], (data[i + 1]).shape);
                                        } else {
                                            linePathMin += getPathString(value['shape'], (data[i + 1]).shape, _min);
                                        }
                                    }
                                    if(_min == undefined) {
                                        return linePath;
                                    }
                                    return linePathMin;
                                }
                            };
                            var animation = function(_area, _rect, _rect_min, _start, _end, _min){
                                var fshape = (data[_start]).shape, lshape = (data[_end]).shape;
                                var linepath = getPath('line', _start, _end);
                                var areapath = getPath('area', _start, _end, _min);
                                var minpath = getPath('line', _start, _end, _min);

                                areapath = "M"+areapath;
                                area = paper.path("M" + fshape.x + " " + fshape.height + ' L' + fshape.x + ' ' + fshape.height + ' L' + fshape.x + ' ' + fshape.y + ' L' + fshape.x + ' ' + fshape.y).attr(areaStyle);
                                areaGroup.push(area);

                                if(fsStyles.fillcolor.indexOf('url') <= -1) {

                                    drawFillRectangleAlpha(TYPE, area, fsStyles.fillalpha);
                                }

                                area.stop().animate({path: areapath}, options.animate.speed, options.animate.type, function(){

                                    if(_end < count-1 && stopCount > _end){
                                        ++_start;
                                        _end = _start + 1;

                                        animation(_area, _rect, _rect_min, _start, _end, _min);
                                    } else {
                                        var allPath = getPath('area', start, count - 1);
                                        var area = areaGroup.splice(0, 1);
                                        areaGroup.remove();

                                        areaStyle.path = 'M' + allPath;

                                        area.attr(areaStyle);

                                        if(fsStyles.fillcolor.indexOf('url') <= -1) {

                                            drawFillRectangleAlpha(TYPE, area, fsStyles.fillalpha);
                                        }

                                        elementGroup.unshift(area);

                                        if(String(thisSeriesStyles.tick.style) != "null"){

                                            for(var i = count; i--;){

                                                tickArr.unshift(drawTick(data, i, undefined, thisSeriesStyles, options));
                                            }

                                            elementGroup.unshift(paper.set(tickArr));

                                            self.elementNodes = tickArr.reverse();
                                        }

                                        bindEvent(area, rect, rect_min, tickArr, start);
                                    }
                                });

                                if(_rect != null) {
                                    _rect.stop().animate({path: linepath}, options.animate.speed, options.animate.type);
                                }

                                if(_rect_min != null) {
                                    _rect_min.stop().animate({path: minpath}, options.animate.speed, options.animate.type);
                                }

                                area.insertBefore(rect);
                            };
                            var rect = null, rect_min = null, area = null;
                            if(options.use.animate && TYPE !== "VML" && isTimeSliceAnimate != false){

                                if(data[start+1] == undefined) {
                                    return;
                                }
                                areaGroup.remove();

                                var firstShape = data[start+1].shape, secondShape = data[start].shape;

                                area = paper.path("M" + secondShape.x + " " + secondShape.height + ' L' + secondShape.x + ' ' + secondShape.y).attr(areaStyle);

                                if(fsStyles.fillcolor.indexOf('url') <= -1) {

                                    drawFillRectangleAlpha(TYPE, area, fsStyles.fillalpha);
                                }
                                areaGroup.push(area);
                                elementGroup.unshift(areaGroup);

                                rect = paper.path("M"+secondShape.x + " " + secondShape.y).attr(lineStyle);
                                elementGroup.unshift(rect);
                                var isMinAxis = '';
                                if(useminaxis){
                                    isMinAxis = 'min';
                                    rect_min = paper.path("M"+secondShape.x + " " + secondShape.height).attr(lineStyle);
                                    elementGroup.unshift(rect_min);
                                }
                                animation(area, rect, rect_min, start, start+1, isMinAxis);
                            } else {
                                if(area != null) {
                                    area.stop();
                                }
                                var stopIndex = count;

                                if(stopIndex <= 1 || isTimeSliceAnimate && TYPE === 'SVG') return;

                                var firstShape = data[start].shape, lshape = (data[stopIndex-1]).shape;
                                // AREA
                                var path = "M"+firstShape.x + "," + firstShape.y + 'L' + getPath('area', start, stopIndex-1);

                                area = paper.path(path).attr(areaStyle);

                                elementGroup.unshift(area);

                                if(fsStyles.fillcolor.indexOf('url') <= -1) {

                                    drawFillRectangleAlpha(TYPE, area, fsStyles.fillalpha);
                                }
                                // LINE
                                if(fsStyles.strokewidth > 0){

                                    path = getPath('line', start, stopIndex-1);
                                    rect = paper.path(path).attr(lineStyle);
                                    elementGroup.unshift(rect);

                                    if(useminaxis){
                                        path = getPath('line', start, stopIndex-1, 'min');
                                        rect_min = paper.path(path).attr(lineStyle);
                                        elementGroup.unshift(rect_min);
                                    }
                                }
                                if(String(thisSeriesStyles.tick.style) != "null"){

                                    for(var i = count; i--;){
                                        tickArr.unshift(drawTick(data, i, undefined, thisSeriesStyles, options));
                                    }

                                    elementGroup.push(paper.set(tickArr));
                                    self.elementNodes = tickArr.reverse();
                                }
                                bindEvent(area, rect, rect_min, tickArr, start);
                            }
                        } else {
                            // form: step
                            var getPath = function(_type, _start, _end, _min, step){
                                if(_type === 'area'){
                                    areaPath = "";

                                    // 하단
                                    for(var i = _start; i <= _end; i++){
                                        value = data[i].shape;
                                        if(i == _start) {
                                            areaPath += (Math.ceil(value.x) - areaPosControl1) + ',' + value.height + 'L';
                                        } else {
                                            areaPath += (Math.ceil(value.x) + areaPosControl2) + ',' + value.height + 'L';
                                        }
                                    }
                                    // 상단
                                    for(var i = _end; i >= _start; i--){
                                        value = data[i].shape;
                                        if(i == _end) 	{
                                            areaPath += (Math.ceil(value.x) + areaPosControl2) + ',' + value.y;
                                            areaPath += 'L'+ (Math.ceil(value.x) + areaPosControl2) + ',' + data[i - 1].shape.y;
                                        } else {
                                            areaPath += (Math.ceil(value.x) - areaPosControl1) + ',' + value.y;
                                            if(i > _start) areaPath += 'L'+ (Math.ceil(value.x) + areaPosControl2) + ',' + data[i - 1].shape.y;
                                        }
                                        if(i > _start) areaPath += 'L';
                                    }
                                    return areaPath;
                                } else {
                                    for(var i = _start; i < _end; i++){
                                        value = data[i];
                                        if(_min == undefined){
                                            linePath += getPathStepString('first', value['shape'], (data[i + 1]).shape);
                                            linePath += getPathStepString('second', value['shape'], (data[i + 1]).shape);
                                        } else {
                                            linePathMin += getPathString(value['shape'], (data[i + 1]).shape, _min);
                                        }
                                    }
                                    if(_min == undefined) return linePath;
                                    else return linePathMin;
                                }
                            };
                            var step = 2;
                            var animation = function(_area, _rect, _rect_min, _start, _end, _min){
                                var fshape = (data[_start]).shape, lshape = (data[_end]).shape;
                                var linepath = getPath('line', _start, _end);
                                var areapath = getPath('area', _start, _end, _min);
                                var minpath = getPath('line', _start, _end, _min);

                                areapath = "M"+areapath;
                                area = paper.path("M" + fshape.x + " " + fshape.height + ' L' + fshape.x + ' ' + fshape.height + ' L' + fshape.x + ' ' + fshape.y + ' L' + fshape.x + ' ' + fshape.y).attr(areaStyle);
                                areaGroup.push(area);

                                if(fsStyles.fillcolor.indexOf('url') <= -1) {
                                    drawFillRectangleAlpha(TYPE, area, fsStyles.fillalpha);
                                }

                                area.stop().animate({path: areapath}, options.animate.speed, options.animate.type, function(){
                                    if(_end < count-1 && stopCount > _end){
                                        ++_start;
                                        _end = _start + 1;

                                        animation(_area, _rect, _rect_min, _start, _end, _min);
                                    } else {
                                        var allPath = getPath('area', start, count - 1);
                                        var area = areaGroup.splice(0, 1);
                                        areaGroup.remove();

                                        areaStyle.path = 'M' + allPath;
                                        area.attr(areaStyle);
                                        if(fsStyles.fillcolor.indexOf('url') <= -1) drawFillRectangleAlpha(TYPE, area, fsStyles.fillalpha);

                                        elementGroup.unshift(area);

                                        if(String(thisSeriesStyles.tick.style) != "null"){
                                            for(var i = count; i--;){
                                                tickArr.unshift(drawTick(data, i, undefined, thisSeriesStyles, options));
                                            }
                                            elementGroup.unshift(paper.set(tickArr));
                                            self.elementNodes = tickArr.reverse();
                                        }

                                        bindEvent(area, rect, rect_min, tickArr, start);
                                    }
                                });
                                if(_rect != null) _rect.stop().animate({path: linepath}, options.animate.speed, options.animate.type);
                                if(_rect_min != null) _rect_min.stop().animate({path: minpath}, options.animate.speed, options.animate.type);
                                area.insertBefore(rect);
                            };

                            var rect = null, rect_min = null, area = null;
                            if(options.use.animate && TYPE !== "VML" && isTimeSliceAnimate != false){
                                if(data[start+1] == undefined) {
                                    return;
                                }
                                areaGroup.remove();

                                var firstShape = data[start+1].shape, secondShape = data[start].shape;

                                area = paper.path("M" + secondShape.x + " " + secondShape.height + ' L' + secondShape.x + ' ' + secondShape.y).attr(areaStyle);

                                if(fsStyles.fillcolor.indexOf('url') <= -1) {
                                    drawFillRectangleAlpha(TYPE, area, fsStyles.fillalpha);
                                }

                                areaGroup.push(area);
                                elementGroup.unshift(areaGroup);

                                rect = paper.path("M"+secondShape.x + " " + secondShape.y).attr(lineStyle);
                                elementGroup.unshift(rect);

                                var isMinAxis = '';
                                if(useminaxis){
                                    isMinAxis = 'min';
                                    rect_min = paper.path("M"+secondShape.x + " " + secondShape.height).attr(lineStyle);
                                    elementGroup.unshift(rect_min);
                                }
                                animation(area, rect, rect_min, start, start+1, isMinAxis);
                            } else {
                                if(area != null) area.stop();
                                var stopIndex = count;

                                if(stopIndex <= 1 || isTimeSliceAnimate && TYPE === 'SVG') return;

                                var firstShape = data[start].shape, lshape = (data[stopIndex-1]).shape;
                                // AREA
                                var path = "M"+firstShape.x + "," + firstShape.y + 'L' + getPath('area', start, stopIndex-1);

                                area = paper.path(path).attr(areaStyle);
                                elementGroup.unshift(area);

                                if(fsStyles.fillcolor.indexOf('url') <= -1)
                                    drawFillRectangleAlpha(TYPE, area, fsStyles.fillalpha);
                                // LINE
                                if(fsStyles.strokewidth > 0){
                                    path = getPath('line', start, stopIndex-1);
                                    rect = paper.path(path).attr(lineStyle);
                                    elementGroup.unshift(rect);
                                    if(useminaxis){
                                        path = getPath('line', start, stopIndex-1, 'min');
                                        rect_min = paper.path(path).attr(lineStyle);
                                        elementGroup.unshift(rect_min);
                                    }
                                }
                                if(String(thisSeriesStyles.tick.style) != "null"){
                                    for(var i = count; i--;){
                                        tickArr.unshift(drawTick(data, i, undefined, thisSeriesStyles, options));
                                    }
                                    elementGroup.push(paper.set(tickArr));
                                    self.elementNodes = tickArr.reverse();
                                }
                                bindEvent(area, rect, rect_min, tickArr, start);


                            }
                        }

                    } else {

                        // Updown, Updown_minaxis
                        var lineGroup = [];
                        var item = null;
                        var areaGroup = [];
                        var area = null;
                        var minGroup = [];
                        var minItem = null;
                        var prevData;
                        var path = "";
                        var aPath = '';
                        var mPath = '';
                        var shape = {};
                        var tickArr = [];

                        var getUD = function(_idx, _prevClose){
                            var ud = '';
                            for(var i = _idx; i < count; i++){
                                if(_prevClose == data[i].yaxis) {
                                    // 데이터가 같은 경우 0보다 클때 up부터 시작
                                    // 2016.03.02 평다진
                                    if(data[i].yaxis > 0) {
                                        ud = 'up';
                                    } else if(data[i].yaxis < 0) {
                                        ud = 'down';
                                    }
                                } else if(data[i].yaxis == null || data[i].yaxis == "null") {

                                } else if(_prevClose < data[i].yaxis) {
                                    ud = 'up';
                                    break;
                                } else if(_prevClose > data[i].yaxis) {
                                    ud = 'down';
                                    break;
                                }
                            }
                            if(ud == '') ud = 'flat';

                            return ud;
                        };
                        var prevClose = BASE;
                        var ud = '';
                        if(!useupdownminaxis){
                            ud = getUD(start, prevClose);
                        } else {
                            ud = Number(data[start].yaxis) > Number(data[start].minaxis) ? "up": "down";
                        }

                        var lineStyle = {
                            'stroke': fsStyles[ud+'strokecolor'],
                            'stroke-width': fsStyles[ud+'strokewidth'],
                            'stroke-opacity': fsStyles[ud+'strokealpha']
                        };
                        var areaStyle = {
                            'fill': fsStyles[ud+'fillcolor'],
                            'fill-opacity': fsStyles[ud+'fillalpha'],
                            'stroke-width': 0,
                            'stroke': undefined
                        };
                        var firstPoint = 0;
                        for(var i = start; i < count; i++){
                            value = data[i], shape = value.shape;
                            if(i == start) {
                                path = "M"+ shape.x  + " " +  shape.y,
                                    aPath = "M"+ shape.x  + " " +  (shape.height) + ' L' + shape.x  + " " +  shape.y;
                                if(useupdownminaxis) mPath = "M"+ shape.x  + " " +  shape.height;
                            } else if(i > start) {
                                prevData = data[i - 1];
                                if(useupdownminaxis) prevClose = prevData.minaxis;
                            }
                            var isTrue = false;
                            if(useupdownminaxis && i > start &&
                                ((prevData.yaxis > prevData.minaxis && value.yaxis <= value.minaxis) || (prevData.yaxis < prevData.minaxis && value.yaxis >= value.minaxis))){
                                isTrue = true;
                            } else if(!useupdownminaxis && i > start &&
                                (prevData.yaxis < prevClose && value.yaxis >= prevClose || prevData.yaxis > prevClose && value.yaxis <= prevClose)) {
                                isTrue = true;
                            }
                            if(isTrue){
                                var cross = null;
                                if(!useupdownminaxis) {
                                    cross = getCrossPoint({x: prevData.shape.x, y: prevData.shape.y}, {x: shape.x, y: shape.y}, baseLine);
                                } else {
                                    cross = getPolyPoint(prevData.shape, shape, ud);
                                }
                                if(cross != null && !isNaN(cross.x) && !isNaN(cross.y)) {
                                    path += " L"+cross.x + " " + cross.y;
                                    aPath += " L"+cross.x + " " + cross.y;

                                    for(var j = i; j >= firstPoint; j--){
                                        var d = data[j], s = d.shape;
                                        aPath += " L"+s.x + " " + s.height;
                                    }

                                    area = paper.path(aPath).attr(areaStyle);
                                    item = paper.path(path).attr(lineStyle);

                                    area['data'] = {'updown': ud};
                                    areaGroup.push(area);
                                    lineGroup.push(item);
                                    if(useupdownminaxis) {
                                        mPath += " L"+cross.x + " " + cross.y;
                                        minItem = paper.path(mPath).attr(lineStyle);
                                        minGroup.push(minItem);
                                    }

                                    firstPoint = i;

                                    ud = getUD(i, !useupdownminaxis ? prevClose : value.minaxis);

                                    lineStyle.stroke 			= fsStyles[ud+'strokecolor'];
                                    lineStyle['stroke-width'] 	= fsStyles[ud+'strokewidth'];
                                    lineStyle['stroke-opacity'] = fsStyles[ud+'strokealpha'];

                                    areaStyle.fill 				= fsStyles[ud+'fillcolor'];
                                    areaStyle['fill-opacity'] 	= fsStyles[ud+'fillalpha'];

                                    path = "M"+cross.x + " " + cross.y;
                                    aPath = "M"+cross.x + " " + cross.y;
                                    if(useupdownminaxis) mPath = "M"+cross.x + " " + cross.y;
                                }
                                path += " L"+shape.x + " " + shape.y;
                                aPath +=" L"+shape.x + " " + shape.y;
                                if(useupdownminaxis) mPath += " L"+shape.x + " " + shape.height;
                            } else {
                                if(i > start && prevClose == value.yaxis && i < count - 1 && value.yaxis != data[i+1].yaxis){

                                    path += "L"+shape.x + " " + shape.y;
                                    aPath += "L"+shape.x + " " + shape.y;

                                    for(var j = i; j >= firstPoint; j--){
                                        var d = data[j], s = d.shape;
                                        if(d.yaxis != null)
                                            aPath += "L"+s.x + " " + s.height;
                                    }

                                    area = paper.path(aPath).attr(areaStyle);
                                    item = paper.path(path).attr(lineStyle);
                                    area['data'] = {updown: ud};
                                    areaGroup.push(area);
                                    lineGroup.push(item);
                                    if(useupdownminaxis) {
                                        mPath += "L"+shape.x + " " + shape.height;
                                        minItem = paper.path(mPath).attr(lineStyle);
                                        minGroup.push(minItem);
                                    }

                                    firstPoint = i;

                                    ud = getUD(i, prevClose);

                                    lineStyle.stroke 			= fsStyles[ud+'strokecolor'];
                                    lineStyle['stroke-width'] 	= fsStyles[ud+'strokewidth'];
                                    lineStyle['stroke-opacity'] = fsStyles[ud+'strokealpha'];

                                    areaStyle.fill 				= fsStyles[ud+'fillcolor'];
                                    areaStyle['fill-opacity'] 	= fsStyles[ud+'fillalpha'];

                                    path = "M"+shape.x + " " + shape.y;
                                    aPath = "M"+shape.x + " " + shape.y;
                                    if(useupdownminaxis) mPath = "M"+shape.x + " " + shape.height;
                                } else {
                                    path += "L"+shape.x + " " + shape.y;
                                    aPath += "L"+shape.x + " " + shape.y;
                                    if(useupdownminaxis) mPath += "L"+shape.x + " " + shape.height;
                                }
                            }
                            if( i == count - 1){
                                var temp = path.split('L');
                                var x = temp[temp.length - 1].split(' ')[0], y = temp[0].split(' ')[1];
                                aPath = aPath+ ' L' + x + ' ' + y;
                                for(var j = i; j >= firstPoint; j--){
                                    var d = data[j], s = d.shape;
                                    aPath += "L"+s.x + " " + s.height;
                                }
                                area = paper.path(aPath).attr(areaStyle);
                                // area = paper.path(aPath+ ' L' + x + ' ' + y).attr(areaStyle);

                                item = paper.path(path).attr(lineStyle);
                                area['data'] = {updown: ud};
                                areaGroup.push(area);
                                lineGroup.push(item);

                                lineGroup = paper.set(lineGroup).attr({opacity: 0});
                                areaGroup = paper.set(areaGroup).attr({opacity: 0});

                                elementGroup.unshift(lineGroup);
                                elementGroup.unshift(areaGroup);
                                if(useupdownminaxis) {
                                    minItem = paper.path(mPath).attr(lineStyle);
                                    minGroup.push(minItem);
                                    minGroup = paper.set(minGroup).attr({opacity: 0});
                                    elementGroup.unshift(minGroup);
                                }

                            }
                        }
                        if(thisSeriesStyles.line.base.width > 0 && series.form !== 'updown_minaxis') {
                            var line = getLine(TYPE, GRAPH_LEFT, baseLine, GRAPH_WIDTH + GRAPH_LEFT, baseLine);
                            var item = paper.path("M"+line.x1 + ' ' + line.y1 + ' L' + line.x2 + ' ' + line.y2).attr({
                                'stroke': thisSeriesStyles.line.base.color, 'stroke-width': thisSeriesStyles.line.base.width, 'stroke-opacity': thisSeriesStyles.line.base.opacity
                            });
                            elementGroup.unshift(item);
                        }
                        if(String(thisSeriesStyles.tick.style) != "null"){

                            var tickGroup = [];
                            for(var i = start; i < count; i++){
                                value = data[i], shape = value.shape;
                                var tick = null;
                                if(i == start) {
                                    tick = drawTick(data, i, value.comp, thisSeriesStyles, options, _serieskey);
                                } else if(i > start) {
                                    prevData = data[i - 1];
                                }
                                if(i > start && (prevData.yaxis < prevClose && value.yaxis >= prevClose || prevData.yaxis > prevClose && value.yaxis <= prevClose)){
                                    var cross = getCrossPoint({x: prevData.shape.x, y: prevData.shape.y}, {x: shape.x, y: shape.y}, baseLine);
                                    tick = drawTick(data, i, value.comp, thisSeriesStyles, options, _serieskey);
                                } else {
                                    if(i > start && prevClose == value.yaxis && i < count - 1 && value.yaxis != data[i+1].yaxis){
                                        tick = drawTick(data, i, value.comp, thisSeriesStyles, options, _serieskey);
                                    } else {
                                        if(i > start) {
                                            tick = drawTick(data, i, value.comp, thisSeriesStyles, options, _serieskey);
                                        }
                                    }
                                }
                                elementGroup.unshift(tick);
                                if(tick != null) tickGroup.push(tick);
                            }
                            if(options.use.animate && TYPE !== "VML")
                                paper.set(tickGroup)
                                    .attr({'opacity': 0})
                                    .animate({'opacity': 1}, options.animate.speed, options.animate.type);

                            self.elementNodes = tickGroup.reverse();
                        }

                        areaGroup.unhover().unmousemove();
                        areaGroup.hover(function(_e){
                            mouseOverSeriesKey = _serieskey;
                            if(options.use.selectItem){
                                for(var i = areaGroup.items.length; i--;){
                                    var thisItem = areaGroup[i];
                                    var ud = thisItem.data.updown;

                                    if(fsStyles['over'+ud + 'fillcolor'].indexOf('url') <= -1){

                                        thisItem.animate({
                                            fill: getFillStyle(5, fsStyles['over'+ud + 'fillcolor'], fsStyles.gradientdirection, count, 'over', 'area')
                                        }, 0);
                                        drawFillRectangleAlpha(thisItem, thisItem, fsStyles['over'+ud + 'fillalpha']);
                                    } else {
                                        thisItem.animate({
                                            fill: getFillStyle(5, fsStyles['over'+ud + 'fillcolor'], fsStyles.gradientdirection, count, 'over', 'area')
                                        }, 0);
                                    }
                                }
                            }

                        }, function(){
                            if(options.use.selectItem){
                                for(var i = areaGroup.items.length; i--;){
                                    var thisItem = areaGroup[i];

                                    if(fsStyles[thisItem.data.updown + 'fillcolor'].indexOf('url') <= -1){

                                        thisItem.animate({
                                            fill: getFillStyle(5, fsStyles[thisItem.data.updown + 'fillcolor'], fsStyles.gradientdirection, count, 'over', 'area')
                                        }, 0);
                                        drawFillRectangleAlpha(thisItem, thisItem, fsStyles[thisItem.data.updown + 'fillalpha']);
                                    } else {
                                        thisItem.animate({
                                            fill: getFillStyle(5, fsStyles[thisItem.data.updown + 'fillcolor'], fsStyles.gradientdirection, count, 'over', 'area'),
                                            'fill-opacity': 1,
                                            'opacity': 1
                                        }, 0);
                                    }
                                }
                            }
                        });
                        var first = data[start], second = data[start+1];
                        var firstShape = first.shape, secondShape = second.shape;
                        var fsHalfGap = (secondShape.x - firstShape.x) / 2;

                        areaGroup.mousemove(function(_e){

                            var mouse = getMousePosition(_e);

                            var graphTop = styles.main.layout._graphtop;
                            var graphHeight = graphTop;
                            var lastSeriesKey = '';

                            for(var i in styles) {
                                lastSeriesKey = i;
                            }
                            for(i in styles) {
                                var tLayout = styles[i].layout;

                                if(i === lastSeriesKey) {
                                    if(i === 'main') {
                                        graphHeight = graphHeight + tLayout._graphheightpx;
                                    } else {

                                        graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                    }
                                    break;
                                }
                            }

                            if(options.use.magnet != true) {

                                moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                                    mouse,
                                    vCross, hCross,
                                    {},
                                    options.use.magnet);
                            }


                            for(var i = data.length; i--;){
                                first = data[i], firstShape = first.shape, comp = data[i].comp;

                                if(mouse.x > firstShape.x - fsHalfGap && mouse.x < firstShape.x + fsHalfGap){

                                    var y = firstShape.y;

                                    if(series.form == "updown_minaxis" && comp == "down") {
                                        y = firstShape.height;
                                    }

                                    if(options.use.magnet){

                                        moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                                            mouse,
                                            vCross, hCross,
                                            {x: Math.round(first.shape.x) - 1, y: Math.round(y) - 2},
                                            options.use.magnet);
                                    }

                                    if(thisSeriesStyles.tick.overStyle != null && thisSeriesStyles.tick.style == null) {

                                        bindMouseMoveTick(data, first);
                                    } else if(thisSeriesStyles.tick.style != null) {

                                        background[KEY].background.trigger("mousemove", background[KEY].background);

                                    }
                                    if(options.use.tip && _e.isItemOver != false){
                                        showToolTip(options.func.tip, first, firstShape.x, y, series);
                                    }
                                    break;
                                }
                            }

                        });

                        if(TOUCHDEVICE) {

                        }
                        if(options.use.animate && TYPE !== "VML"){
                            areaGroup.animate({'opacity': 1}, options.animate.speed, options.animate.type);
                            lineGroup.animate({'opacity': 1}, options.animate.speed, options.animate.type);

                            if(useupdownminaxis) {
                                minGroup.animate({'opacity': 1}, options.animate.speed, options.animate.type);
                            }
                        } else {
                            areaGroup.attr({'opacity': 1});
                            lineGroup.attr({'opacity': 1});
                            if(useupdownminaxis) {
                                minGroup.attr({'opacity': 1});
                            }
                        }
                    }
                };

                var timeSliceBack = null, timeSliceXGrid = null, timeSliceYGrid = null;
                var timeSliceXGridPath = [], timeSlideXGridLength = 0;
                var timeSliceYGridPath = [], timeSlideYGridLength = 0;
                var timeSliceYGridTop = null, timeSliceYGridBottom = null;
                var timeSliceYGridTopPath = [], timeSliceYGridBottomPath = 0;
                var isTimeSliceAnimate = options.use.animate;
                var timeSliceBackWidth = 0;
                /**
                 * 시리즈 그리기 : 시계열 사용시
                 * @param  {Number} _index    시리즈가 그려질 시작(Y) 위치
                 * @param  {Number} _stopIndex 그려지는 아이템의 개수
                 *                             시계열에서 조정에 따라 개수가 달라질수 있음.
                 * @return null
                 */
                self.drawTimeSlice = function(_index, _stopIndex){

                    if(options.timeSlice.status === 'stop'){
                        if(timeSliceBack != null){
                            timeSliceBack.remove();
                            timeSliceBack = null;
                        }
                        if(timeSliceXGrid != null){
                            timeSliceXGrid.remove();
                            timeSliceXGrid = null;
                        }
                        if(timeSliceYGrid != null){
                            timeSliceYGrid.remove();
                            timeSliceYGrid = null;
                        }

                        if(timeSliceYGridTop != null){
                            timeSliceYGridTop.remove();
                            timeSliceYGridTop = null;
                        }
                        if(timeSliceYGridBottom != null){
                            timeSliceYGridBottom.remove();
                            timeSliceYGridBottom = null;
                        }

                        return;
                    }
                    var data = thisData.data, count = data.length;
                    if(timeSliceBack == null){
                        isTimeSliceAnimate = false;
                        parse(thisData);

                        timeSliceBack = background[KEY].getBackground().clone();
                        if(timeSliceBack.attr('opacity') == 0) timeSliceBack.attr('opacity', 1);


                        var rect = timeSliceBack.getBBox();
                        timeSliceBackWidth = rect.width;//data[count - 1].shape.x - data[0].shape.x;
                        timeSliceBack.attr({
                            x: rect.x,
                            y: rect.y + 1,
                            width: timeSliceBackWidth + 1,
                            height: rect.height + thisStyles.xAxis.paddingTop
                        });

                        timeSliceXGrid = xAxisLines[KEY].clone();
                        timeSliceYGrid = yAxisLines[KEY].clone();

                        timeSliceBack.toFront();
                        timeSliceXGrid.toFront();
                        timeSliceYGrid.toFront();

                        timeSliceXGridPath = timeSliceXGrid.attr('path');
                        timeSliceYGridPath = timeSliceYGrid.attr('path');


                        timeSliceYGrid.attr({'path': timeSliceYGridPath});
                        timeSliceXGrid.attr({'path': timeSliceXGridPath});

                        if(background[KEY].borders.hasOwnProperty('top')){
                            timeSliceYGridTop = background[KEY].borders.top.clone();
                            timeSliceYGridTop.toFront();
                            timeSliceYGridTopPath = timeSliceYGridTop.attr('path');
                            timeSliceYGridTop.attr({'path': timeSliceYGridTopPath});
                        }
                        if(background[KEY].borders.hasOwnProperty('bottom')){
                            timeSliceYGridBottom = background[KEY].borders.bottom.clone();
                            timeSliceYGridBottom.toFront();
                            timeSliceYGridBottomPath = timeSliceYGridBottom.attr('path');
                            timeSliceYGridBottom.attr({'path': timeSliceYGridBottomPath});
                        }
                        if(TYPE !== 'SVG'){
                            var splitPath = String(timeSliceXGridPath).split('M');
                            var splitPathArray = [];
                            for(i = 0; i < splitPath.length; i ++) {
                                if(splitPath[i] == "") continue;
                                var temp = splitPath[i].split(',');

                                splitPathArray.push(["M", Number(temp[0]), Number(temp[1])]);
                                splitPathArray.push(["L", Number(temp[2]), Number(temp[3])]);
                            }

                            timeSliceXGridPath = splitPathArray;
                        }
                    }

                    var firstShape = null, secondShape = data[_index].shape;

                    if(_index > 0){
                        firstShape = data[_index - 1].shape;
                    } else {
                        firstShape = {x: secondShape.x - (data[_index + 1].shape.x - secondShape.x)};
                    }

                    for(var i = timeSliceYGridPath.length; i--;){
                        if(i % 2 == 0){
                            var path = timeSliceYGridPath[i];
                            path[1] = secondShape.x;
                            timeSliceYGridPath[i] = path;

                        }
                    }
                    if(timeSliceYGridTop != null){
                        (timeSliceYGridTopPath[0])[1] = secondShape.x;
                        timeSliceYGridTop.animate({path: timeSliceYGridTopPath}, options.timeSlice.delay, 'linear');
                    }
                    if(timeSliceYGridBottom != null){
                        (timeSliceYGridBottomPath[0])[1] = secondShape.x;
                        timeSliceYGridBottom.animate({path: timeSliceYGridBottomPath}, options.timeSlice.delay, 'linear');
                    }


                    timeSliceYGrid.animate({path: timeSliceYGridPath}, options.timeSlice.delay, 'linear');

                    timeSliceBackWidth = timeSliceBackWidth - (secondShape.x - firstShape.x) + 1;
                    timeSliceBack.animate({x: secondShape.x, width: timeSliceBackWidth }, options.timeSlice.delay, 'linear', function(){
                        if(_index < data.length && timeSliceXGridPath.length > 0){

                            var timeSliceXGridPathClone = $.extend([], timeSliceXGridPath);

                            var xGridPath = Math.floor((timeSliceXGridPathClone.splice(0, 1)[0])[1]);

                            if(Math.floor(firstShape.x) < xGridPath && Math.floor(secondShape.x) >= xGridPath){

                                timeSliceXGridPath.splice(0, 2);

                                if(timeSliceXGridPath.length > 0)
                                    timeSliceXGrid.attr({'path': timeSliceXGridPath});
                                else
                                    timeSliceXGrid.attr({opacity: 0});
                            }
                        }
                        if(_index == data.length - 1){
                            timeSliceBack.remove();
                            timeSliceXGrid.remove();
                            timeSliceYGrid.remove();
                            timeSliceBack = null, timeSliceXGrid = null, timeSliceYGrid = null;

                            if(timeSliceYGridTop != null){
                                timeSliceYGridTop.remove();
                                timeSliceYGridTop = null;
                            }
                            if(timeSliceYGridBottom != null){
                                timeSliceYGridBottom.remove();
                                timeSliceYGridBottom = null;
                            }
                        }
                    });
                };
                var drawFillRectangleAlpha = function(_type, _node, _alpha){
                    var alpha = {};

                    if(_type === 'VML') {
                        // alpha['opacity'] = _alpha;
                        _node.attr('opacity', _alpha);
                    } else {
                        // alpha['fill-opacity'] = _alpha;
                        _node.attr('fill-opacity', _alpha);
                    }
                    // _node.attr(alpha);

                };
                var bindEvent = function(_area, _rect, _rect_min, _tickArr, _start){

                    var data = thisData.data, count = data.length;
                    var fsStyles = getStyles('area', thisSeriesStyles, data[_start].shape.width, count);
                    var areaStyle = {
                        'fill': fsStyles.fillcolor,
                        'stroke-width': 0,
                        'stroke': undefined
                    };
                    var lineStyle = {
                        'stroke': fsStyles.strokecolor,
                        'stroke-width': fsStyles.strokewidth,
                        'stroke-opacity': fsStyles.strokealpha
                    };

                    var first = data[_start], second = data[_start + 1];
                    var firstShape = first.shape, secondShape = second.shape;
                    var fsHalfGap = (secondShape.x - firstShape.x) / 2;

                    _area.unhover();
                    _area.hover(function(_e){

                        mouseOverSeriesKey = _serieskey;

                        if(options.use.selectItem) {
                            // IE8 버그 패턴이미지였다가 단색으로 오버된경우 색상을 표현하지 못한다.
                            // attr 에서 animate로 변경함.
                            if(fsStyles.overfillcolor.indexOf('url') <= -1) {
                                _area.animate({
                                    'fill': getFillStyle(5, fsStyles.overfillcolor, fsStyles.gradientdirection, count, 'over', 'area')
                                }, 1);
                                drawFillRectangleAlpha(TYPE, _area, fsStyles.overfillalpha);
                            } else {
                                _area.attr({
                                    'fill': getFillStyle(5, fsStyles.overfillcolor, fsStyles.gradientdirection, count, 'over', 'area'),
                                    'fill-opacity': 1
                                });
                            }
                            if(_rect != null) {
                                _rect.attr({
                                    'stroke': fsStyles.overstrokecolor,
                                    'stroke-width': fsStyles.overstrokewidth,
                                    'stroke-opacity': fsStyles.overstrokealpha
                                });
                            }
                            if(_rect_min != undefined) {
                                _rect_min.attr({
                                    'stroke': fsStyles.overstrokecolor,
                                    'stroke-width': fsStyles.overstrokewidth,
                                    'stroke-opacity': fsStyles.overstrokealpha
                                });
                            }
                        }
                    }, function(){

                        if(mouseMoveTick != null) {
                            mouseMoveTick.remove();
                            mouseMoveTick = null;
                        }
                        if(options.use.selectItem){

                            if(fsStyles.fillcolor.indexOf('url') <= -1) {
                                _area.animate(areaStyle, 1);
                                drawFillRectangleAlpha(TYPE, _area, fsStyles.fillalpha);
                            } else {
                                areaStyle['fill-opacity'] = 1;
                                areaStyle['opacity'] = 1;
                                _area.animate(areaStyle, 1);
                            }
                            if(_rect != null) {
                                _rect.attr({
                                    'stroke': fsStyles.strokecolor,
                                    'stroke-width': fsStyles.strokewidth,
                                    'stroke-opacity': fsStyles.strokealpha
                                });
                            }
                            if(_rect_min != undefined) {
                                _rect_min.attr({
                                    'stroke': fsStyles.strokecolor,
                                    'stroke-width': fsStyles.strokewidth,
                                    'stroke-opacity': fsStyles.strokealpha
                                });
                            }
                        }
                    }).mousemove(function(_e){
                        var mouse = getMousePosition(_e);

                        var graphTop = styles.main.layout._graphtop;
                        var graphHeight = graphTop;
                        var lastSeriesKey = '';
                        for(var i in styles) {
                            lastSeriesKey = i;
                        }
                        for(i in styles) {
                            var tLayout = styles[i].layout;

                            if(i === lastSeriesKey) {
                                if(i === 'main') {
                                    graphHeight = graphHeight + tLayout._graphheightpx;
                                } else {

                                    graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                }
                            }
                        }
                        if(options.use.magnet != true){
                            moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                                mouse,
                                vCross, hCross,
                                {},  // options.use.magnet 이 false 이면 사용안하는 param
                                options.use.magnet);
                        }

                        for(var i = data.length; i--;){
                            first = data[i], firstShape = first.shape;
                            if(mouse.x > firstShape.x - fsHalfGap && mouse.x < firstShape.x + fsHalfGap){
                                var y = firstShape.y;

                                if(series.hasOwnProperty('minaxis') && first.comp == "down") {
                                    y = firstShape.height;
                                }
                                if(options.use.magnet){

                                    moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                                        getMousePosition(_e),
                                        vCross, hCross,
                                        {x: Math.round(first.shape.x) - 1, y: Math.round(y) - 2},
                                        options.use.magnet);
                                }
                                if(thisSeriesStyles.tick.overStyle != null && thisSeriesStyles.tick.style == null) {
                                    bindMouseMoveTick(data, first);
                                } else if(thisSeriesStyles.tick.style != null) {

                                    background[KEY].background.trigger("mousemove", background[KEY].background);

                                }
                                if(options.use.tip && _e.isItemOver != false){
                                    showToolTip(options.func.tip, first, firstShape.x, y, series);
                                }
                                break;
                            }
                        }


                    });
                }
                var bindMouseMoveTick = function(data, first){

                    if(mouseMoveTick == null) {
                        mouseMoveTick = drawTick(data, first.index, first.comp, thisSeriesStyles, options, KEY, thisSeriesStyles.tick.overStyle);
                    } else {
                        mouseMoveTick.data('idx', first.index);
                        switch(thisSeriesStyles.tick.overStyle) {
                            case "square":
                                mouseMoveTick.attr({
                                    x: first.shape.x - thisSeriesStyles.tick.size,
                                    y: first.shape.y - thisSeriesStyles.tick.size
                                });
                                break;
                            case "triangle":
                                var path = mouseMoveTick.attr('path');
                                var origin = {x: path[0][1], y: path[0][2]};

                                mouseMoveTick.animate({
                                    path: paper.transformPath(path, ['T', first.shape.x - origin.x - thisSeriesStyles.tick.size, first.shape.y - origin.y - thisSeriesStyles.tick.size])
                                });
                                break;
                            case "star":
                                var path = mouseMoveTick.attr('path');
                                var origin = {x: path[0][1], y: path[0][2]};

                                mouseMoveTick.animate({
                                    path: paper.transformPath(path, ['T', first.shape.x - origin.x + thisSeriesStyles.tick.size, first.shape.y - origin.y])
                                });
                                break;
                            case "diamond":
                                var path = mouseMoveTick.attr('path');
                                var origin = {x: path[0][1], y: path[0][2]};

                                mouseMoveTick.animate({
                                    path: paper.transformPath(path, ['T', first.shape.x - origin.x, first.shape.y - origin.y - thisSeriesStyles.tick.size])
                                });
                                break;
                            default:

                                mouseMoveTick.attr({
                                    cx: first.shape.x,
                                    cy: first.shape.y
                                });
                                break;
                        }
                    }
                    if(mouseMoveTick != null) {
                        mouseMoveTick.trigger('mouseover', mouseMoveTick, {'isItemOver': false});

                    }
                }
                // Path 값 String 으로 변환
                /**
                 * Path 값을 String 으로 변환 : step 폼이 아닌 경우
                 * @param  {Object} _rect1 좌표 1
                 * @param  {Object} _rect2 좌표 2
                 * @param  {Boolean} _min minaxis를 사용 여부
                 * @return {String}        좌표 문자열
                 */
                var getPathString = function(_rect1, _rect2, _min){
                    if(_min == undefined)
                        return "M" + _rect1.x +"," + _rect1.y + "L" + _rect2.x + "," + _rect2.y;
                    else
                        return "M" + _rect1.x +"," + _rect1.height + "L" + _rect2.x + "," + _rect2.height;
                };

                // Path 값 String 으로 변환
                /**
                 * Path 값을 String 으로 변환 : step 인 경우
                 * @param  {String} type 첫번째와 두번째 구분
                 * @param  {Object} _rect1 좌표 1
                 * @param  {Object} _rect2 좌표 2
                 * @return {String}        좌표 문자열
                 */
                var getPathStepString = function(type, _rect1, _rect2){
                    if(type === "first")
                        return "M" + _rect1.x +"," + _rect1.y + "," + _rect2.x + "," + _rect1.y;
                    else
                        return "M" + _rect2.x +"," + _rect1.y + "," + _rect2.x + "," + _rect2.y;
                };


                return self;
            };
            /**
             * 점(Plot)시리즈 그리기
             * @param  {String} _serieskey 메인, 서브 등 영역 Key Name
             * @param  {Object} _options   옵션
             * @param  {Object} _styles    스타일
             * @param  {Object} _series    시리즈
             * @return {Function}            그려진 시리즈 객체
             */
            // Plot
            DRAWSERIES.drawplot = function(_serieskey, _options, _styles, _series){
                // 기본 스타일 정의
                var defaultStyles = {
                    tick: {
                        style: 'circle', size: 5, overSize: 1.5,
                        area: {
                            normal: { color: '#ffffff', opacity: 1, over: { color: '#ffffff', opacity: 1 }}
                        },
                        line: {
                            normal: { color: '#2bcdba', opacity: 1, width: 3, over: { color: '#465866', opacity: 1, width: 3 }}
                        }
                    },
                    text: {
                        use: false, family: 'Noto Sans KR', color: '#666666', align: 'center', style: 'normal', opacity: 1, format: null
                    }
                };
                var self = {};

                var options = _options, series = _series;
                var thisSeriesStyles = $.extend(true, {}, defaultStyles, _styles.series[_serieskey]);

                if(TYPE == 'VML') {
                    // 글꼴 흐림현상으로 VML은 Dotum으로 Fix
                    thisSeriesStyles.text.family = ie8Font;
                }

                _styles.series[_serieskey] = thisSeriesStyles;

                var thisStyles = self.styles = _styles;

                var GRAPH_TOP = 0, GRAPH_LEFT = 0, GRAPH_WIDTH = 0, GRAPH_HEIGHT = 0;
                var yAxisMax = 0, yAxisMin = 0, yAxisGap = 0;

                var thisData = null;

                self.elementNodes = [];
                /**
                 * 시리즈 실행
                 * @param  {Number} _x        		시리즈가 그려질 X위치
                 * @param  {Number} _y         		시리즈가 그려질 Y위치
                 * @param  {Number} _w         		시리즈가 그려질 넓이
                 * @param  {Number} _h        		시리즈가 그려질 높이
                 * @param  {Array} _data      		차트데이터
                 * @param  {Array} _yAxis     		Y축 값 데이터 배열
                 * @param  {Number} _prev_data 		base, before 폼계열에서 사용하는 값으로 전일비교금액이 있을때 사용
                 * @return null
                 */
                self.init = function(_x, _y, _w, _h, _data, _yAxis, _prev_data){
                    if(timer != null) {
                        clearInterval(timer);
                    }
                    yAxisMax = _yAxis[_yAxis.length - 1];
                    yAxisMin = _yAxis[0];
                    yAxisGap = yAxisMax - yAxisMin;
                    GRAPH_TOP = _y;
                    GRAPH_LEFT = _x;
                    GRAPH_WIDTH = _w;
                    GRAPH_HEIGHT = _h;

                    thisSeriesStyles = $.extend(true, {}, defaultStyles, _styles.series[_serieskey]);
                    _styles.series[_serieskey] = thisSeriesStyles;

                    self.elementNodes = [];

                    parse(_data, _yAxis);
                };

                /**
                 * 시리즈의 아이템별 위치, 크기 등을 구하고 그리는 함수
                 * @param  {Array} _data      차트데이터
                 * @param  {Array} _yAxis     Y축 값 데이터 배열
                 * @return null
                 */
                var parse = function(_data, _yAxis){
                    thisData = _data;

                    var data = thisData.data, count = data.length;
                    var BASE = thisData.base;

                    var startX = GRAPH_LEFT + thisStyles.graph.paddingLeft;
                    var startY = thisStyles.layout.paddingTop + thisStyles.graph.paddingTop;
                    var baseLine = GRAPH_HEIGHT + startY;

                    var xGap = (GRAPH_WIDTH - thisStyles.graph.paddingLeft - thisStyles.graph.paddingRight) / count, xGapHalf = xGap / 2;
                    var height = GRAPH_HEIGHT - thisStyles.graph.paddingTop - thisStyles.graph.paddingBottom;
                    var value, rect = {};

                    for(var i = 0; i < count; i++){
                        value = data[i];
                        rect = {};
                        if($.trim(value.xaxis) == '') continue;

                        if(value.yaxis > BASE) {
                            value.comp = 'up';
                        } else if(value.yaxis < BASE) {
                            value.comp = 'down';
                        } else {
                            value.comp = 'flat';
                        }

                        rect.x = Math.round((xGap * i))  + startX + xGapHalf;
                        rect.y = Math.round(height * (yAxisMax - Number(value.yaxis)) / yAxisGap) + GRAPH_TOP + thisStyles.graph.paddingTop;
                        rect.width = xGap;
                        rect.mx = Math.round((xGap * i))  + startX, rect.mw = xGap; // 증권차트에서 마우스 이벤트 Info 용
                        value['shape'] = rect;
                    }
                    draw(startX, startY);
                };
                var timer = null;
                var startTimer = null;
                var overData = null;
                /**
                 * 시리즈 그리기
                 * @param  {Number} _startX    시리즈가 그려질 시작(X) 위치
                 * @param  {Number} _startY    시리즈가 그려질 시작(Y) 위치
                 * @return null
                 */
                var draw = function(_startX, _startY){
                    if(startTimer != null) {
                        clearInterval(startTimer);
                    }

                    var group = [], item = null;
                    var data = thisData.data, count = data.length;

                    var animation = function(_idx){
                        if(_idx >= count){
                            clearInterval(startTimer);
                            return;
                        }
                        var item = group[_idx];
                        item.animate({transform: 's1,1'}, options.animate.seriesSpeed, options.animate.type);

                    };
                    if(options.use.animate && TYPE !== "VML"){

                        for(var i = 0; i < count; i++){
                            item = drawTick(data, i, undefined, thisSeriesStyles, options, _serieskey).attr({transform: 's0,0'});
                            group.push(item);
                        }
                        var elements = paper.set(group);
                        elementGroup.unshift(elements);

                        var idx = 0;
                        startTimer = setInterval(function(){
                            animation(idx);
                            idx++;
                        }, options.animate.speed);
                    } else {
                        for(var i = 0; i < count; i++){
                            if($.trim(data[i].xaxis) == '') continue;

                            item = drawTick(data, i, undefined, thisSeriesStyles, options, _serieskey);
                            group.push(item);
                        }
                        var elements = paper.set(group);
                        elementGroup.unshift(elements);
                    }
                    self.elementNodes = group.concat([]).reverse();

                    var overData = null;
                    elements.mousemove(function(_e){

                        overData = thisData.data[this.data('idx')];
                        var graphTop = styles.main.layout._graphtop;
                        var graphHeight = graphTop;
                        var lastSeriesKey = '';
                        for(var i in styles) {
                            lastSeriesKey = i;
                        }
                        for(i in styles) {
                            var tLayout = styles[i].layout;

                            if(i === lastSeriesKey) {
                                if(i === 'main') {
                                    graphHeight = graphHeight + tLayout._graphheightpx;
                                } else {

                                    graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                }
                            }
                        }

                        if(options.use.tip && _e.isItemOver != false) {

                            showToolTip(options.func.tip, overData, overData.shape.x, overData.shape.y, series);
                        }
                        moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                            getMousePosition(_e),
                            vCross, hCross,
                            {x: Math.round(this.attr('cx')) - 1, y: Math.round(this.attr('cy')) - 2},
                            options.use.magnet);

                    }).click(function(_e) {
                        if(overData == null) {
                            overData = thisData.data[this.data('idx')];
                        }
                        if(options.func.itemClick != null) {
                            eval(options.func.itemClick(overData));
                        }
                    });

                    if(TOUCHDEVICE) {
                        elements.unmouseup().unhover().mouseup(function(e) {

                            var data = thisData.data[this.data('idx')];

                            if(data == undefined || !data.hasOwnProperty('comp')) return;

                            var comp = 'normal';

                            mouseOverSeriesKey = _serieskey;

                            if(options.use.tip && e.isItemOver != false) {
                                showToolTip(options.func.tip, data, data.shape.x, data.shape.y, series);
                            }

                            if(options.use.selectItem){
                                this.animate({'transform': 's'+thisSeriesStyles.tick.overSize+','+thisSeriesStyles.tick.overSize,
                                    'fill'			: thisSeriesStyles.tick.area[comp].over.color,
                                    'fill-opacity'	: thisSeriesStyles.tick.area[comp].over.opacity,
                                    'stroke'		: thisSeriesStyles.tick.line[comp].over.color,
                                    'stroke-width'	: thisSeriesStyles.tick.line[comp].over.width,
                                    'stroke-opacity': thisSeriesStyles.tick.line[comp].over.opacity
                                }, 100);
                            }
                        });
                    }
                };
                /**
                 * 시리즈 그리기 : 시계열 사용시
                 * @param  {Number} _index    시리즈가 그려질 시작(Y) 위치
                 * @param  {Number} _stopIndex 그려지는 아이템의 개수
                 *                             시계열에서 조정에 따라 개수가 달라질수 있음.
                 * @return null
                 */
                self.drawTimeSlice = function(_index, _stopIndex){

                    if(startTimer != null) clearInterval(startTimer);
                    if(timer != null) clearInterval(timer);
                    var group = [], item = null;
                    var data = thisData.data, count = _stopIndex;
                    var animation = function(_idx, _count){
                        if(_idx >= _count){
                            clearInterval(timer);
                            return;
                        }
                        var item = group[_idx];
                        item.animate({transform: 's1,1'}, options.animate.seriesSpeed, options.animate.type);

                    };
                    if(options.animate.use && TYPE !== "VML"){
                        for(var i = _index; i < count; i++){
                            item = drawTick(data, i, undefined, thisSeriesStyles, options, _serieskey).attr({'transform': 's0,0'});
                            group[i] = item;
                        }
                        var elements = paper.set(group);
                        elementGroup.unshift(elements);
                        var idx = _index;
                        if(_index + 1 == _stopIndex){
                            animation(idx, _stopIndex);
                        } else {
                            timer = setInterval(function(){
                                animation(idx, count);
                                idx++;
                            }, options.animate.speed);
                        }
                    } else {
                        for(var i = 0; i < count; i++){
                            if($.trim(data[i].xaxis) == '') continue;
                            item = drawTick(data, i, undefined, thisSeriesStyles, options, _serieskey);
                            group.push(item);
                            elementGroup.unshift(item);
                        }
                        var elements = paper.set(group);
                    }
                    var overData = null;
                    elements.mousemove(function(_e){

                        overData = thisData.data[this.data('idx')];
                        var graphTop = styles.main.layout._graphtop;
                        var graphHeight = graphTop;
                        var lastSeriesKey = '';
                        for(var i in styles) {
                            lastSeriesKey = i;
                        }
                        for(i in styles) {
                            var tLayout = styles[i].layout;

                            if(i === lastSeriesKey) {
                                if(i === 'main') {
                                    graphHeight = graphHeight + tLayout._graphheightpx;
                                } else {

                                    graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                }
                            }
                        }
                        if(options.use.tip && _e.isItemOver != false) {

                            showToolTip(options.func.tip, overData, overData.shape.x, overData.shape.y, series);
                        }
                        moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                            getMousePosition(_e),
                            vCross, hCross,
                            {x: Math.round(this.attr.cx) - 1, y: Math.round(this.attr.cy) - 2},
                            options.use.magnet);
                    }).click(function(_e) {
                        if(overData == null) {
                            overData = thisData.data[this.data('idx')];
                        }
                        if(options.func.itemClick != null) {
                            eval(options.func.itemClick(overData));
                        }
                    });
                }

                return self;
            };
            /**
             * 캔들(Candle)시리즈 그리기
             * @param  {String} _serieskey 메인, 서브 등 영역 Key Name
             * @param  {Object} _options   옵션
             * @param  {Object} _styles    스타일
             * @param  {Object} _series    시리즈
             * @return {Function}            그려진 시리즈 객체
             */
            DRAWSERIES.drawcandle = function(_serieskey, _options, _styles, _series){
                // 기본 스타일 정의
                var defaultStyles = {
                    itemWidth: 60,
                    area: {
                        up:   { color: [[0, '#ff6360'],[100, '#ff918f']], opacity: 1, over: { color: '#ca2a27', opacity: 1 } },
                        down: { color: [[0, '#0193d8'],[100, '#4db4e4']], opacity: 1, over: { color: '#327eb9', opacity: 1 } },
                        flat: { color: '#495b68', opacity: 1, over: { color: '#495b68', opacity: 1 } }
                    },
                    line: {
                        up:   { color: '#ca2a27', opacity: 1, width: 1, over: { color: '#ca2a27', opacity: 1, width: 1 } },
                        down: { color: '#327eb9', opacity: 1, width: 1, over: { color: '#327eb9', opacity: 1, width: 1 } },
                        flat: { color: '#495b68', opacity: 1, width: 1, over: { color: '#495b68', opacity: 1, width: 1 } }
                    },
                    gradient: { direction: 'vertical' },
                    gradient: { direction: 'vertical' },
                    gradient: { direction: 'vertical' },
                    accessibility: { use: false, style: 'normal' }
                };
                var self = {};

                var options = _options, series = _series;
                var thisSeriesStyles = _styles.series[_serieskey] = $.extend(true, defaultStyles, _styles.series[_serieskey]);

                var thisStyles = self.styles = _styles;

                var elementGroups = [];

                var GRAPH_TOP = 0, GRAPH_LEFT = 0, GRAPH_WIDTH = 0, GRAPH_HEIGHT = 0;
                var yAxisMax = 0, yAxisMin = 0, yAxisGap = 0;

                self.elementGroup = null;
                self.elementNodes = [];
                self.overItem = null;

                var thisData = null;
                /**
                 * 시리즈 실행
                 * @param  {Number} _x        		시리즈가 그려질 X위치
                 * @param  {Number} _y         		시리즈가 그려질 Y위치
                 * @param  {Number} _w         		시리즈가 그려질 넓이
                 * @param  {Number} _h        		시리즈가 그려질 높이
                 * @param  {Array} _data      		차트데이터
                 * @param  {Array} _yAxis     		Y축 값 데이터 배열
                 * @param  {Number} _prev_data 		base, before 폼계열에서 사용하는 값으로 전일비교금액이 있을때 사용
                 * @return null
                 */
                self.init = function(_x, _y, _w, _h, _data, _yAxis, _prev_data){
                    yAxisMax = _yAxis[_yAxis.length - 1];
                    yAxisMin = _yAxis[0];
                    yAxisGap = yAxisMax - yAxisMin;
                    GRAPH_TOP = _y;
                    GRAPH_LEFT = _x;
                    GRAPH_WIDTH = _w;
                    GRAPH_HEIGHT = _h;

                    thisSeriesStyles = $.extend(true, {}, defaultStyles, _styles.series[_serieskey]);
                    _styles.series[_serieskey] = thisSeriesStyles;

                    self.elementGroup = null;
                    self.elementNodes = [];

                    parse(_data, _yAxis);
                };

                /**
                 * 시리즈의 아이템별 위치, 크기 등을 구하는 함수
                 * @param  {Array} _data      차트데이터
                 * @param  {Array} _yAxis     Y축 값 데이터 배열
                 * @return null
                 */
                var parse = function(_data, _yAxis){
                    thisData = _data;
                    var data = thisData.data, count = data.length;

                    var BASE = thisData.base;

                    var startY = thisStyles.layout.paddingTop + thisStyles.graph.paddingTop;
                    var graphtop = GRAPH_TOP + thisStyles.graph.paddingTop;
                    var graphheight = GRAPH_HEIGHT - thisStyles.graph.paddingTop - thisStyles.graph.paddingBottom;
                    var baseLine = GRAPH_HEIGHT + startY;

                    var xGap = (GRAPH_WIDTH - thisStyles.graph.paddingLeft - thisStyles.graph.paddingRight) / count;
                    var xGapHalf = xGap / 2;
                    var xPdn = (xGap - (xGap * (Number(thisSeriesStyles.itemWidth) / 100)));
                    var xPdnHalf = xPdn / 2;
                    var w = Math.round(xGap - xPdn);
                    var startX = GRAPH_LEFT + thisStyles.graph.paddingLeft;

                    var value, rect = {};
                    var y = 0, h = 0, open = 0, high = 0, low = 0, close = 0;

                    for(var i = count; i--;){
                        value = data[i];
                        rect = {};
                        if($.trim(value.xaxis) == '') continue;

                        open  = Math.round(graphheight * ((yAxisMax - value.open ) / yAxisGap)) + graphtop;
                        high  = Math.round(graphheight * ((yAxisMax - value.high ) / yAxisGap)) + graphtop;
                        low   = Math.round(graphheight * ((yAxisMax - value.low  ) / yAxisGap)) + graphtop;
                        close = Math.round(graphheight * ((yAxisMax - value.close) / yAxisGap)) + graphtop;

                        if(value.close > value.open) {
                            value.comp = 'up';
                            var temp = open;
                            open = close, close = temp;
                        } else if(value.close < value.open) {
                            value.comp = 'down';
                        } else {
                            value.comp = 'flat';
                        }

                        h = close - open;
                        rect.x = Math.round((xGap * i) + xPdnHalf)  + startX;
                        rect.y = high;
                        rect.width 	= w;
                        rect.height = h;
                        rect.open 	= open;
                        rect.high 	= high;
                        rect.low 	= low;
                        rect.close 	= close;

                        // 증권차트에서 마우스 이벤트 Info 용
                        rect.mx = rect.x - xPdnHalf;
                        rect.mw = xGap;
                        value['shape'] = rect;
                    }
                    draw(startY, baseLine);
                };
                /**
                 * 정상데이터가 들어왔는지 여부 확인 비정상일때 true 리턴
                 * @param  {Object} _value 아이템의 데이터
                 * @return {Boolean}        비정상인 데이터가 들어왔을때 true 리턴
                 */
                var getIsNaN = function(_value) {
                    if($.trim(_value.xaxis) == '') {
                        return true;
                    }else if(isNaN(_value.open) || isNaN(_value.high) || isNaN(_value.low) || isNaN(_value.close)){
                        return true;
                    }
                    return false;
                };
                /**
                 * 시리즈 그리기
                 * @param  {Number} _startY    시리즈가 그려질 시작(Y) 위치
                 * @param  {Number} _baseLine  아이템의 시작 위치 혹은 시리즈의 중간 위치 값
                 * @return null
                 */
                var draw = function(_startY, _baseLine){
                    var data = thisData.data, count = data.length;
                    var w = data[0].shape.width;
                    var access_center = w / 2;
                    var access_width = w > 10 ? 10 : w, access_half = access_width / 2;
                    var access_y = GRAPH_TOP + GRAPH_HEIGHT - access_width + 0.5;

                    for(var i = count; i --;){
                        var value = data[i], comp = value.comp;

                        if(getIsNaN(value)) {
                            continue;
                        }
                        var shape = value.shape;
                        var item = null;
                        var fillcolor   = getFillStyle(shape.width, thisSeriesStyles.area[comp].color, thisSeriesStyles.gradient.direction, count),
                            fillalpha   = getAlpha(thisSeriesStyles.area[comp].color, thisSeriesStyles.area[comp].opacity),
                            strokewidth = thisSeriesStyles.line[comp].width, strokecolor = thisSeriesStyles.line[comp].color,
                            strokealpha = getAlpha(thisSeriesStyles.line[comp].width, thisSeriesStyles.line[comp].opacity);

                        item = drawFillRectangle(shape, fillcolor, fillalpha, strokewidth, strokecolor, strokealpha);
                        item.data({
                            'idx': i,
                            'comp': comp
                        });

                        elementGroup.unshift(item);
                        elementGroups.unshift(item);

                    }
                    if(thisSeriesStyles.accessibility.use){
                        var fsStyles = getStyles('candle', thisSeriesStyles, w, count);
                        fsStyles.accessibilitystyle = thisSeriesStyles.accessibility.style;
                        drawAccessibility('up', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT);
                        drawAccessibility('down', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT);
                        drawAccessibility('flat', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT);
                    }

                    var overData = null;
                    var group = paper.set(elementGroups).hover(function(e){

                        overData = thisData.data[this.data('idx')], comp = this.data('comp');

                        mouseOverSeriesKey = _serieskey;
                        if(options.use.tip && e.isItemOver != false) showToolTip(options.func.tip, overData, overData.shape.x + overData.shape.width/2, overData.shape.high, series);
                        if(options.use.selectItem){
                            if(self.overItem != null && self.overItem[0] != null) {
                                var overComp = self.overItem.data('comp');

                                self.overItem.attr({
                                    'fill': getFillStyle(overData.shape.width, thisSeriesStyles.area[overComp].color, thisSeriesStyles.gradient.direction, count),
                                    'fill-opacity': getAlpha(thisSeriesStyles.area[overComp].color, thisSeriesStyles.area[overComp].opacity),
                                    'stroke': thisSeriesStyles.line[overComp].color,
                                    'stroke-width': thisSeriesStyles.line[overComp].width,
                                    'stroke-opacity': getAlpha(thisSeriesStyles.line[overComp].width, thisSeriesStyles.line[overComp].opacity)
                                });
                            }

                            this.attr({
                                'fill': getFillStyle(overData.shape.width, thisSeriesStyles.area[comp].over.color, thisSeriesStyles.gradient.direction, count),
                                'fill-opacity': getAlpha(thisSeriesStyles.area[comp].over.color, thisSeriesStyles.area[comp].over.opacity),
                                'stroke': thisSeriesStyles.line[comp].over.color,
                                'stroke-width': thisSeriesStyles.line[comp].over.width,
                                'stroke-opacity': getAlpha(thisSeriesStyles.line[comp].over.color, thisSeriesStyles.line[comp].over.opacity)
                            });

                            self.overItem = this;
                        }
                    }, function(_e){
                        if(options.use.selectItem && overData != null){

                            if(this.type == undefined) return;

                            comp = this.data('comp');

                            this.attr({
                                'fill': getFillStyle(overData.shape.width, thisSeriesStyles.area[comp].color, thisSeriesStyles.gradient.direction, count),
                                'fill-opacity': getAlpha(thisSeriesStyles.area[comp].color, thisSeriesStyles.area[comp].opacity),
                                'stroke': thisSeriesStyles.line[comp].color,
                                'stroke-width': thisSeriesStyles.line[comp].width,
                                'stroke-opacity': getAlpha(thisSeriesStyles.line[comp].width, thisSeriesStyles.line[comp].opacity)
                            });

                            self.overItem = null;
                        }
                    });
                    group.unmousemove().mousemove(function(_e){
                        if(overData == null) return;

                        var graphTop = styles.main.layout._graphtop;
                        var graphHeight = graphTop;
                        var lastSeriesKey = '';
                        for(var i in styles) {
                            lastSeriesKey = i;
                        }
                        for(i in styles) {
                            var tLayout = styles[i].layout;

                            if(i === lastSeriesKey) {
                                if(i === 'main') {
                                    graphHeight = graphHeight + tLayout._graphheightpx;
                                } else {

                                    graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                }
                            }
                        }
                        moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                            getMousePosition(_e),
                            vCross, hCross,
                            {x: Math.round(overData.shape.x + overData.shape.width/2) - 1, y: Math.round(overData.shape.y) - 2},
                            options.use.magnet);
                    }).unclick().click(function(_e) {
                        if(overData == null) {
                            overData = thisData.data[this.data('idx')];
                        }
                        if(options.func.itemClick != null) {
                            eval(options.func.itemClick(overData));
                        }
                    });

                    if(TOUCHDEVICE) {
                        group.unmouseup().mouseup(function(e) {

                            overData = thisData.data[this.data('idx')], comp = this.data('comp');

                            mouseOverSeriesKey = _serieskey;
                            if(options.use.tip && e.isItemOver != false) showToolTip(options.func.tip, overData, overData.shape.x + overData.shape.width/2, overData.shape.high, series);
                            if(options.use.selectItem){
                                if(self.overItem != null && self.overItem[0] != null) {
                                    var overComp = self.overItem.data('comp');
                                    self.overItem.attr({
                                        'fill': getFillStyle(overData.shape.width, thisSeriesStyles.area[overComp].color, thisSeriesStyles.gradient.direction, count),
                                        'fill-opacity': getAlpha(thisSeriesStyles.area[overComp].color, thisSeriesStyles.area[overComp].opacity),
                                        'stroke': thisSeriesStyles.line[overComp].color,
                                        'stroke-width': thisSeriesStyles.line[overComp].width,
                                        'stroke-opacity': getAlpha(thisSeriesStyles.line[overComp].width, thisSeriesStyles.line[overComp].opacity)
                                    });
                                }

                                this.attr({
                                    'fill': getFillStyle(overData.shape.width, thisSeriesStyles.area[comp].over.color, thisSeriesStyles.gradient.direction, count),
                                    'fill-opacity': getAlpha(thisSeriesStyles.area[comp].over.color, thisSeriesStyles.area[comp].over.opacity),
                                    'stroke': thisSeriesStyles.line[comp].over.color,
                                    'stroke-width': thisSeriesStyles.line[comp].over.width,
                                    'stroke-opacity': getAlpha(thisSeriesStyles.line[comp].over.color, thisSeriesStyles.line[comp].over.opacity)
                                });

                                self.overItem = this;
                            }
                            if(overData == null) return;

                            var graphTop = styles.main.layout._graphtop;
                            var graphHeight = graphTop;
                            var lastSeriesKey = '';

                            for(var i in styles) {
                                lastSeriesKey = i;
                            }

                            for(i in styles) {
                                var tLayout = styles[i].layout;

                                if(i === lastSeriesKey) {
                                    if(i === 'main') {
                                        graphHeight = graphHeight + tLayout._graphheightpx;
                                    } else {

                                        graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                    }
                                }
                            }

                            moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                                getMousePosition(e),
                                vCross, hCross,
                                {x: Math.round(overData.shape.x + overData.shape.width/2) - 1, y: Math.round(overData.shape.y) - 2},
                                options.use.magnet);
                        });
                    }

                    self.elementGroup = elementGroups;
                    self.elementNodes = elementGroups.reverse();
                };
                /**
                 * 시리즈 그리기 : 시계열 사용시 : 바시리즈는 시계열 없음.
                 * @param  {Number} _index    시리즈가 그려질 시작(Y) 위치
                 * @param  {Number} _stopIndex 그려지는 아이템의 개수
                 *                             시계열에서 조정에 따라 개수가 달라질수 있음.
                 * @return null
                 */
                self.drawTimeSlice = function(_index, _stopIndex){

                    if(_index == 0) {
                        elementGroups = [];
                    }
                    var data = thisData.data, count = data.length;
                    var w = data[_index].shape.width;
                    var access_center = w / 2;
                    var access_width = w > 10 ? 10 : w, access_half = access_width / 2;
                    var access_y = GRAPH_TOP + GRAPH_HEIGHT - access_width + 0.5;

                    for(var i = _index; i < _stopIndex; i++){
                        var value = data[i], comp = value.comp;

                        if($.trim(value.xaxis) == '') continue;
                        var shape = value.shape;
                        var item = null;
                        var fillcolor   = getFillStyle(shape.width, thisSeriesStyles.area[comp].color, thisSeriesStyles.gradient.direction, count),
                            fillalpha   = getAlpha(thisSeriesStyles.area[comp].color, thisSeriesStyles.area[comp].opacity),
                            strokewidth = thisSeriesStyles.line[comp].width, strokecolor = thisSeriesStyles.line[comp].color,
                            strokealpha = getAlpha(thisSeriesStyles.line[comp].width, thisSeriesStyles.line[comp].opacity);

                        item = drawFillRectangle(shape, fillcolor, fillalpha, strokewidth, strokecolor, strokealpha);
                        item.data({
                            'idx': i,
                            'comp': comp
                        });

                        elementGroup.unshift(item);
                        elementGroups.unshift(item);


                    }
                    if(thisSeriesStyles.accessibility.use){
                        var fsStyles = getStyles('candle', thisSeriesStyles, w, count);
                        fsStyles.accessibilitystyle = thisSeriesStyles.accessibility.style;
                        drawAccessibility('up', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT);
                        drawAccessibility('down', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT);
                        drawAccessibility('flat', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT);
                    }

                    var overData = null;
                    var group = paper.set(self.elementGroup).hover(function(e){
                        overData = thisData.data[this.data('idx')], comp = this.data('comp');
                        mouseOverSeriesKey = _serieskey;
                        if(options.use.tip && e.isItemOver != false) showToolTip(options.func.tip, overData, overData.shape.x + overData.shape.width/2, overData.shape.high, series);
                        if(options.use.selectItem){
                            if(self.overItem != null && self.overItem[0] != null) {
                                var overComp = self.overItem.data('comp');

                                self.overItem.attr({
                                    'fill': getFillStyle(overData.shape.width, thisSeriesStyles.area[overComp].color, thisSeriesStyles.gradient.direction, count),
                                    'fill-opacity': getAlpha(thisSeriesStyles.area[overComp].color, thisSeriesStyles.area[overComp].opacity),
                                    'stroke': thisSeriesStyles.line[overComp].color,
                                    'stroke-width': thisSeriesStyles.line[overComp].width,
                                    'stroke-opacity': getAlpha(thisSeriesStyles.line[overComp].width, thisSeriesStyles.line[overComp].opacity)
                                });
                            }

                            this.attr({
                                'fill'			: getFillStyle(overData.shape.width, thisSeriesStyles.area[comp].over.color, thisSeriesStyles.gradient.direction, count),
                                'fill-opacity'	: getAlpha(thisSeriesStyles.area[comp].over.color, thisSeriesStyles.area[comp].over.opacity),
                                'stroke'		: thisSeriesStyles.line[comp].over.color,
                                'stroke-width'	: thisSeriesStyles.line[comp].over.width,
                                'stroke-opacity': getAlpha(thisSeriesStyles.line[comp].over.color, thisSeriesStyles.line[comp].over.opacity)
                            });

                            self.overItem = this;
                            // self.overItem.data('comp', comp);
                        }
                    }, function(e){
                        if(options.use.selectItem && overData != null){

                            if(this.type == undefined) return;

                            comp = this.data('comp');

                            this.attr({
                                'fill'			: getFillStyle(overData.shape.width, thisSeriesStyles.area[comp].color, thisSeriesStyles.gradient.direction, count),
                                'fill-opacity'	: getAlpha(thisSeriesStyles.area[comp].color, thisSeriesStyles.area[comp].opacity),
                                'stroke'		: thisSeriesStyles.line[comp].color,
                                'stroke-width'	: thisSeriesStyles.line[comp].width,
                                'stroke-opacity': getAlpha(thisSeriesStyles.line[comp].width, thisSeriesStyles.line[comp].opacity)
                            });

                            self.overItem = null;
                        }
                    });
                    group.unmousemove().mousemove(function(_e){
                        var graphTop = styles.main.layout._graphtop;
                        var graphHeight = graphTop;
                        var lastSeriesKey = '';
                        for(var i in styles) {
                            lastSeriesKey = i;
                        }
                        for(i in styles) {
                            var tLayout = styles[i].layout;

                            if(i === lastSeriesKey) {
                                if(i === 'main') {
                                    graphHeight = graphHeight + tLayout._graphheightpx;
                                } else {

                                    graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                }
                            }
                        }
                        moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                            getMousePosition(_e),
                            vCross, hCross,
                            {x: Math.round(overData.shape.x + overData.shape.width/2) - 1, y: Math.round(overData.shape.y) - 2},
                            options.use.magnet);
                    }).unclick().click(function(_e) {
                        if(overData == null) {
                            overData = thisData.data[this.data('idx')];
                        }
                        if(options.func.itemClick != null) {
                            eval(options.func.itemClick(overData));
                        }
                    });

                    self.elementGroup = elementGroups;
                    self.elementNodes = elementGroups;//.reverse();
                };
                // Rectangle Fill
                /**
                 * 실제로 아이템을 만들고 색상을 입히는 함수
                 * @param  {Object} _shape 아이템의 위치값
                 * @param  {String} _fc    면 색상
                 * @param  {Number} _fa    면 투명도
                 * @param  {Number} _sw    선 두께
                 * @param  {String} _sc    선 색상
                 * @param  {Number} _sa    선 투명도
                 * @return {Node}        생성된 SVG 노드
                 */
                var drawFillRectangle = function(_shape, _fc, _fa, _sw, _sc, _sa){

                    var _x = _shape.x;
                    var _y = _shape.open;
                    var _w = _shape.width;
                    var _h = _shape.height;
                    var _high = _shape.high;
                    var _low = _shape.low;

                    var rp = getRectangle(TYPE, _x, _y, _w, _h, _sw);

                    var xwHalf = Math.round(rp.x+rp.widthhalf), xw = rp.x + rp.width;
                    var yh = rp.y + rp.height;

                    var high = getLine(TYPE, xwHalf, rp.y, xwHalf, _high);
                    var low  = getLine(TYPE, xwHalf, yh, xwHalf, _low);

                    var rect = null;
                    var path = "M"+rp.x+","+rp.y+','+xw + ','+rp.y +','+xw + ','+yh+','+(rp.x) + ','+yh+','+(rp.x) + ','+(rp.y)
                        + "M"+(high.x1)+","+high.y1 +','+ (high.x2)+ ','+high.y2
                        + "M"+(low.x1)+","+low.y1 +','+ (low.x2)+ ','+low.y2 + 'Z';
                    if(options.use.animate && TYPE !== "VML"){
                        var fpath   = "M"+rp.x+","+(GRAPH_HEIGHT)+','+xw + ','+(GRAPH_HEIGHT)+','+xw + ','+(GRAPH_HEIGHT) +','+(rp.x) + ','+(GRAPH_HEIGHT)+','+(rp.x) + ','+(GRAPH_HEIGHT)
                            + "M"+(xwHalf)+","+(GRAPH_HEIGHT)
                            + "M"+(xwHalf)+","+(GRAPH_HEIGHT)+' Z';

                        rect = paper.path(fpath).attr({'fill': _fc, 'fill-opacity': _fa, 'stroke-width': _sw, stroke: _sc, 'stroke-opacity': _sa});

                        rect.stop().animate({'path': path}, options.animate.speed, options.animate.type);
                    } else {
                        rect = paper.path(path).attr({'fill': _fc, 'fill-opacity': _fa, 'stroke-width': _sw, stroke: _sc, 'stroke-opacity': _sa});
                    }

                    return rect;
                };

                return self;
            };
            /**
             * Hloc(Hloc)시리즈 그리기
             * @param  {String} _serieskey 메인, 서브 등 영역 Key Name
             * @param  {Object} _options   옵션
             * @param  {Object} _styles    스타일
             * @param  {Object} _series    시리즈
             * @return {Function}            그려진 시리즈 객체
             */
            // Hloc
            DRAWSERIES.drawhloc = function(_serieskey, _options, _styles, _series){
                // 기본 스타일 정의
                var defaultStyles = {
                    itemWidth: 60,
                    area: {
                        up: 	{ color: '#ff6462', opacity: 1, over: { color: '#9f0000', opacity: 1 } },
                        down: 	{ color: '#4196ff', opacity: 1, over: { color: '#004aa5', opacity: 1 } },
                        flat: 	{ color: '#000000', opacity: 1, over: { color: '#000000', opacity: 1 } }
                    },
                    line: {
                        up: 	{ color: '#ff6462', opacity: 1, width: 1, over: { color: '#ca2a27', opacity: 1, width: 1 } },
                        down: 	{ color: '#0193d8', opacity: 1, width: 1, over: { color: '#327eb9', opacity: 1, width: 1 } },
                        flat: 	{ color: '#495b68', opacity: 1, width: 1, over: { color: '#495b68', opacity: 1, width: 1 } }
                    },
                    gradient: { direction: 'horizontal' },
                    accessibility: {
                        use: false, style: 'normal'
                    }
                };
                var self = {};

                var options = _options, series = _series;
                var thisSeriesStyles = _styles.series[_serieskey] = $.extend(true, defaultStyles, _styles.series[_serieskey]);

                var thisStyles = self.styles = _styles;

                var elementGroups = [];

                var GRAPH_TOP = 0, GRAPH_LEFT = 0, GRAPH_WIDTH = 0, GRAPH_HEIGHT = 0;
                var yAxisMax = 0, yAxisMin = 0, yAxisGap = 0;

                var thisData = null;

                self.elementGroup = null;
                self.elementNodes = [];
                self.overItem = null;
                /**
                 * 시리즈 실행
                 * @param  {Number} _x        		시리즈가 그려질 X위치
                 * @param  {Number} _y         		시리즈가 그려질 Y위치
                 * @param  {Number} _w         		시리즈가 그려질 넓이
                 * @param  {Number} _h        		시리즈가 그려질 높이
                 * @param  {Array} _data      		차트데이터
                 * @param  {Array} _yAxis     		Y축 값 데이터 배열
                 * @param  {Number} _prev_data 		base, before 폼계열에서 사용하는 값으로 전일비교금액이 있을때 사용
                 * @return null
                 */
                self.init = function(_x, _y, _w, _h, _data, _yAxis, _prev_data){
                    yAxisMax = _yAxis[_yAxis.length - 1]
                    yAxisMin = _yAxis[0]
                    yAxisGap = yAxisMax - yAxisMin;

                    GRAPH_TOP = _y
                    GRAPH_LEFT = _x
                    GRAPH_WIDTH = _w
                    GRAPH_HEIGHT = _h;

                    thisSeriesStyles = $.extend(true, {}, defaultStyles, _styles.series[_serieskey]);
                    _styles.series[_serieskey] = thisSeriesStyles;

                    self.elementGroup = null;
                    self.elementNodes = [];

                    parse(_data, _yAxis);

                };

                /**
                 * 시리즈의 아이템별 위치, 크기 등을 구하는 함수
                 * @param  {Array} _data      차트데이터
                 * @param  {Array} _yAxis     Y축 값 데이터 배열
                 * @return null
                 */
                var parse = function(_data, _yAxis){
                    thisData = _data;
                    var data = thisData.data, count = data.length;
                    var BASE = thisData.base;

                    var startY = thisStyles.layout.paddingTop + thisStyles.graph.paddingTop;
                    var graphtop = GRAPH_TOP + thisStyles.graph.paddingTop, graphheight = GRAPH_HEIGHT - thisStyles.graph.paddingTop - thisStyles.graph.paddingBottom;
                    var baseLine = GRAPH_HEIGHT + startY;

                    var xGap = (GRAPH_WIDTH - thisStyles.graph.paddingLeft - thisStyles.graph.paddingRight) / count, xGapHalf = Math.round(xGap / 2);
                    var xPdn = (xGap - (xGap * (Number(thisSeriesStyles.itemWidth) / 100)));
                    var w = Math.round(xGap - xPdn);
                    var startX = GRAPH_LEFT + thisStyles.graph.paddingLeft;

                    var value, rect = {};
                    var y = 0, h = 0, open = 0, high = 0, low = 0, close = 0;
                    var getPoint = function(_value){
                        return Math.round(graphheight * ((yAxisMax - _value ) / yAxisGap)) + graphtop;
                    };
                    for(var i = 0; i < count; i++){
                        value = data[i];
                        rect = {};
                        if($.trim(value.xaxis) == '') continue;
                        open  = getPoint(value.open);
                        high  = getPoint(value.high);
                        low   = getPoint(value.low);
                        close = getPoint(value.close);

                        if(!value.hasOwnProperty('minaxis')){
                            if(value.close > value.open) {
                                value.comp = 'up';
                                var temp = open;
                                open = close, close = temp;
                            } else if(value.close < value.open) {
                                value.comp = 'down';
                            } else {
                                value.comp = 'flat';
                            }
                        } else {

                        }
                        h = close - open;
                        rect.x = ((xGap * i))  + startX + xGapHalf;
                        rect.y = high;
                        rect.width = w, 	rect.height = h;
                        rect.open = open, 	rect.high = high;
                        rect.low = low,		rect.close = close;
                        rect.mx =((xGap * i))  + startX, rect.mw = xGap; // 증권차트에서 마우스 이벤트 Info 용
                        value['shape'] = rect;
                    }
                    draw(startY, baseLine);
                };
                /**
                 * 정상데이터가 들어왔는지 여부 확인 비정상일때 true 리턴
                 * @param  {Object} _value 아이템의 데이터
                 * @return {Boolean}        비정상인 데이터가 들어왔을때 true 리턴
                 */
                var getIsNaN = function(_value) {
                    if($.trim(_value.xaxis) == '') {
                        return true;
                    }else if(isNaN(_value.open) || isNaN(_value.high) || isNaN(_value.low) || isNaN(_value.close)){
                        return true;
                    }
                    return false;
                };
                /**
                 * 시리즈 그리기
                 * @param  {Number} _startY    시리즈가 그려질 시작(Y) 위치
                 * @param  {Number} _baseLine  아이템의 시작 위치 혹은 시리즈의 중간 위치 값
                 * @return null
                 */
                var draw = function(_startY, _baseLine){
                    var data = thisData.data, count = data.length;
                    var w = data[0].shape.width;
                    var access_width = w > 10 ? 10 : w, access_half = access_width / 2;
                    var access_y = GRAPH_TOP + GRAPH_HEIGHT - access_width + 0.5;

                    var overData = null;

                    for(var i = 0; i < count; i ++){
                        var value = data[i], comp = value.comp;

                        if(getIsNaN(value)) {
                            continue;
                        }

                        var shape = value.shape;
                        var item = null;
                        var strokewidth = thisSeriesStyles.line[comp].width,
                            strokecolor = thisSeriesStyles.line[comp].color,
                            strokealpha = getAlpha(thisSeriesStyles.line[comp].color, thisSeriesStyles.line[comp].opacity);

                        item = drawFillRectangle(shape, strokewidth, strokecolor, strokealpha);

                        item.data({
                            'idx': i,
                            'comp': comp
                        });

                        elementGroup.push(item);
                        elementGroups.unshift(item);
                    }
                    if(thisSeriesStyles.accessibility.use){
                        var fsStyles = getStyles('hloc', thisSeriesStyles, w, count);
                        fsStyles.accessibilitystyle = thisSeriesStyles.accessibility.style;
                        drawAccessibility('up', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT, undefined, undefined, 'hloc');
                        drawAccessibility('down', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT, undefined, undefined, 'hloc');
                        drawAccessibility('flat', data, fsStyles, GRAPH_TOP, GRAPH_HEIGHT, undefined, undefined, 'hloc');
                    }

                    var group = paper.set(elementGroups).hover(function(_e){ // Tooltip

                        overData = thisData.data[this.data('idx')], comp = this.data('comp');

                        mouseOverSeriesKey = _serieskey;
                        if(options.use.tip && _e.isItemOver != false) showToolTip(options.func.tip, overData, overData.shape.x, overData.shape.high, series);
                        if(options.use.selectItem){
                            if(self.overItem != null && self.overItem[0] != null) {
                                var overComp = self.overItem.data('comp');
                                self.overItem.attr({
                                    'fill': getFillStyle(overData.shape.width, thisSeriesStyles.area[overComp].color, thisSeriesStyles.gradient.direction, count),
                                    'fill-opacity': getAlpha(thisSeriesStyles.area[overComp].color, thisSeriesStyles.area[overComp].opacity),
                                    'stroke': thisSeriesStyles.line[overComp].color,
                                    'stroke-width': thisSeriesStyles.line[overComp].width,
                                    'stroke-opacity': getAlpha(thisSeriesStyles.line[overComp].width, thisSeriesStyles.line[overComp].opacity)
                                });
                            }
                            this.attr({
                                'stroke': thisSeriesStyles.line[comp].over.color,
                                'stroke-width': thisSeriesStyles.line[comp].over.width,
                                'stroke-opacity': getAlpha(thisSeriesStyles.line[comp].over.color, thisSeriesStyles.line[comp].over.opacity)
                            });

                            self.overItem = this;
                            // self.overItem.data('comp', comp);
                        }
                    }, function(){
                        if(options.use.selectItem && overData != null){

                            if(this.type == undefined) return;

                            comp = this.data('comp');

                            this.attr({
                                'stroke': thisSeriesStyles.line[comp].color,
                                'stroke-width': thisSeriesStyles.line[comp].width,
                                'stroke-opacity': getAlpha(thisSeriesStyles.line[comp].color, thisSeriesStyles.line[comp].opacity)
                            });

                            self.overItem = null;
                        }
                    });
                    group.mousemove(function(_e){
                        var graphTop = styles.main.layout._graphtop;
                        var graphHeight = graphTop;
                        var lastSeriesKey = '';
                        for(var i in styles) {
                            lastSeriesKey = i;
                        }
                        for(i in styles) {
                            var tLayout = styles[i].layout;

                            if(i === lastSeriesKey) {
                                if(i === 'main') {
                                    graphHeight = graphHeight + tLayout._graphheightpx;
                                } else {

                                    graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                }
                            }
                        }
                        // moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, 0, GRAPH_WIDTH, CHART_HEIGHT, 1),
                        moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                            getMousePosition(_e),
                            vCross, hCross,
                            {x: Math.round(overData.shape.x) - 1, y: Math.round(overData.shape.y) - 2},
                            options.use.magnet);

                    }).click(function(_e) {
                        if(overData == null) {
                            overData = thisData.data[this.data('idx')];
                        }
                        if(options.func.itemClick != null) {
                            eval(options.func.itemClick(overData));
                        }
                    });


                    if(TOUCHDEVICE) {
                        group.unmouseup().mouseup(function(_e) {

                            overData = thisData.data[this.data('idx')], comp = this.data('comp');

                            mouseOverSeriesKey = _serieskey;

                            if(options.use.tip && _e.isItemOver != false) {
                                showToolTip(options.func.tip, overData, overData.shape.x, overData.shape.high, series);
                            }

                            if(options.use.selectItem){
                                if(self.overItem != null && self.overItem[0] != null) {
                                    var overComp = self.overItem.data('comp');
                                    self.overItem.attr({
                                        'fill': getFillStyle(overData.shape.width, thisSeriesStyles.area[overComp].color, thisSeriesStyles.gradient.direction, count),
                                        'fill-opacity': getAlpha(thisSeriesStyles.area[overComp].color, thisSeriesStyles.area[overComp].opacity),
                                        'stroke': thisSeriesStyles.line[overComp].color,
                                        'stroke-width': thisSeriesStyles.line[overComp].width,
                                        'stroke-opacity': getAlpha(thisSeriesStyles.line[overComp].width, thisSeriesStyles.line[overComp].opacity)
                                    });
                                }
                                this.attr({
                                    'stroke': thisSeriesStyles.line[comp].over.color,
                                    'stroke-width': thisSeriesStyles.line[comp].over.width,
                                    'stroke-opacity': getAlpha(thisSeriesStyles.line[comp].over.color, thisSeriesStyles.line[comp].over.opacity)
                                });

                                self.overItem = this;
                            }
                        });
                    }

                    self.elementGroup = elementGroups;
                    self.elementNodes = elementGroups;

                };
                /**
                 * 시리즈 그리기 : 시계열 사용시 : 바시리즈는 시계열 없음.
                 * @param  {Number} _index    시리즈가 그려질 시작(Y) 위치
                 * @param  {Number} _stopIndex 그려지는 아이템의 개수
                 *                             시계열에서 조정에 따라 개수가 달라질수 있음.
                 * @return null
                 */
                self.drawTimeSlice = function(_index, _stopIndex){

                    if(_index == 0) {
                        elementGroups = [];
                    }

                    var data = thisData.data, count = data.length;
                    var w = data[_index].shape.width;
                    var access_width = w > 10 ? 10 : w, access_half = access_width / 2;
                    var access_y = GRAPH_TOP + GRAPH_HEIGHT - access_width + 0.5;

                    for(var i = _index; i < _stopIndex; i ++){
                        var value = data[i], comp = value.comp;
                        if($.trim(value.xaxis) == '' && $.trim(value.yaxis) == '' ) continue;
                        var shape = value.shape;
                        var item = null;
                        var strokewidth = thisSeriesStyles.line[comp].width,
                            strokecolor = thisSeriesStyles.line[comp].color,
                            strokealpha = getAlpha(thisSeriesStyles.line[comp].color, thisSeriesStyles.line[comp].opacity);

                        item = drawFillRectangle(shape, strokewidth, strokecolor, strokealpha);

                        item.data({
                            'idx': i,
                            'comp': comp
                        });

                        elementGroup.unshift(item);
                        elementGroups.unshift(item);
                    }
                    if(thisSeriesStyles.accessibility.use){
                        var fsStyles = getStyles('hloc', thisSeriesStyles, w, count);
                        fsStyles.accessibilitystyle = thisSeriesStyles.accessibility.style;
                        drawAccessibility('up', data, fsStyles, comp, GRAPH_TOP, GRAPH_HEIGHT);
                        drawAccessibility('down', data, fsStyles, comp, GRAPH_TOP, GRAPH_HEIGHT);
                        drawAccessibility('flat', data, fsStyles, comp, GRAPH_TOP, GRAPH_HEIGHT);
                    }

                    var group = paper.set(self.elementGroup).hover(function(_e){ // Tooltip

                        overData = thisData.data[this.data('idx')], comp = this.data('comp');

                        mouseOverSeriesKey = _serieskey;

                        if(options.use.tip && _e.isItemOver != false) {

                            showToolTip(options.func.tip, data, data.shape.x, data.shape.high, series);
                        }

                        if(options.use.selectItem){

                            if(self.overItem != null && self.overItem[0] != null) {

                                var overComp = self.overItem.data('comp');

                                self.overItem.attr({
                                    'fill': getFillStyle(overData.shape.width, thisSeriesStyles.area[overComp].color, thisSeriesStyles.gradient.direction, count),
                                    'fill-opacity': getAlpha(thisSeriesStyles.area[overComp].color, thisSeriesStyles.area[overComp].opacity),
                                    'stroke': thisSeriesStyles.line[overComp].color,
                                    'stroke-width': thisSeriesStyles.line[overComp].width,
                                    'stroke-opacity': getAlpha(thisSeriesStyles.line[overComp].width, thisSeriesStyles.line[overComp].opacity)
                                });
                            }

                            this.attr({
                                'stroke': thisSeriesStyles.line[comp].over.color,
                                'stroke-width': thisSeriesStyles.line[comp].over.width,
                                'stroke-opacity': getAlpha(thisSeriesStyles.line[comp].over.color, thisSeriesStyles.line[comp].over.opacity)
                            });

                            self.overItem = this;
                        }
                    }, function(){
                        if(options.use.selectItem && overData != null){
                            if(this.type == undefined) return;

                            comp = this.data('comp');

                            this.attr({
                                'stroke': thisSeriesStyles.line[comp].color,
                                'stroke-width': thisSeriesStyles.line[comp].width,
                                'stroke-opacity': getAlpha(thisSeriesStyles.line[comp].color, thisSeriesStyles.line[comp].opacity)
                            });

                            self.overItem = null;
                        }
                    });
                    group.unmousemove().mousemove(function(_e){
                        if(overData == null) return;

                        var graphTop = styles.main.layout._graphtop;
                        var graphHeight = graphTop;
                        var lastSeriesKey = '';

                        for(var i in styles) {
                            lastSeriesKey = i;
                        }

                        for(i in styles) {
                            var tLayout = styles[i].layout;

                            if(i === lastSeriesKey) {
                                if(i === 'main') {
                                    graphHeight = graphHeight + tLayout._graphheightpx;
                                } else {

                                    graphHeight = tLayout._canvastop + tLayout._graphheightpx;
                                }
                            }
                        }
                        moveCrossLine(getRectangle(TYPE, GRAPH_LEFT, graphTop, GRAPH_WIDTH, graphHeight, 1),
                            getMousePosition(_e),
                            vCross, hCross,
                            {x: Math.round(overData.shape.x) - 1, y: Math.round(overData.shape.y) - 2},
                            options.use.magnet);
                    }).unclick().click(function(_e) {
                        if(overData == null) {
                            overData = thisData.data[this.data('idx')];
                        }
                        if(options.func.itemClick != null) {
                            eval(options.func.itemClick(overData));
                        }
                    });
                    self.elementGroup = elementGroups;
                    self.elementNodes = elementGroups;
                };
                // Rectangle Fill
                /**
                 * 실제로 아이템을 만들고 색상을 입히는 함수
                 * @param  {Object} _shape 아이템의 위치값
                 * @param  {Number} _sw    선 두께
                 * @param  {String} _sc    선 색상
                 * @param  {Number} _sa    선 투명도
                 * @return {Node}        생성된 SVG 노드
                 */
                var drawFillRectangle = function(_shape, _sw, _sc, _sa){
                    //shape.x, shape.y, shape.width, shape.low, shape.open, shape.close
                    var _x = _shape.x;
                    var _y = _shape.y;
                    var _w = _shape.width;
                    var _h = _shape.low;
                    var _open = _shape.open;
                    var _close = _shape.close;

                    var rp = getLine(TYPE, _x, _y, _w, _h);
                    var rect = null;
                    var path = "M"+(rp.x1)+","+rp.y1+','+(rp.x1) + ','+(rp.y2)
                        + "M"+(rp.x1)+","+getPointPath(TYPE, _open) +','+getPointPath(TYPE, rp.x1-(_w/2)) + ','+getPointPath(TYPE, _open)
                        + "M"+(rp.x1)+","+getPointPath(TYPE, _close)+','+getPointPath(TYPE, rp.x1+(_w/2)) + ','+getPointPath(TYPE, _close);
                    if(options.use.animate && TYPE !== "VML"){
                        var fpath   = "M"+rp.x1+","+(GRAPH_HEIGHT)+','+(rp.x1) + ','+(GRAPH_HEIGHT)
                            + "M"+(rp.x1)+","+(GRAPH_HEIGHT)+','+(rp.x1-(_w/2)) + ','+(GRAPH_HEIGHT)
                            + "M"+(rp.x1)+","+(GRAPH_HEIGHT)+','+(rp.x1+(_w/2)) + ','+(GRAPH_HEIGHT);
                        rect = paper.path(fpath).attr({'stroke-width': _sw, 'stroke': _sc, 'stroke-opacity': _sa});

                        rect.stop().animate({'path': path}, options.animate.speed, options.animate.type);
                    } else {
                        rect = paper.path(path).attr({'stroke-width': _sw, 'stroke': _sc, 'stroke-opacity': _sa});
                    }

                    return rect;
                };

                return self;
            };
            /**
             * 크로스라인 숨기기
             * @return null
             */
            var hideCrossLine = function(){
                if(vCross != null && (options.use.vCrossLine || options.use.aCrossLine)){
                    vCross.animate({'opacity': 0}, 1);
                }
                if(hCross != null && (options.use.hCrossLine || options.use.aCrossLine)){
                    hCross.animate({'opacity': 0}, 1);
                }
            };
            /**
             * 크로스라인 삭제
             * @return null
             */
            var removeCrossLine = function(){
                if(vCross != null && (options.use.vCrossLine || options.use.aCrossLine)){
                    vCross.remove();
                    vCross = null;
                }
                if(hCross != null && (options.use.hCrossLine || options.use.aCrossLine)){
                    hCross.remove();
                    hCross = null;
                }
            };

            var debounceTimer = null;
            /**
             * 툴팁- 마우스이벤트에 따른 툴팁 위치이동함수에서 사용하는 timer 함수
             * @param  {Function} fn    툴팁 위치이동 callback 함수
             * @param  {Number}   delay 지연시간
             * @return null
             */
            function debounce (fn, delay) {
                return function(){
                    var context = this, args = arguments;
                    clearTimeout(debounceTimer);

                    debounceTimer = setTimeout (function(){
                        fn.apply(context, args);
                    }, delay);
                }
            }
            /**
             * 툴팁- 마우스이벤트에 따른 툴팁 위치이동함수
             * @param  {Function} _functip   사용자지정 툴팁 함수
             * @param  {Object} _data      마우스위치의 아이템 데이터
             * @param  {Number} _x         X 좌표
             * @param  {Number} _y         Y 좌표
             * @param  {Object} thisSeries 마우스 오버된 시리즈
             * @return null
             */
            var showToolTip = function(_functip, _data, _x, _y, thisSeries){

                debounce(function(){

                    if(!mouseLeaveCheck) {
                        return;
                    }
                    if(_functip != null){

                        if(thisSeries){

                            eval(_functip)(tipElement, _data, {x: _x, y: _y}, thisSeries);
                        } else {
                            eval(_functip)(tipElement, _data, {x: _x, y: _y});
                        }
                    } else {
                        var xAxis = _data.xaxis;

                        if(options.format.hasOwnProperty('xAxis') && options.format.xAxis != null) {

                            xAxis = eval(options.format.xAxis)(xAxis);
                        }

                        tipElement.text(xAxis+ " " + String(_data.hasOwnProperty('yaxis') ? _data.yaxis : _data.close).format());

                        var top = _y - tipElement.outerHeight() - 10;
                        var left = (_x) - tipElement.outerWidth()/2;

                        if(top < 0) {

                            top = 10;
                        }

                        if(left < 0) {

                            left = 0;
                        } else if(left + tipElement.outerWidth() > CHART_WIDTH) {

                            left = CHART_WIDTH - tipElement.outerWidth();
                        }
                        if(tipElement.css('display') === 'none')
                            tipElement.css({top: top, left: left}).show();
                        else
                            tipElement.css({top: top, left: left}).show();
                    }
                }, 20)();

            };
            /**
             * X축과 Y축의 위치에서 따라다니는 툴팁 위치이동함수
             * 단일축에서 사용
             * @param  {String} _axis          축 구분자 x, y
             * @param  {Node} _tip           툴팁 DIV
             * @param  {Function} _functip       사용자지정 툴팁 함수
             * @param  {Object} _data          마우스위치의 아이템 데이터
             * @param  {Object} _layout        레이아웃관련 스타일
             * @param  {Number} _x         		X 좌표
             * @param  {Number} _y         		Y 좌표
             * @param  {String} _yAxisPosition Y축 위치
             * @param  {Number} _yAxisGap      Y축 넓이
             * @return null
             */
            var showAxisToolTip = function(_axis, _tip, _functip, _data, _layout, _x, _y, _yAxisPosition, _yAxisGap){

                if(_axis === 'x'){
                    var xAxisText = _data.xaxis;
                    if(_functip != null)
                        xAxisText = eval(_functip)(xAxisText);

                    _tip.text(xAxisText);

                    _tip.show().css({
                        'top': _layout._graphheightpx + _layout._graphtop + 5,
                        'left': _x - (_tip.outerWidth() / 2)
                    });
                } else {
                    var yAxisText = String(_data.hasOwnProperty('yaxis') ? _data.yaxis : _data.close);
                    if(_functip != null)
                        yAxisText = eval(_functip)(yAxisText);
                    else
                        yAxisText = yAxisText.format();

                    _tip.text(yAxisText).show();

                    if(_yAxisPosition == 'left') {
                        _yAxisGap = _yAxisGap - _tip.outerWidth();
                    }

                    _tip.css({
                        'top': _y - (_tip.outerHeight() / 2),
                        'left': _yAxisGap
                    });
                }

            };
            /**************************
             DRAW SHAPE  METHOD
             **************************/
            /**
             * Tick 그리기 공통화 : 이벤트 바인딩까지
             * @param  {Json} _data             DATA 전체
             * @param  {Number} _idx              그려질 Tick의 Index
             * @param  {String} _comp             undefined, up, down, flat
             * @param  {Object} _thisSeriesStyles Series Style Object
             * @param  {Object} _options          Options 전체
             * @param  {String} _serieskey        메인, 서브 등 영역 Key Name
             * @return {Node}                   tick node
             */
            var drawTick = function(_data, _idx, _comp, _thisSeriesStyles, _options, _serieskey){
                var tick = null;

                var tickStyles = _thisSeriesStyles.tick;

                var tickStyle = {
                    'transform'		: 's1,1',
                    'fill'			: tickStyles.area.normal.color,
                    'fill-opacity'	: tickStyles.area.normal.opacity,
                    'stroke'		: tickStyles.line.normal.color,
                    'stroke-width'	: tickStyles.line.normal.width,
                    'stroke-opacity': tickStyles.line.normal.opacity
                };
                var shape = _data[_idx].shape;
                if(_comp != undefined){
                    tickStyle.fill 				= tickStyles.area[_comp].color;
                    tickStyle.opacity 			= tickStyles.area[_comp].opacity;
                    tickStyle.stroke 			= tickStyles.line[_comp].color;
                    tickStyle['stroke-width'] 	= tickStyles.line[_comp].width;
                    tickStyle['stroke-opacity'] = tickStyles.line[_comp].opacity;
                }
                var tickSize = tickStyles.size;

                switch(tickStyles.style){

                    case "square":
                        tick = paper.rect(shape.x - tickSize, shape.y - tickSize, tickSize * 2, tickSize * 2);
                        break;
                    case "triangle":
                        if(_comp != undefined && _comp === 'down') {
                            tick = paper.path('M'+(shape.x - tickSize - 1) + ',' + (shape.y - tickSize) + ','+(shape.x + tickSize + 1) + ',' + (shape.y - tickSize) + ','+(shape.x) + ',' + (shape.y + tickSize) + 'Z');
                        } else {
                            tick = paper.path('M'+(shape.x - tickSize - 1) + ',' + (shape.y + tickSize) + ','+(shape.x + tickSize + 1) + ',' + (shape.y + tickSize) + ','+(shape.x) + ',' + (shape.y - tickSize) + 'Z');
                        }
                        break;
                    case "star":
                        var tickHalf = tickSize / 2;
                        if(tickSize > 0) { tickSize += 1, tickHalf += 1; }
                        tick = paper.path('M'+CalculateStarPoints(shape.x, shape.y, 5, tickSize, tickHalf)+'Z');
                        break;
                    case "diamond":
                        if(tickSize > 0) tickSize += 1;
                        tick = paper.path('M'+shape.x + ',' + (shape.y - tickSize) + ',' + (shape.x - tickSize) + ',' + shape.y + ',' + shape.x + ',' + (shape.y + tickSize) + ',' + (shape.x + tickSize) + ',' + shape.y + 'Z');
                        break;
                    default :
                        tick = paper.circle(shape.x, shape.y, tickSize);
                        break;
                }

                tick.attr(tickStyle);

                if(_data[_idx].yaxis == null || isNaN(_data[_idx].yaxis)) {
                    tick.attr('opacity', 0);
                }

                tick.data('idx', _idx);

                tick.hover(function(e){

                    var data = _data[this.data('idx')];

                    if(data == undefined || !data.hasOwnProperty('comp')) return;

                    var comp = (data.comp && _comp !== undefined) ? data.comp : 'normal';

                    mouseOverSeriesKey = _serieskey;
                    if(options.use.tip && e.isItemOver != false) {

                        showToolTip(options.func.tip, data, data.shape.x, data.shape.y);
                    }
                    if(options.use.selectItem){
                        this.animate({'transform': 's'+tickStyles.overSize+','+tickStyles.overSize,
                            'fill'			: tickStyles.area[comp].over.color,
                            'fill-opacity'	: tickStyles.area[comp].over.opacity,
                            'stroke'		: tickStyles.line[comp].over.color,
                            'stroke-width'	: tickStyles.line[comp].over.width,
                            'stroke-opacity': tickStyles.line[comp].over.opacity
                        }, 100);
                    }

                }, function(){

                    var data = _data[this.data('idx')];

                    if(data == undefined || !data.hasOwnProperty('comp')) return;

                    var comp = (data.comp && _comp !== undefined) ?  data.comp : 'normal';
                    if(options.use.selectItem){
                        this.animate({'transform': 's1,1',
                            'fill'			: tickStyles.area[comp].color,
                            'fill-opacity'	: tickStyles.area[comp].opacity,
                            'stroke'		: tickStyles.line[comp].color,
                            'stroke-width'	: tickStyles.line[comp].width,
                            'stroke-opacity': tickStyles.line[comp].opacity
                        }, 100);
                    }
                });

                if(options.func.tickClick != null) {
                    tick.click(function(){
                        eval(options.func.tickClick)(this, _data[_idx]);
                    });
                }



                return tick;
            };
            /**
             * Tick 그리기 공통화 : 이벤트 없음
             * @param  {Json} _data             DATA 전체
             * @param  {Number} _idx              그려질 Tick의 Index
             * @param  {String} _comp             undefined, up, down, flat
             * @param  {Object} _thisSeriesStyles Series Style Object
             * @param  {Object} _options          Options 전체
             * @param  {String} _serieskey        메인, 서브 등 영역 Key Name
             * @return {Node}                   tick node
             */
            var drawTickNoEvent = function(_data, _idx, _comp, _thisSeriesStyles, _options, _serieskey){
                var tick = null;

                var tickStyles = _thisSeriesStyles.tick;

                var tickStyle = {
                    'transform'		: 's1,1',
                    'fill'			: tickStyles.area.normal.color,
                    'fill-opacity'	: tickStyles.area.normal.opacity,
                    'stroke'		: tickStyles.line.normal.color,
                    'stroke-width'	: tickStyles.line.normal.width,
                    'stroke-opacity': tickStyles.line.normal.opacity
                };
                var shape = _data[_idx].shape;

                if(_comp != undefined){
                    tickStyle.fill 				= tickStyles.area[_comp].color;
                    tickStyle['fill-opacity']	= tickStyles.area[_comp].opacity;
                    tickStyle.stroke 			= tickStyles.line[_comp].color;
                    tickStyle['stroke-width'] 	= tickStyles.line[_comp].width;
                    tickStyle['stroke-opacity'] = tickStyles.line[_comp].opacity;
                }

                if(_data[_idx].yaxis != null) {
                    var tickSize = tickStyles.size;
                    switch(tickStyles.style){

                        case "square":
                            tick = paper.rect(shape.x - tickSize, shape.y - tickSize, tickSize * 2, tickSize * 2);
                            break;
                        case "triangle":
                            if(_comp != undefined && _comp === 'down') {
                                tick = paper.path('M'+(shape.x - tickSize - 1) + ',' + (shape.y - tickSize) + ','+(shape.x + tickSize + 1) + ',' + (shape.y - tickSize) + ','+(shape.x) + ',' + (shape.y + tickSize) + 'Z');
                            } else {
                                tick = paper.path('M'+(shape.x - tickSize - 1) + ',' + (shape.y + tickSize) + ','+(shape.x + tickSize + 1) + ',' + (shape.y + tickSize) + ','+(shape.x) + ',' + (shape.y - tickSize) + 'Z');
                            }
                            break;
                        case "star":
                            var tickHalf = tickSize / 2;
                            if(tickSize > 0) { tickSize += 1, tickHalf += 1; }
                            tick = paper.path('M'+CalculateStarPoints(shape.x, shape.y, 5, tickSize, tickHalf)+'Z');
                            break;
                        case "diamond":
                            if(tickSize > 0) tickSize += 1;
                            tick = paper.path('M'+shape.x + ',' + (shape.y - tickSize) + ',' + (shape.x - tickSize) + ',' + shape.y + ',' + shape.x + ',' + (shape.y + tickSize) + ',' + (shape.x + tickSize) + ',' + shape.y + 'Z');
                            break;
                        default :
                            tick = paper.circle(shape.x, shape.y, tickSize);
                            break;
                    }
                    tick.data('idx', _idx);

                    tick.attr(tickStyle);

                    if(_data[_idx].yaxis == null || isNaN(_data[_idx].yaxis)) {
                        tick.attr('opacity', 0);
                    }

                    if(options.func.tickClick != null) {
                        tick.click(function(){
                            eval(options.func.tickClick)(this, _data[_idx]);
                        });
                    }
                }

                return tick;
            };
            /**
             * 접근성 도형 그리기 : BarSeries 제외
             * @param  {String} _comp      up, down, flat
             * @param  {Json} _data      DATA 전체
             * @param  {Object} styles     Series Style Object
             * @param  {Number} top        시리즈 시작 Y 위치
             * @param  {Number} height     시리즈 영역 높이
             * @param  {Number} _index     그려질 접근성 아이템의 index
             * @param  {Number} _stopIndex 그려질 접근성 아이템의 개수
             * @param  {[type]} _type      undefined 이면 아이템 넓이의 가운데를 구하며 값이 있으면 0으로 처리
             *                             hloc에서 사용
             * @return null
             */
            var drawAccessibility = function(_comp, _data, styles, top, height, _index, _stopIndex, _type){
                var data = _data, count = data.length;

                var w = data[0].shape.width;
                var access_center = _type == undefined ? w / 2 : 0;
                var access_width = w > 10 ? 10 : w, access_half = access_width / 2;
                var access_y = top + height - access_width + 0.5;

                var path, item = null;
                var y1 = getPointPath(TYPE, access_y);
                var y2 = getPointPath(TYPE, access_y - access_half), y3 = getPointPath(TYPE, access_y + access_half);
                var start = _index != undefined ? _index : 0;
                var stop = _stopIndex != undefined ? _stopIndex : count;
                switch(styles.accessibilitystyle || styles.accessibility.style){
                    case "normal":
                        path = "";
                        for(var i = start; i < stop; i++){
                            var value = data[i], shape = value.shape, comp = value.comp;
                            if(value.xaxis == '' || value.xaxis == ' ' || value.xaxis == undefined) return;
                            var x1 = getPointPath(TYPE, shape.x + access_center - access_half);
                            var x2 = getPointPath(TYPE, shape.x + access_center + access_half);
                            if(comp == _comp && comp === 'up'){
                                path += 'M' + x1 + ',' + y1 + ',' + x2 + ',' + y1 + 'M' + getPointPath(TYPE, shape.x + access_center) + ',' + y2 + ',' + getPointPath(TYPE, shape.x + access_center) + ',' +y3;
                            } else if(comp == _comp && comp === 'down') {
                                path += 'M' + x1 + ',' + access_y + ',' + x2 + ',' + access_y;
                            } else if(comp == _comp && comp === 'flat')  {

                            }
                        }
                        var strokecolor = undefined;
                        if(styles.hasOwnProperty(_comp + 'strokecolor')){
                            strokecolor = styles[_comp + 'strokecolor'] != "" ? styles[_comp + 'strokecolor'] : styles[_comp + 'fillcolor'];
                        } else {
                            strokecolor = styles.line[_comp].color != "" ? styles.line[_comp].color :  styles.area[_comp].color;
                        }
                        var strokewidth = 1;
                        if(styles.hasOwnProperty(_comp + 'strokewidth')){
                            strokewidth = styles[_comp + 'strokewidth'] > 0 ? styles[_comp + 'strokewidth'] : 1;
                        } else {
                            strokewidth = styles.line[_comp].width > 0 ? styles.line[_comp].width : 1;
                        }
                        if(path != "") {
                            item = paper.path(path).attr({
                                'stroke': strokecolor,
                                'stroke-width': strokewidth,
                                'stroke-opacity': styles[_comp + 'strokealpha'] || styles.line[_comp].opacity
                            });
                        }

                        break;
                    case 'triangle':
                        path = "";
                        for(var i = start; i < stop; i++){
                            var value = data[i], shape = value.shape, comp = value.comp;

                            if(value.xaxis == '' || value.xaxis == ' ' || value.xaxis == undefined) return;

                            var x1 = getPointPath(TYPE, shape.x + access_center - access_half);
                            var x2 = getPointPath(TYPE, shape.x + access_center + access_half);

                            if(comp == _comp && comp === 'up'){
                                path += 'M' + x1 + ',' + y3 + ',' + x2 + ',' + y3 + ',' + (shape.x + access_center) + ',' + y2 + 'Z';
                            } else if(comp == _comp && comp === 'down') {
                                path += 'M' + x1 + ',' + (y2 + 1) + ',' + x2 + ',' + (y2 + 1) + ',' + (shape.x + access_center) + ',' +( y3 + 1) + 'Z';
                            } else if(comp == _comp && comp === 'flat')  {
                                //path += 'M' + x1 + ',' + access_y + ',' + x2 + ',' + access_y;
                            }
                        }
                        if(path != "") {
                            if(styles.area == undefined && styles.line == undefined){
                                item = paper.path(path).attr({
                                    'fill': styles[_comp + 'fillcolor'],
                                    'fill-opacity': styles[_comp + 'fillalpha'],
                                    'stroke': styles[_comp + 'strokecolor'],
                                    'stroke-width': styles[_comp + 'strokewidth'],
                                    'stroke-opacity': styles[_comp + 'strokealpha']});
                            } else {
                                item = paper.path(path).attr({
                                    'fill': styles.area[_comp].color,
                                    'fill-opacity': styles.area[_comp].opacity,
                                    'stroke': styles.line[_comp].color,
                                    'stroke-width': styles.line[_comp].width,
                                    'stroke-opacity': styles.line[_comp].opacity});
                            }
                        }

                        break;
                }
                if(item != null) {
                    elementGroup.unshift(item);
                }
            };
            // 접근성 코드 BarSeries
            /**
             * 접근성 도형 그리기 : BarSeries만
             * @param  {String} _comp      up, down, flat
             * @param  {Json} _data      DATA 전체
             * @param  {Object} styles     Series Style Object
             * @param  {Number} left   시리즈 시작 X 위치
             * @return null
             */
            var drawAccessibilityBar = function(_comp, _data, styles, left){
                var data = _data, count = data.length;
                var h = data[0].shape.height;
                var access_center = h / 2;
                var access_height = h > 10 ? 10 : h, access_half = Math.round(access_height / 2);
                var access_x = left + 0.5;// - thisStyles.graph.paddingLeft + 0.5;

                var path, item = null;
                var x1 = getPointPath(TYPE, access_x);// + access_half + access_center - access_half);
                var x2 = getPointPath(TYPE, access_x +access_height);// + access_half + access_center + access_half);
                var start = 0;
                var stop = count;
                switch(styles.accessibilitystyle || styles.accessibility.style){
                    case "normal":
                        for(var i = start; i < stop; i++){
                            var value = data[i], shape = value.shape, comp = value.comp;
                            var y1 = getPointPath(TYPE, Math.round(shape.y + shape.height/2) + 0.5, 'bar');
                            var y2 = getPointPath(TYPE, y1 - access_half, 'bar'), y3 = getPointPath(TYPE, y1 + access_half, 'bar');
                            if(comp == _comp && comp === 'up'){
                                path += 'M' + x1 + ',' + y1 + ',' + x2 + ',' + y1 + ',M' + getPointPath(TYPE, access_x + access_half + access_center, 'bar') + ',' + y2 + ',' + getPointPath(TYPE, access_x + access_half + access_center, 'bar') + ',' +y3;
                            } else if(comp == _comp && comp === 'down') {
                                path += 'M' + x1 + ',' + y1 + ',' + x2 + ',' + y1;
                            } else if(comp == _comp && comp === 'flat')  {

                            }
                        }
                        var strokecolor = undefined;
                        if(styles.hasOwnProperty(_comp + 'strokecolor')){
                            strokecolor = styles[_comp + 'strokecolor'] != "" ? styles[_comp + 'strokecolor'] : styles[_comp + 'fillcolor'];
                        } else {
                            strokecolor = styles.line[_comp].color != "" ? styles.line[_comp].color :  styles.area[_comp].color;
                        }
                        var strokewidth = 1;
                        if(styles.hasOwnProperty(_comp + 'strokewidth')){
                            strokewidth = styles[_comp + 'strokewidth'] > 0 ? styles[_comp + 'strokewidth'] : 1;
                        } else {
                            strokewidth = styles.line[_comp].width > 0 ? styles.line[_comp].width : 1;
                        }
                        item = paper.path(path).attr({
                            'stroke': strokecolor,
                            'stroke-width': strokewidth,
                            'stroke-opacity': styles[_comp + 'strokealpha'] || styles.line[_comp].opacity
                        });
                        break;
                    case 'triangle':
                        for(var i = start; i < stop; i++){
                            var value = data[i], shape = value.shape, comp = value.comp;
                            var y1 = getPointPath(TYPE, Math.round(shape.y + shape.height/2) + 0.5, 'bar');
                            var y2 = getPointPath(TYPE, y1 - access_half, 'bar'), y3 = getPointPath(TYPE, y1 + access_half, 'bar');
                            if(comp == _comp && comp === 'up'){
                                path += 'M' + x1 + ',' + y3 + ',' + x2 + ',' + y3 + ',' + (access_x + access_half) + ',' + y2 + ' Z';
                            } else if(comp == _comp && comp === 'down') {
                                path += 'M' + x1 + ',' + y2 + ',' + x2 + ',' + y2 + ',' + (access_x + access_half) + ',' + y3 + ' Z';
                            } else if(comp == _comp && comp === 'flat')  {
                                path += 'M' + x1 + ',' + y1 + ',' + x2 + ',' + y1;
                            }
                        }
                        if(styles.area == undefined && styles.line == undefined){
                            item = paper.path(path).attr({
                                'fill': styles[_comp + 'fillcolor'],
                                'fill-opacity': styles[_comp + 'fillalpha'],
                                'stroke': styles[_comp + 'strokecolor'],
                                'stroke-width': styles[_comp + 'strokewidth'],
                                'stroke-opacity': styles[_comp + 'strokealpha']});
                        } else {
                            item = paper.path(path).attr({
                                'fill': styles.area[_comp].color,
                                'fill-opacity': styles.area[_comp].opacity,
                                'stroke': styles.line[_comp].color,
                                'stroke-width': styles.line[_comp].width,
                                'stroke-opacity': styles.line[_comp].opacity});
                        }
                        break;
                }
                elementGroup.unshift(item);
            };
            // Timer
            var waitForFinalEvent = (function () {
                var timers = {};
                return function (callback, ms, uniqueId) {
                    if (!uniqueId) {
                        uniqueId = "Don't call this twice without a uniqueId";
                    }
                    if (timers[uniqueId]) {
                        clearTimeout (timers[uniqueId]);
                    }
                    timers[uniqueId] = setTimeout(callback, ms);
                };
            })();

            if(!options.use.stock) loadData(options, element);

            _selector[0].instance = element;

            if (TRIAL_UI) {

                appendTrialUi(_selector);
            }

            /**
             license object chart 에 추가(ver.150915 평다진)
             */
            element.license = licenseObject;

            /**
             return 이 되고 나서 COMPLETE 이벤트 발생시키기 위해 timeout 적용
             (ver.151012  평다진)
             */
            setTimeout(function(){

                element.event.trigger(EVENT.COMPLETE, [element]);
                _selector.trigger(EVENT.COMPLETE, [element]);
            }, 100);


            return element;
        };


        // Get styles
        /**
         * 시리즈 아이템의 색상에 대한 모든 스타일을 가져옴.
         * @param  {String} _seriesType  시리즈종류 : column, line, area...
         * @param  {Object} _styles      시리즈의 스타일
         * @param  {Number} _w           아이템의 넓이 : 이미지가 사용된 경우 특정 넓이 이하일때 이미지를 사용하지 않게 하기 위함.
         * @param  {Number} _count       데이터 갯수
         * @param  {Number} _itemfillidx 아이템별로 색상이 정의된 경우 아이템의 index
         * @return {Object}              적용된 최종 시리즈 스타일
         */
        var getStyles = function(_seriesType, _styles, _w, _count, _itemfillidx){
            var gradient = _styles.gradient.direction;
            var styles = {};
            var areaStyles = _styles.area;
            var lineStyles = _styles.line;
            if(_itemfillidx == undefined){
                if(areaStyles.normal != undefined){
                    styles['fillcolor'] 		= getFillStyle(_w, areaStyles.normal.color, 		gradient, _count, '',     _seriesType) || 'none';
                    styles['overfillcolor'] 	= getFillStyle(_w, areaStyles.normal.over.color, 	gradient, _count, 'over', _seriesType) || 'none';
                }
                styles['upfillcolor'] 			= getFillStyle(_w, areaStyles.up.color, 		gradient, _count, '', 	  _seriesType) || 'none';
                styles['downfillcolor'] 		= getFillStyle(_w, areaStyles.down.color, 		gradient, _count, '', 	  _seriesType) || 'none';
                styles['flatfillcolor'] 		= getFillStyle(_w, areaStyles.flat.color, 		gradient, _count, '', 	  _seriesType) || 'none';
                styles['overupfillcolor'] 		= getFillStyle(_w, areaStyles.up.over.color, 	gradient, _count, 'over', _seriesType) || 'none';
                styles['overdownfillcolor'] 	= getFillStyle(_w, areaStyles.down.over.color, 	gradient, _count, 'over', _seriesType) || 'none';
                styles['overflatfillcolor'] 	= getFillStyle(_w, areaStyles.flat.over.color, 	gradient, _count, 'over', _seriesType) || 'none';
            } else {
                styles['fillcolor'] = styles['upfillcolor'] = styles['downfillcolor'] = getFillStyle(_w, areaStyles.items[_itemfillidx].color, gradient, _count) || 'none';
                styles['flatfillcolor'] 		= getFillStyle(_w, areaStyles.flat.color, gradient, _count) || 'none';
                if(areaStyles.items[_itemfillidx].over == null){
                    styles['overfillcolor'] = styles['overupfillcolor'] = styles['overdownfillcolor'] = getFillStyle(_w, areaStyles.normal.color,	gradient, _count, 'over') || 'none';
                    styles['overflatfillcolor'] 	= getFillStyle(_w, areaStyles.flat.color, gradient, _count, 'over') || 'none';
                } else {
                    styles['overfillcolor'] = styles['overupfillcolor'] = styles['overdownfillcolor']	= getFillStyle(_w, areaStyles.items[_itemfillidx].over.color, gradient, _count, 'over') || 'none';
                    styles['overflatfillcolor'] 	= getFillStyle(_w, areaStyles.flat.color, gradient, _count, 'over') || 'none';
                }

            }
            if(_itemfillidx == undefined || _styles.line.items == null){
                if(lineStyles.normal != undefined){

                    styles['strokewidth'] 		 	= Number(lineStyles.normal.width) 		|| 0;
                    styles['overstrokewidth'] 	 	= Number(lineStyles.normal.over.width) 	|| 0;
                    styles['strokecolor'] 		  	= (styles['strokewidth'])? 			(lineStyles.normal.color 		|| 'none') : 'none';
                    styles['overstrokecolor'] 	  	= (styles['overstrokewidth'])? 		(lineStyles.normal.over.color 	|| 'none') : 'none';
                }
                styles['upstrokewidth'] 	 	= lineStyles.up.width 			|| 0;
                styles['downstrokewidth'] 	 	= lineStyles.down.width 		|| 0;
                styles['flatstrokewidth'] 	 	= lineStyles.flat.width 		|| 0;
                styles['overupstrokewidth']  	= lineStyles.up.over.width 		|| 0;
                styles['overdownstrokewidth'] 	= lineStyles.down.over.width 	|| 0;
                styles['overflatstrokewidth'] 	= lineStyles.flat.over.width 	|| 0;

                styles['upstrokecolor'] 	  	= (styles['upstrokewidth'])? 		(lineStyles.up.color 			|| 'none') : 'none';
                styles['downstrokecolor'] 	  	= (styles['downstrokewidth'])? 		(lineStyles.down.color 			|| 'none') : 'none';
                styles['flatstrokecolor'] 	  	= (styles['flatstrokewidth'])? 		(lineStyles.flat.color 			|| 'none') : 'none';
                styles['overupstrokecolor']   	= (styles['overupstrokewidth'])? 	(lineStyles.up.over.color 		|| 'none') : 'none';
                styles['overdownstrokecolor'] 	= (styles['overdownstrokewidth'])? 	(lineStyles.down.over.color 	|| 'none') : 'none';
                styles['overflatstrokecolor'] 	= (styles['overflatstrokewidth'])? 	(lineStyles.flat.over.color 	|| 'none') : 'none';
            } else {
                styles['strokewidth'] 		 	=  styles['upstrokewidth'] 	 	    = styles['downstrokewidth'] 	 	= lineStyles.items[_itemfillidx].width 			|| 0;
                styles['flatstrokewidth'] 	 	= lineStyles.flat.width 			|| 0;
                styles['overstrokewidth'] 	 	=  styles['overupstrokewidth']  	=  styles['overdownstrokewidth'] 	= lineStyles.items[_itemfillidx].over.width 		|| 0;
                styles['overflatstrokewidth'] 	= lineStyles.flat.over.width 		|| 0;

                styles['strokecolor'] = styles['upstrokecolor'] = styles['downstrokecolor'] = lineStyles.items[_itemfillidx].color || 'none';
                styles['flatstrokecolor'] 	  	= lineStyles.flat.color 		|| 'none';
                if(lineStyles.items[_itemfillidx].over == null){
                    styles['overstrokecolor'] = styles['overupstrokecolor'] = styles['overdownstrokecolor'] = lineStyles.normal.over.color || 'none';
                    styles['overflatstrokecolor'] 	= lineStyles.flat.over.color 	|| 'none';
                } else {
                    styles['overstrokecolor'] = styles['overupstrokecolor'] = styles['overdownstrokecolor'] = lineStyles.items[_itemfillidx].over.color || 'none';
                    styles['overflatstrokecolor'] 	= lineStyles.flat.color 	|| 'none';
                }
            }
            if(areaStyles.normal != undefined){
                styles['fillalpha'] 			= getAlpha(areaStyles.normal.color, 		areaStyles.normal.opacity) 		|| 1;
                styles['overfillalpha'] 		= getAlpha(areaStyles.normal.over.color, 	areaStyles.normal.over.opacity) || 1;
            }
            if(lineStyles.normal != undefined){
                styles['strokealpha'] 			= (lineStyles.normal.hasOwnProperty('opacity')) ? 		getAlpha(lineStyles.normal.color, 		lineStyles.normal.opacity) 		: 1;
                styles['overstrokealpha'] 		= (lineStyles.normal.over.hasOwnProperty('opacity')) ? 	getAlpha(lineStyles.normal.over.color, 	lineStyles.normal.over.opacity) : 1;
            }

            styles['upfillalpha'] 			= getAlpha(areaStyles.up.color, 		areaStyles.up.opacity) 		|| 1;
            styles['overupfillalpha'] 		= getAlpha(areaStyles.up.over.color, 	areaStyles.up.over.opacity) || 1;

            styles['upstrokealpha'] 		= (lineStyles.up.hasOwnProperty('opacity')) ? 		getAlpha(lineStyles.up.color, 		lineStyles.up.opacity) 		: 1;
            styles['overupstrokealpha'] 	= (lineStyles.up.over.hasOwnProperty('opacity')) ? 	getAlpha(lineStyles.up.over.color, 	lineStyles.up.over.opacity) : 1;

            styles['downfillalpha'] 		= getAlpha(areaStyles.down.color, 		areaStyles.down.opacity) 		|| 1;
            styles['overdownfillalpha'] 	= getAlpha(areaStyles.down.over.color, 	areaStyles.down.over.opacity) 	|| 1;

            styles['downstrokealpha'] 		= (lineStyles.down.hasOwnProperty('opacity')) ? 		getAlpha(lineStyles.down.color, 		lineStyles.down.opacity) 		: 1;
            styles['overdownstrokealpha'] 	= (lineStyles.down.over.hasOwnProperty('opacity')) ? 	getAlpha(lineStyles.down.over.color, 	lineStyles.down.over.opacity) 	: 1;

            styles['flatfillalpha'] 		= getAlpha(areaStyles.flat.color, 		areaStyles.flat.opacity) 		|| 1;
            styles['overflatfillalpha'] 	= getAlpha(areaStyles.flat.over.color, 	areaStyles.flat.over.opacity)	|| 1;

            styles['flatstrokealpha'] 		= (lineStyles.flat.hasOwnProperty('opacity')) ? 		getAlpha(lineStyles.flat.color, 		lineStyles.flat.opacity) 		: 1;
            styles['overflatstrokealpha'] 	= (lineStyles.flat.over.hasOwnProperty('opacity')) ? 	getAlpha(lineStyles.flat.over.color, 	lineStyles.flat.over.opacity) 	: 1;

            return styles;
        };
        /**
         * 면 색상에 대한 스타일 구분
         * 이미지, 그라디언트, 단색 여부에 따라 변환작업이 필요함.
         * @param  {Number} _w                 아이템 넓이
         * @param  {Object} _fillstyle       	적용될 스타일
         * @param  {String} _gradientDirection 그라데이션 방향
         * @param  {Number} _count             데이터의 총 개수
         * @param  {String} _state             마우스 오버된 상태인지 아닌지 'over' | undefined
         * @param  {String} _seriesType        시리즈 종류 : area, column...
         * @return {String}                    변환된 색상값
         */
        var getFillStyle = function(_w, _fillstyle, _gradientDirection, _count, _state, _seriesType){
            var fillcolor = '';

            if(typeof _fillstyle == 'object') {
                if(!_fillstyle.hasOwnProperty('src')){ // Gradient
                    if(_gradientDirection === 'horizontal') fillcolor = '0';
                    else fillcolor = '90';

                    for(var j = 0, len = _fillstyle.length; j < len; j++){
                        var color = _fillstyle[j];
                        if(color[0] == 0 || color[0] == 100) {
                            fillcolor += "-" + color[1];
                        } else {

                            fillcolor += "-" + color[1] + ":" + color[0];
                        }
                    }

                } else { // Pattern
                    if(_seriesType === 'area' || _count <= 20 || (_w > 4 && _count > 20 && _state !== 'over') || _state === 'over'){
                        fillcolor = 'url('+_fillstyle.src+')';
                    }else{
                        fillcolor = _fillstyle.color;
                    }
                }
            } else {
                fillcolor = _fillstyle;
            }
            return fillcolor;
        };
        /**
         * 투명도 값 체크 : 색상값이 object 형이면 투명도는 무조건 1이다.
         * @param  {String} _color 색상 스타일
         * @param  {Number} _alpha 투명도
         * @return {Number}        투명도
         */
        var getAlpha = function(_color, _alpha){
            var alpha = 1;
            if(typeof _color == 'object') 	{ return alpha; }
            else 							{ return _alpha; }
        };
        /**
         * 십자선(CrossLine) 생성
         * @param  {Element} _paper   raphael element
         * @param  {Number} _x       x좌표
         * @param  {Number} _y       y좌표
         * @param  {Number} _w       넓이
         * @param  {Number} _h       높이
         * @param  {Object} _options 옵션:십자선 사용유무 체크하기 위함
         * @param  {Object} _styles  스타일:십자선 스타일 값 이용
         * @return {Nodes}          생성된 십자선 Node
         */
        var createCrossLine = function(_paper, _x, _y, _w, _h, _options, _styles){
            var vCross = null, hCross = null;
            if(_options.use.vCrossLine || _options.use.aCrossLine){
                vCross = _paper.path("M"+(_x) +','+(_y)+","+ (_x)+','+(_y+_h))
                    .attr({
                        'stroke': _styles.crossLine.color,
                        'stroke-width': _styles.crossLine.width,
                        'stroke-dasharray': _styles.crossLine.style,
                        'fill': undefined,
                        'opacity': 0
                    });
            }
            if(_options.use.hCrossLine || _options.use.aCrossLine){
                hCross = _paper.path("M"+(_x) +','+(_y)+","+ (_x+_w)+','+(_y))
                    .attr({
                        'stroke': _styles.crossLine.color,
                        'stroke-width': _styles.crossLine.width,
                        'stroke-dasharray': _styles.crossLine.style,
                        'fill': undefined,
                        'opacity': 0
                    });
            }
            return {cross_v: vCross, cross_h: hCross};
        };
        /**
         * 십자선(CrossLine) 이동시에 속성 변화
         * @param  {Object} _rect     rectangle 형태의 값{x,y,width,height}
         * @param  {Object} _point    마우스 좌표
         * @param  {Node} _vCross   크로스라인 중 세로선
         * @param  {Node} _hCross   크로스라인 중 가로선
         * @param  {Object} _shape    아이템의 위치 관련 데이터
         * @param  {Boolean} _isMagnet 자석 형태로 십자선을 쓰려고 하면 true가 들어옴.
         * @return null
         */
        var moveCrossLine = function(_rect, _point, _vCross, _hCross, _shape, _isMagnet){
            var x = _point.x, y = _point.y;
            if(_isMagnet){
                x = _shape.x, y = _shape.y;
            }
            if(_vCross != null){

                if(TYPE === 'SVG') {

                    _vCross.attr({
                        'path': "M"+(x-1.5)+","+(_rect.y)+','+(x-1.5)+","+(_rect.height),
                        'opacity': 1
                    });
                } else {
                    _vCross.attr({
                        'path': "M"+(x-1)+","+(_rect.y - 1)+','+(x-1)+","+(_rect.height - 2),
                        'opacity': 1
                    });
                }

            }
            if(_hCross != null){

                if(TYPE === 'SVG') {

                    _hCross.attr({
                        'path': "M"+(_rect.x-1.5)+","+(y-1.5)+','+(_rect.x+_rect.width-1.5)+","+(y-1.5),
                        'opacity': 1
                    });
                } else {
                    _hCross.attr({
                        'path': "M"+(_rect.x-1)+","+(y-1)+','+(_rect.x+_rect.width-1)+","+(y-1),
                        'opacity': 1
                    });
                }
            }
        };
        /**
         * 툴팁 생성
         * @param  {Object} _styles    스타일
         * @param  {String} _className 외부에서 클래스명이 지정된경우
         * @return {Node}            툴팁DIV
         */
        var createTip = function(_styles, _className){
            var tip = $('<div>');
            if(_className == null){
                tip.css({
                    'padding-top': _styles.tip.paddingTop,
                    'padding-left': _styles.tip.paddingLeft,
                    'padding-right': _styles.tip.paddingRight,
                    'padding-bottom': _styles.tip.paddingBottom,
                    'border-width': _styles.tip.line.width+'px',
                    'border-color': _styles.tip.line.color,
                    'border-style': _styles.tip.line.style,
                    'background': _styles.tip.color,
                    'color': _styles.tip.text.color,
                    'font-size': _styles.tip.text.size,
                    'font-family': _styles.tip.text.family
                });
            } else {
                tip.attr('class', _className);
            }
            tip.css({
                'position': 'absolute',
                'white-space': 'nowrap',
                'z-index': 100000

            }).hide();
            return tip;
        };

        /* DATA */
        /**
         * 최대값, 최소값, 간격값을 정제한 후 리턴
         * @param  {Number} _max        최대값 정제하기 전
         * @param  {Number} _min        최소값 정제하기 전
         * @param  {Boolean} _baseatzero 0부터 시작할지 여부
         * @param  {Boolean} _fit        true 이면 소수점까지 출력, 아니면 1단위
         * @return {Object}             정제된 최대값, 최소값, 간격값
         */
        var adjustMinMax = function(_max, _min, _baseatzero, _fit){

            if(_max == 0 && _min == 0) {
                _max = 100;
            }
            if(_max == _min) {
                _max = _max + 1;
                _min = _min - 1;
            }

            var powerOfTen = Math.floor(Math.log(Math.abs(_max - _min)) / Math.LN10);

            var y_userInterval = Math.pow(10, powerOfTen);

            if(Math.abs(_max - _min) / y_userInterval < 4){
                powerOfTen --;
                y_userInterval = y_userInterval * 2 / 10;
            }

            var y_topBound = 0;
            if(Math.round(_max / y_userInterval) * y_userInterval == _max) {
                y_topBound = _max;
            } else {
                y_topBound = (Math.floor(_max / y_userInterval) + 1) * y_userInterval;
            }

            var y_lowerBound;

            if(isFinite(_min)) y_lowerBound = 0;

            if(_min < 0 || _baseatzero == false){
                y_lowerBound = Math.floor(_min / y_userInterval) * y_userInterval;

                if(_max < 0 && _baseatzero) {
                    y_topBound = 0;
                }
            } else {
                y_lowerBound = 0;
            }

            // 상승값들이고 값이 0부터 4일때까지
            // 하락값들이고 값이 0부터 -4일때까지
            if(_max - _min < 5 && _max >= 0 && _min >= 0 || _max - _min < 5 && _max <= 0 && _min <= 0){
                if(String(y_topBound).indexOf('.') <= -1 && String(y_lowerBound).indexOf('.') <= -1){
                    if(_fit != true) {
                        // fit이 true이면 소수점 처리를 위해 분기
                        y_userInterval = 1;
                    }
                }
            }
            return {
                'computedMinimum': y_lowerBound, 'computedMaximum': y_topBound, 'computedInterval': y_userInterval
            };
        };
        /**
         * 단일 Y축 값 구하기
         * @param {Boolean} _useMultiYAxis 멀티축 사용 유무
         * @param {Array} _data          차트 데이터
         * @param {Object} _styles       스타일
         *                               Y축에서 최소값, 최대값을 출력할지 말지 여부 등으로 필요함.
         * @return {Array}             Y축으로 사용될 값 배열
         */
        var setYAxis = function(_useMultiYAxis, _data, _styles){
            var max = -99999999999, min = 99999999999;
            var yAxis = [];
            if(!_useMultiYAxis){

                for(var i in _data){
                    // min = _data[i].min, max = _data[i].max;
                    if(_styles.yAxis.minNumber != null) {
                        min = _styles.yAxis.minNumber;
                    } else {
                        min = Math.min(min, _data[i].min);
                    }
                    if(_styles.yAxis.maxNumber != null) {
                        max = _styles.yAxis.maxNumber;
                    } else {
                        max = Math.max(max, _data[i].max);
                    }
                }
            } else {
                // min = _data.min, max = _data.max;
                if(_styles.yAxis.minNumber != null) {
                    min = _styles.yAxis.minNumber;
                } else {
                    min = _data.min;
                }
                if(_styles.yAxis.maxNumber != null) {
                    max = _styles.yAxis.maxNumber;
                } else {
                    max = _data.max;
                }
            }

            var adjustMMI = adjustMinMax(max, min, _styles.yAxis.baseAtZero, _styles.yAxis.fit);

            var computedMinimum = adjustMMI.computedMinimum, computedMaximum = adjustMMI.computedMaximum, computedInterval = adjustMMI.computedInterval;

            var labelBase = computedMinimum, labelTop = computedMaximum;

            var decimal = Math.abs(computedInterval) - Math.floor(Math.abs(computedInterval));
            var precision = decimal == 0 ? 1 : -Math.floor(Math.log(decimal) / Math.LN10);

            var roundBase = Math.pow(10, precision);

            var i =  roundedValue = 0;
            for(i = labelBase; i <= labelTop; i += computedInterval) {
                roundedValue = Math.round(i * roundBase) / roundBase;
                yAxis.push(roundedValue);
            }

            if(_styles.yAxis.step && _styles.yAxis.step < yAxis.legnth) {

                var l = Math.round(yAxis.length / _styles.yAxis.step);

                var yAxisTemp = [];
                for(i = 0; i < yAxis.length; i += l) {
                    yAxisTemp.push(yAxis[i]);
                }
                yAxis = yAxisTemp;
                computedInterval = yAxis[1] - yAxis[0];
            }

            if(yAxis[yAxis.length - 1] <= labelTop){

                if(_styles.yAxis.maxNumber == null){

                    if(yAxis[yAxis.length - 1] != 0 &&  labelTop != 0) {

                        while(yAxis[yAxis.length - 1] <= labelTop){
                            yAxis.push(yAxis[yAxis.length - 1] + computedInterval);
                        }

                    }
                }
            }

            if(yAxis[0] >= min && min > 0 && !_styles.yAxis.baseAtZero || yAxis[0] >= min && min < 0){

                if(_styles.yAxis.minNumber == null){

                    while(yAxis[0] >= min){
                        yAxis.unshift(yAxis[0] - computedInterval);
                    }
                }
            }

            return yAxis;
        };
        /**
         * 멀티 Y축 값 구하기
         * @param {Object} _series 시리즈
         * @param {Object} _styles 스타일
         * @param {Array} _data   차트데이터
         * @return {Array}             Y축으로 사용될 값 배열
         */
        var setMultiYAxis = function(_series, _styles, _data){
            var thisSeriesID = '', firstSeriesId = '';
            var yAxisMaxMin = {};
            for(var i in _series){
                if(i === 'type' || _series[i].visible == false) continue;

                if(firstSeriesId === '') firstSeriesId = i;
                if(thisSeriesID === '' || thisSeriesID != _series[i].yaxisid){
                    if(firstSeriesId == _series[i].yaxisid && thisSeriesID != '') {

                        break;
                    }

                    var min = 0, max = 0;
                    if(_styles.series[i].yAxis.minNumber == null) {
                        min = _data['DATA-'+i].min;
                    } else {
                        min = _styles.series[i].yAxis.minNumber;
                    }
                    if(_styles.series[i].yAxis.maxNumber == null) {
                        max = _data['DATA-'+i].max;
                    } else {
                        max = _styles.series[i].yAxis.maxNumber;
                    }

                    var adjustMMI = adjustMinMax(max, min, _styles.series[i].yAxis.baseAtZero, _styles.series[i].yAxis.fit);

                    var mmi = {
                        min : adjustMMI.computedMinimum,
                        max : adjustMMI.computedMaximum,
                        interval : 10,//djustMMI.computedInterval,
                        _min : adjustMMI.computedMinimum,
                        _max : adjustMMI.computedMaximum,
                        minNumber: _styles.series[i].yAxis.minNumber,
                        maxNumber: _styles.series[i].yAxis.maxNumber
                    };

                    var labelBase = mmi.min, labelTop = mmi.max;

                    var decimal = Math.abs(mmi.interval) - Math.floor(Math.abs(mmi.interval));
                    var precision = decimal == 0 ? 1 : -Math.floor(Math.log(decimal) / Math.LN10);

                    var roundBase = Math.pow(10, precision);
                    mmi.labelBase = labelBase, mmi.labelTop = labelTop;
                    mmi.roundBase = roundBase;

                    yAxisMaxMin[_series[i].yaxisid] = mmi;
                }
                thisSeriesID = _series[i].yaxisid;
            }


            thisSeriesID = '';
            var yData = yAxisMaxMin[firstSeriesId];
            for(var j in _series){
                if(j === 'type' || _series[j].visible == false) continue;

                for(var i = yData.labelBase; i <= yData.labelTop; i += yData.interval){
                    var thisYaxisMaxMin = yAxisMaxMin[_series[j].yaxisid];

                    if(thisSeriesID === '' || thisSeriesID != _series[j].yaxisid){
                        if(firstSeriesId == _series[j].yaxisid && thisSeriesID != '') {
                            yAxisMaxMin[j] = yAxisMaxMin[firstSeriesId];
                            thisYaxisMaxMin = yAxisMaxMin[j];
                            break;
                        }
                        if(!thisYaxisMaxMin.hasOwnProperty('data')){
                            thisYaxisMaxMin['data'] = [];
                            thisYaxisMaxMin['step'] = thisYaxisMaxMin['labelBase'];
                        }
                        thisYaxisMaxMin['data'].push(Math.round(thisYaxisMaxMin['step'] * thisYaxisMaxMin['roundBase']) / thisYaxisMaxMin['roundBase']);

                        // 첫 시리즈이고, ylabel의 갯수가 10개 이상인 경우 강제로 줄임.
                        if(thisSeriesID == '' && thisYaxisMaxMin['data'].length > 10) {
                            var ylen  = thisYaxisMaxMin['data'].length;
                            var yStep = Math.round(ylen / 10);
                            var yAxis = [];
                            for(var y = 0; y < ylen; y += yStep){

                                yAxis.push((thisYaxisMaxMin['data'])[y]);
                            }

                            thisYaxisMaxMin['interval'] = yAxis[1] - yAxis[0];
                            thisYaxisMaxMin['data'] = yAxis;
                        }
                        thisYaxisMaxMin['step'] = thisYaxisMaxMin['step'] + thisYaxisMaxMin['interval'];
                    }
                }
                thisSeriesID = _series[j].yaxisid;
            }

            var whileData = function(_item, _data, _pos){
                if(_pos === 'last'){
                    var isWhile = false;
                    while(_item.labelTop >= _data[_data.length - 1]){
                        _data.push(Math.round(_item['step'] * _item['roundBase']) / _item['roundBase']);
                        _item.step = _item.step + _item.interval;
                        isWhile = true;
                    }
                    // while 문 빠져나가고 step을 원래대로 돌려놓음.
                    if(isWhile) {
                        _item.step = _item.step - _item.interval;
                    }
                } else if(_pos === 'first') {
                    while(_item.labelBase <= _data[0]){
                        _data.unshift(Math.round((_item['labelBase'] - _item['interval']) * _item['roundBase']) / _item['roundBase']);

                    }
                }
                return _data;
            };
            var sameLength = function(_first, _second){
                var fData = _first.data, sData = _second.data;
                var tData = [];


                var step = 1, base = 5;
                var whileLength = function(_len, _idx){
                    while(_len >= 0){
                        _len = _len - base;
                        _idx ++;
                    }
                    return _idx;
                };
                var firstIdx = 1, secondIdx = 1;
                if(fData.length > base){
                    firstIdx = whileLength(fData.length, 0);
                }
                // if(sData.length > base){
                // 	secondIdx = whileLength(sData.length, 0);
                // }
                /* 개수 줄이기 */
                if(fData.length > base/* && sData.length < fData.length*/){
                    tData = [];
                    for(var i = 0, len = fData.length; i < len; i+=firstIdx){
                        tData.push(fData[i]);
                    }

                    _first.interval = tData[1] - tData[0];
                    _first.step = tData[tData.length - 1];
                    if(_first._max >= _first.step){
                        while (_first._max >= _first.step){
                            _first.step = _first.step + _first.interval;
                            tData.push(Math.round(_first['step'] * _first['roundBase']) / _first['roundBase']);
                        }
                    }
                    _first.data = tData;
                }
                if(sData.length > base/* && sData.length > fData.length*/){
                    var ttData = [];
                    for(var i = 0, len = sData.length; i < len; i++){
                        if(sData[i] <= _second.labelTop) {
                            ttData.push(sData[i]);
                        }
                    }
                    tData = [];
                    if(ttData.length > base){
                        secondIdx = whileLength(ttData.length, 0);
                    }
                    for(var i = 0, len = ttData.length; i < len; i+=secondIdx){
                        tData.push(ttData[i]);
                    }
                    _second.interval = tData[1] - tData[0];

                    _second.step = tData[tData.length - 1];
                    if(_second._max >= _second.step){

                        while (_second._max >= _second.step){
                            _second.step = _second.step + _second.interval;
                            tData.push(Math.round(_second['step'] * _second['roundBase']) / _second['roundBase']);
                        }
                    }
                    _second.data = tData;
                }
                /* Length 같게 맞추기 */
                fData = _first.data, sData = _second.data;
                if(fData.length < sData.length){
                    while (fData.length < sData.length){
                        _first.step = _first.step + _first.interval;
                        fData.push(Math.round(_first['step'] * _first['roundBase']) / _first['roundBase']);
                    }
                }
                if(fData.length > sData.length) {
                    while (fData.length > sData.length){
                        _second.step = _second.step + _second.interval;
                        sData.push(Math.round(_second['step'] * _second['roundBase']) / _second['roundBase']);

                    }
                }
            };

            var loop = false;

            for(var i in yAxisMaxMin){
                for(var j in yAxisMaxMin){
                    var first = yAxisMaxMin[i], second = yAxisMaxMin[j];


                    var fData = first.data, sData = second.data;
                    if(i == j) {
                        if(first._max >= fData[fData.length - 1] 	&& _styles.series[i].yAxis.maxNumber == null) {
                            fData = whileData(first, fData, 'last');
                        }
                        if(first._min <= fData[0] 					&& _styles.series[i].yAxis.minNumber == null) {
                            if(first._min != 0 && _series[i].hasOwnProperty('form') && _series[i].form.indexOf('updown') > -1){
                                fData = whileData(first, fData, 'first');
                            }

                        }
                        continue;
                    }

                    if(first.labelTop >= fData[fData.length - 1]  && _styles.series[i].yAxis.maxNumber == null) {
                        fData = whileData(first, fData, 'last');
                    }

                    if(second.labelTop >= sData[sData.length - 1] && _styles.series[i].yAxis.maxNumber == null) {
                        sData = whileData(second, sData, 'last');
                    }

                    if(first.labelBase <= fData[0]  && first.labelBase != 0  && first.min != 0  && _styles.series[i].yAxis.minNumber == null){
                        fData = whileData(first, fData, 'first');
                    }

                    if(second.labelBase <= sData[0] && second.labelBase != 0 && second.min != 0 && _styles.series[i].yAxis.minNumber == null){
                        sData = whileData(second, sData, 'first');
                    }

                    if(fData.length != sData.length) {
                        sameLength(first, second);
                    }

                    loop = true;
                    break;
                }
                if(loop) break;
            }


            // 두개의 축의 최대값과 최소값이 같을 경우 위의 스크립트 무시.
            for(var i in yAxisMaxMin){
                for(var j in yAxisMaxMin){
                    var first = yAxisMaxMin[i], second = yAxisMaxMin[j];

                    if(i == j) {
                        continue;
                    }
                    if(first._max == second._max && first._min == second._min) {
                        yAxisMaxMin[j] = $.extend(true, {}, first);
                    }
                    loop = true;
                    break;
                }
                if(loop) break;
            }

            return yAxisMaxMin;
        };
        /**
         * Y축의 값에 따라 실제 위치값 리턴
         * @param  {Number} _h     높이
         * @param  {Array} _yAxis Y축값 배열
         * @param  {Number} _idx   Y축의 값 중 index
         * @return {Number}        위치값으로 변환된 값.
         */
        var ylabelInterval = function(_h, _yAxis, _idx){

            return (_h * ((_yAxis[_idx] - _yAxis[0]) / (_yAxis[_yAxis.length - 1] - _yAxis[0])));
        };
        /**
         * 차트용 데이터로 만들기
         * {"main": {"min", "max", "data"}, "sub": {"min", "max", "data"},,,}
         * @param  {Json} _data    데이터 원본
         * @param  {Object} _options 옵션
         * @param  {Object} _series  시리즈
         * @param  {Object} _styles  스타일
         * @return {Json}          차트용 데이터
         */
        var parseData = function(_data, _options, _series, _styles){

            var json = {};

            var count = _data.length;

            var optionsUseMultiYAxis = _options.use.multiYAxis;
            var optionsUseStock = _options.use.stock;

            for(var i in _series){ // MAIN , SUB
                var o = _series[i]; // s1
                var data = {}; // 한시리즈별 데이터
                var max = -9999999999, min = 9999999999, base = 9999999999;
                var thisYAxisID = "";

                for(var j in o){ // MAIN의 SERIES LOOP
                    if(j === "type") continue;
                    var s = o[j];

                    var sSeries = s.series;

                    if(sSeries != undefined && s.visible != false){
                        var thisData = [];
                        /*
                         column series이고 stack 일 경우에도 초기화 (15.12.03 평다진)
                         */
                        if(optionsUseMultiYAxis && (thisYAxisID != s.yaxisid) || (sSeries === 'column' || sSeries === 'bar') && s.form === 'stack'){
                            // 멀티축이고 축의 위치가 서로 다를 경우 초기화
                            max = -9999999999, min = 9999999999, base = 9999999999;
                        }
                        if(sSeries === 'column' || sSeries === 'bar'){
                            // base = Math.min(base, (_data[count - 1])[s.yaxis]);
                            base = base < (_data[count - 1])[s.yaxis] ? base : parseFloat((_data[count - 1])[s.yaxis]);//Number(String((_data[count - 1])[s.yaxis]).replace(','));
                        }
                        for(var d = 0, len = count; d < len; d++){
                            var oData = _data[d],
                                tData = {
                                    data : oData
                                };

                            tData.data = oData;
                            if(sSeries !== 'candle' && sSeries !== 'hloc'){
                                tData["xaxis"] 		= String(oData[s.xaxis]);
                                tData["xaxisname"] 	= s.xaxis;

                                if(oData[s.yaxis] == null) {
                                    tData["yaxis"] = null;
                                } else {
                                    tData["yaxis"] = parseFloat(oData[s.yaxis]);
                                }
                                tData["yaxisname"] = s.yaxis;

                                if(s.hasOwnProperty('minaxis')){

                                    tData["minaxis"] = parseFloat(oData[s.minaxis]);
                                    tData["minaxisname"] = s.minaxis;
                                }
                                // 최대값, 최소값 구하기
                                // if(tData["yaxis"] != null && $.trim(tData["xaxis"]) != "") {
                                if(tData["yaxis"] != null && tData["xaxis"].trim() != "") {

                                    if(!optionsUseStock || s.label != 'MAIN') {
                                        // 종합차트가 아닐때
                                        max = tData["yaxis"] > max ? tData["yaxis"] : max;
                                        min = tData["yaxis"] < min ? tData["yaxis"] : min;

                                    } else {
                                        // 종합차트일때 사용
                                        max = oData[s.high] > max ? parseFloat(oData[s.high]) : max;
                                        min = oData[s.low]  < min ? parseFloat(oData[s.low])  : min;
                                    }
                                }
                                // 작은값 입력이 있는 경우
                                // if(s.hasOwnProperty('minaxis') && tData["minaxis"] != null && $.trim(tData["xaxis"]) != ""){
                                if(s.hasOwnProperty('minaxis') && tData["minaxis"] != null && tData["xaxis"].trim() != ""){
                                    max = tData["minaxis"] > max ? tData['minaxis'] : max;
                                    min = tData["minaxis"] < min ? tData['minaxis'] : min;
                                }
                            } else if(sSeries === "candle" || sSeries === "hloc"){

                                // if($.trim(oData[s.xaxis]) != '') {
                                if(oData[s.xaxis].trim() != '') {

                                    tData["xaxis"] = String(oData[s.xaxis]),
                                        tData["open"]  = parseFloat(oData[s.open]);
                                    tData["high"]  = parseFloat(oData[s.high]);
                                    tData["low"]   = parseFloat(oData[s.low]);
                                    tData["close"] = parseFloat(oData[s.close]);

                                    tData["xaxisname"] = s.xaxis;
                                    tData["openname"]  = s.open;
                                    tData["highname"]  = s.high;
                                    tData["lowname"]   = s.low;
                                    tData["closename"] = s.close;

                                    max = tData["high"] > max ? tData["high"] : max;
                                    min = tData["low"]  < min ? tData["low"]  : min;

                                } else {
                                    tData["xaxis"] 		= '';
                                    tData["xaxisname"] 	= s.xaxis;
                                }

                            } else {
                                console.log('잘못된 series를 설정하였습니다.');
                            }

                            if(min > 0 && (_styles[i]).yAxis.baseAtZero) {
                                min = 0;
                            }

                            if(s.form && s.form === 'updown') {
                                if(max < 0 && min < 0) {
                                    max = 0;
                                }
                            }
                            tData["index"] = d;

                            if(s.hasOwnProperty('displayName')) {

                                tData["displayname"] = s.displayName;
                            }

                            thisData.push(tData);
                        }


                        /*
                         Series 별 Data에 data, 최소값, 최대값 저장
                         */
                        var obj = {};
                        if(optionsUseMultiYAxis) {
                            obj.max = max,
                                obj.min = min;
                        }
                        obj.data = thisData;

                        data["DATA-"+j] = $.extend(true, {}, obj);
                        data["DATA-"+j].maxvalue = max, // 자신의 데이터의 최대값
                            data["DATA-"+j].minvalue = min; // 자신의 데이터의 최소값
                        data["DATA-"+j].series 	 = sSeries;


                        if(optionsUseMultiYAxis) thisYAxisID = s.yaxisid;


                        obj = null;
                    }
                }
                // Single YAxis
                if(optionsUseMultiYAxis == false){

                    for(var j in o){ // MAIN의 SERIES LOOP
                        if(j === "type") continue;
                        if(o[j].series != undefined && o[j].visible != false) {
                            var firstYaxisID = o[j].yaxisid;
                            var maxValue = 0, minValue = 999999999999999;
                            // 일반 Form
                            if(o[j].form !== 'stack'){
                                if(o[j].form === 'updown_bullet'){
                                    data["DATA-"+j].max = 100, data["DATA-"+j].min = -100, data["DATA-"+j].base = base;
                                } else if(o[j].form === 'bullet'){
                                    data["DATA-"+j].max = 100, data["DATA-"+j].min = 0, data["DATA-"+j].base = base;
                                } else {
                                    data["DATA-"+j].max = max, data["DATA-"+j].min = min, data["DATA-"+j].base = base;
                                }
                            }
                            // Stack Form
                            else {
                                for(var k in o){
                                    if(k === "type") continue;
                                    if(o[k].series != undefined && o[k].visible != false && o[k].yaxisid === firstYaxisID && o[k].form == 'stack') {
                                        maxValue += data["DATA-"+k].maxvalue;
                                        minValue = Math.min(data["DATA-"+k].minvalue, minValue);
                                    }
                                }

                                /*
                                 자신과 같은 축을 사용하는 모든 시리즈의 최대, 최소값을 구한 값을
                                 그 시리즈마다 넣어줌.
                                 min, max, base
                                 */
                                for(k in o){
                                    if(k === "type") continue;
                                    if(o[k].series != undefined && o[k].visible != false && o[k].yaxisid === firstYaxisID && o[k].form == 'stack') {
                                        data["DATA-"+k].max = maxValue;
                                    }
                                }
                                data["DATA-"+j].min = minValue, data["DATA-"+j].base = base, data["DATA-"+j].yaxisid = firstYaxisID || "undefined";
                            }
                        }
                    }
                }
                // Multi YAxis
                else {
                    thisYAxisID = o[j].yaxisid;
                    for(var j in o){ // MAIN의 SERIES LOOP
                        if(j === "type") continue;

                        maxValue = 0, minValue = 999999999999999;

                        for(var k in o){

                            if(k === 'type') continue;

                            if(o[j].series != undefined && o[j].visible != false && o[j].yaxisid == o[k].yaxisid && o[k].visible != false) {
                                // 일반 Form
                                if(o[j].form !== 'stack'){
                                    if(data["DATA-"+j].max < data["DATA-"+k].max) {
                                        data["DATA-"+j].max = data["DATA-"+k].max;
                                    }
                                    if(data["DATA-"+j].min > data["DATA-"+k].min) {
                                        data["DATA-"+j].min = data["DATA-"+k].min;
                                    }
                                    data["DATA-"+j].base = base;
                                }
                                // Stack Form
                                else {
                                    if(o[k].series != undefined && o[k].visible != false && o[k].yaxisid === o[j].yaxisid) {
                                        maxValue += data["DATA-"+k].maxvalue;
                                        minValue = Math.min(data["DATA-"+k].minvalue, minValue);
                                    }
                                }
                            }

                        }
                        if(o[j].form === 'stack'){
                            for(var k in o){
                                if(k === 'type') continue;
                                if(o[j].series != undefined && o[j].visible != false && o[j].yaxisid == o[k].yaxisid) {
                                    data["DATA-"+k].max = maxValue;
                                }
                            }
                            data["DATA-"+j].yaxisid = o[j].yaxisid || "undefined";
                        }
                    }
                }
                json[i] = $.extend(true, {}, data);
            }

            return json;
        };

        // ajax data Loading
        /**
         * 차트 초기화시에 데이터 관련 검사후 Ajax를 호출하거나 그대로 넘기는 함수
         * @param  {Object} _options 옵션
         * @param  {Function} _callback Ajax success 후, 데이터 검사 완료후 callback : element.init()
         * @return null
         */
        var loadData = function(_options, _callback){
            // 데이터 자체가 들어올 경우
            if(_options.data.data){
                var d = _options.data.data;

                // 데이터 오름차순, 내림차순
                if (_options.data.reverse){
                    d.reverse();
                }
                _callback.setOriginalData(d);
                // 기본 차트
                if(!_options.timeSlice.use){
                    _callback.init(d);
                }
                // 시계열 동작
                else {
                    _callback.timeSliceInit(d);
                }
            }
            // 데이터 URL로 들어올 경우
            else {
                $.ajax({
                    url: _options.data.url,
                    async: false,
                    dataType: _options.data.type,
                    jsonp: "callback",
                    success: function(_data){
                        var arr = [];
                        // JSON
                        if(_options.data.type === "json" || _options.data.type === "jsonp"){
                            var bld_depth = _options.data.jsonDepth.split('.'),
                                arr = _data;

                            for(var i = 0, len = bld_depth.length; i < len; i++){
                                arr = arr[bld_depth[i]];
                            }
                            // 데이터 오름차순, 내림차순
                            if(_options.data.reverse) {
                                arr.reverse();
                            }

                        }
                        // TEXT
                        // 첫째줄은 무조건 데이터 타이틀이 들어와야 함.
                        // 구분자는 '|'
                        else {
                            var lineArr = _data.split('\n'),
                                dataTitles = [],
                                titleCheck = true;
                            for ( var i = 0, len = lineArr.length; i < len; i++) {
                                if (len <= 1) continue;

                                var objArr = lineArr[i].split('|');
                                if (objArr.length > 1) {

                                    if (titleCheck) {
                                        for ( var j = objArr.length; j--;) {
                                            dataTitles.unshift(objArr[j].trim());
                                        }
                                        titleCheck = false;
                                    } else {
                                        if (objArr.length <= 1) continue;
                                        var obj = {};
                                        $.each(objArr, function(_j, _item) {
                                            obj[dataTitles[_j]] = _item.trim();
                                        });

                                        if (_options.data.reverse) 	{ arr.unshift(obj); }
                                        else 						{ arr.push(obj); }
                                    }

                                }
                            }
                        }
                        _callback.setOriginalData(d);
                        // 기본 차트
                        if(!_options.timeSlice.use) {
                            _callback.init(arr);
                        }
                        // 시계열 동작
                        else {
                            _callback.timeSliceInit(arr);
                        }
                    },
                    error: function(_e) {
                        _callback.init('error');
                    }
                })
            }
        };
        /**
         * SVG text node 생성 공통화
         * @param  {SVG} paper       SVG 객체
         * @param  {String} _value      텍스트 내용
         * @param  {Number} _x          x위치
         * @param  {Number} _y          y위치
         * @param  {Number} _w          텍스트 넓이 값
         * @param  {String} _labelalign 텍스트 정렬
         * @return {Node}             SVG TExT NODE
         */
        var drawFillText = function(paper, _value, _x, _y, _w, _labelalign){
            if(_labelalign === 'right'){
                _x = _x + _w;
            } else if(_labelalign === 'center'){
                _x = _x + _w/2;
            }
            return paper.text(Math.round(_x), Math.round(_y), _value);
        };
        /**
         * Line을 그리기 위한 Path String
         * @param  {Number} _x1 [시작 x 좌표]
         * @param  {Number} _y1 [시작 y 좌표]
         * @param  {Number} _x2 [끝 x 좌표]
         * @param  {Number} _y2 [끝 y 좌표]
         * @return {String}     [SVG Path String]
         */
        var drawGridLinePath = function(_x1, _y1, _x2, _y2){
            var rp = null;
            if(TYPE === 'SVG') {
                rp = getLine(TYPE, Math.round(_x1), Math.round(_y1), Math.round(_x2), Math.round(_y2));
            } else {
                rp = getLine(TYPE, Math.round(_x1), Math.round(_y1 - 2), Math.round(_x2), Math.round(_y2 - 2));
            }
            return "M" + rp.x1 + "," + rp.y1 + "," + rp.x2 + "," + rp.y2;
        };
        /**
         * 텍스트 Node의 정렬
         * @param  {String} _labelalign center, left, right
         * @return {String}             SVG에서 사용하는 문자로 변경
         */
        var labelAlign = function(_labelalign){
            if(_labelalign === 'center') {
                _labelalign = 'middle';
            } else if(_labelalign === 'left') {
                _labelalign = 'start';
            } else {
                _labelalign = 'end';
            }
            return _labelalign;
        };
        /* SIZE */
        /**
         * 차트의 영역별 사이즈 계산
         * 메인과 서브 갯수에 따른 영역별 높이값 저장
         * @param {Object} _options       옵션
         * @param {Object} _series        시리즈
         * @param {Object} _styles        스타일
         * @param {Number} _w             차트 넓이
         * @param {Number} _h             차트 높이
         * @param {Number} _divisionCount 영역 구분 개수
         * @return {Object}             사이즈 계산값이 추가된 스타일
         */
        var setChartSize = function(_options, _series, _styles, _w, _h, _divisionCount){

            var seriesIndex = 0, seriesTop = 0;
            for(var t in _series) {
                var ts = Object(_styles[t]);
                var tsLayout = ts.layout;

                if(!ts.hasOwnProperty('graphheight')) {
                    // 셀렉터 넓이
                    tsLayout._allwidth 		= _w;
                    // 셀렉터 높이
                    tsLayout._allheight 	= _h;
                    // 영역의 넓이
                    tsLayout._canvaswidthpx = _w;
                    if(!_options.use.stock && _options.division != null){
                        // 영역의 높이 비율값
                        tsLayout._canvasheight = DIVISION[seriesIndex];
                        // 영역이 높이 픽셀값
                        tsLayout._canvasheightpx = Math.round(_h * DIVISION[seriesIndex] / 100);
                    } else {
                        // 영역의 높이 비율값
                        tsLayout._canvasheight   = (DIVISION[_divisionCount])[seriesIndex];
                        // 영역이 높이 픽셀값
                        tsLayout._canvasheightpx = Math.round(_h * DIVISION[_divisionCount][seriesIndex] / 100);
                    }

                    tsLayout._canvastop = seriesTop; // 영역의 시작 Y위치

                    // 단일축
                    if(!_options.use.multiYAxis){
                        var tsYaxis 	= ts.yAxis;
                        var ylabelGap 	= tsYaxis.paddingLeft + tsYaxis.paddingRight + tsYaxis.width;
                        var startX 		= tsLayout.paddingLeft;

                        if(tsYaxis.position == 'left') {

                            startX 		= startX + ylabelGap;
                        }

                        // 멀티축
                    } else {
                        /*
                         thisSeriesID : each문 도는 동안 이전 시리즈의 아이디
                         firstSeriesId : 멀티축인 경우 왼쪽혹은 오른쪽의 id만 사용하므로 처음 id만 기억하여 동일한 yaxisid는 걸러낸다.
                         */
                        var ylabelGap = 0, thisSeriesID = '', firstSeriesId = '';
                        for(var m in _series[t]){

                            if(m === 'type' || (_series[t])[m].visible == false) continue;

                            var tm = Object(ts.series[m]).yAxis, tSeries = (_series[t])[m];

                            if(thisSeriesID == '' || thisSeriesID != tSeries.yaxisid){
                                if(firstSeriesId != tSeries.yaxisid){

                                    ylabelGap = ylabelGap + tm.width + tm.paddingRight + tm.paddingLeft;
                                }

                                if(firstSeriesId == '')
                                    firstSeriesId = tSeries.yaxisid;

                                thisSeriesID = tSeries.yaxisid;
                            }
                        }

                        var startX = tsLayout.paddingLeft;
                        for(var m in _series[t]) {

                            if(m === 'type' || (_series[t])[m].visible == false) continue;

                            var tm = Object(ts.series[m]).yAxis, tSeries = (_series[t])[m];

                            if(!tSeries.yaxisid || (tSeries.yaxisid && tSeries.yaxisid === m)){
                                if(tm.position === 'left'){

                                    startX = startX + tm.width + tm.paddingLeft + tm.paddingRight;

                                    break;
                                }
                            }
                        }

                    }
                    // 영역내 그래프의 시작 X 위치
                    tsLayout._graphleft 	= startX;
                    // 영역내 그래프의 시작 Y 위치
                    tsLayout._graphtop 		= tsLayout.paddingTop;
                    // 영역내 그래프의 넓이 픽셀값
                    tsLayout._graphwidthpx 	= _w - tsLayout.paddingLeft - tsLayout.paddingRight - ylabelGap;
                    // 영역내 그래프의 높이 픽셀값
                    tsLayout._graphheightpx = tsLayout._canvasheightpx - tsLayout.paddingTop - tsLayout.paddingBottom - ts.xAxis.height - ts.xAxis.paddingTop;

                    seriesTop += tsLayout._canvasheightpx;
                }
                seriesIndex ++;
            }

            return _styles;
        };
        /**
         * Line, Area 에서 기준선과 교차되는 지점 구하는 함수
         * @param  {Object} _A        A포인트
         * @param  {Object} _B        B포인트
         * @param  {Number} _baseLine 기준 포인트
         * @return {Object}           교차되는 포인트
         */
        var getCrossPoint = function (_A, _B, _baseLine) {
            var t, s;
            var under = (_baseLine - _baseLine) * (_B.x - _A.x) - (_B.x - _A.x) * (_B.y - _A.y);
            if(under == 0) return null;

            var _t = (_B.x - _A.x) * (_A.y - _baseLine) - (_baseLine - _baseLine) * (_A.x - _A.x);
            var _s = (_B.x - _A.x) * (_A.y - _baseLine) - (_B.y - _A.y) *(_A.x - _A.x);

            t = _t / under, s = _s / under;

            if(t < 0 || t> 1 || s < 0 || s > 1) return null;
            if(_t == 0 && _s == 0) return null;

            var obj = {};
            obj.x = _A.x + t * (_B.x - _A.x);
            obj.y = _A.y + t * (_B.y - _A.y);

            return obj;
        };
        /**
         * 면시리즈에서 최소값 minaxis 사용시에 교최되는 지점 구하는 함수
         * @param  {Object} s   A포인트
         * @param  {Object} e   B포인트
         * @param  {String} chk 상승하락 구분
         * @return {Object}     교차되는 포인트
         */
        var getPolyPoint = function( s, e, chk){
            var sX = s.x, sY1 = 0, sY2 = 0;
            var eX = e.x, eY1 = 0, eY2 = 0;
            if(chk == "up"){
                sY1 = s.height, sY2 = e.height;
                eY1 = s.y, eY2 = e.y;
            } else {
                sY1 = s.y, sY2 = e.y;
                eY1 = s.height, eY2 = e.height;
            }
            var k1 = (sY2 - sY1)/(eX - sX);
            var start = sY1 - (k1 * sX);
            var k2 = (eY2 - eY1)/(eX - sX);
            var end = eY1 - (k2 * sX);

            var FX = (end - start)/(k1 - k2);
            var FY = (k1 * FX) + start;

            return {"x": FX, "y": FY};
        };
        /**
         * 마우스 포지션 값 가져오기
         * @param  {Object}  e      마우스 이벤트 객체
         * @param  {Boolean} isItem 이벤트 강제 trigger시에 사용하는 파라메터
         * @return {Object}         마우스 포지션
         */
        var getMousePosition = function(e, isItem){
            var m = {};
            e = e || window.event;

            if(TYPE === 'VML'){
                var target 		= e.target || e.srcElement,
                    rect 		= target.getBoundingClientRect(),
                    parent 		= target.parentNode,
                    parentRect 	= parent.getBoundingClientRect();

                m.x = e.offsetX + rect.left - parentRect.left;
                m.y = e.offsetY + rect.top - parentRect.top;

            } else {

                var appName 	= navigator.appName.toLowerCase();
                var userAgent 	= navigator.userAgent.toLowerCase();

                if(TOUCHDEVICE){

                    if(e.changedTouches && e.changedTouches.length > 0){

                        var target 		= e.target || e.srcElement,
                            rect 		= target.getBoundingClientRect(),
                            parent 		= target.parentNode,
                            parentRect 	= parent.getBoundingClientRect();

                        m.x = e.changedTouches[0].clientX - parentRect.left;
                        m.y = e.changedTouches[0].clientY - parentRect.top;
                    }
                } else {
                    if(userAgent.indexOf('firefox') > -1){ // FireFox

                        m.x = Math.round(e.layerX), m.y = Math.round(e.layerY);
                    } else if(appName === 'opera'){ // Opera

                        var target 		= e.target || e.srcElement,
                            rect 		= target.getBoundingClientRect(),
                            parent 		= target.parentNode,
                            parentRect 	= parent.getBoundingClientRect();

                        m.x = e.offsetX + rect.left - parentRect.left;
                        m.y = e.offsetY + rect.top  - parentRect.top;
                    } else { // ETc

                        m.x = Math.round(e.offsetX);
                        m.y = Math.round(e.offsetY);
                    }
                }


            }
            return m;
        };
        // loadingBar Show
        var showLoadingBar = function(_selector, _loadingBar){
            if(_loadingBar.select == undefined){
                var height = _selector.height();
                _loadingBar.select = $('<div>').css({
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: _selector.height(), 'z-index': 1000
                });
                var box = _loadingBar.select;
                if(box.has('iframe').length <= 0){
                    var ifrm = "<iframe frameborder='no' scrolling='no' width='100%' height='"+height+"' src='"+_loadingBar.url+"' tabindex='-1'></iframe>";

                    box[0].innerHTML = ifrm;
                }
            }
            _selector.append(_loadingBar.select);
            _loadingBar.select.show();


        };
        // LoadingBar Hide
        var hideLoadingBar = function(_loadingBar){
            // options.loadingBar.select.hide();
            setTimeout(function(){
                _loadingBar.select.remove();

            }, 0);

        };
        /**
         * 별 path 구하기
         * @param {Number} centerX     X중심 좌표
         * @param {Number} centerY     y중심 좌표
         * @param {Number} arms        별에 삐죽한 부분 개수
         * @param {Number} outerRadius 별 크기
         * @param {Number} innerRadius 별의 꺽이는 각도
         */
        var CalculateStarPoints = function(centerX, centerY, arms, outerRadius, innerRadius){
            var results = "";

            var angle = Math.PI / arms;

            for (var i = 0; i < 2 * arms; i++) {
                var r = (i & 1) == 0 ? outerRadius : innerRadius;

                var currX = centerX + Math.cos(i * angle) * r;
                var currY = centerY + Math.sin(i * angle) * r;

                if (i == 0) {
                    results = currX + " " + currY;
                } else {
                    results += " L" + currX + " " + currY;
                }
            }

            return results;
        };
        var GraphBackground = function(){
            this.background = null;
            this.useBorders =  false;
            this.borders = {};
        };
        GraphBackground.prototype = {
            // GRAPH 영역 배경
            // this.background: null,
            createBackground: function(canvas, rect, styles){
                var backFill = "";
                if(styles.color.src)
                    backFill = "url("+styles.color.src+")";
                else
                    backFill = styles.color;
                this.background = canvas.rect(rect.x, rect.y, rect.width, rect.height)
                    .attr({
                        'fill': backFill,
                        'opacity': styles.opacity,
                        'stroke-width': 1,
                        'z-index': 0,
                        'stroke': undefined,
                        'stroke-opacity': 0
                    });

                return this.background;
            },
            setBackground: function(rect, _styles){
                this.background.attr({
                    x: rect.x, y: rect.y, width: rect.width, height: rect.height
                });
                if(_styles != undefined){
                    var backFill = "";
                    if(_styles.color.src)
                        backFill = "url("+_styles.color.src+")";
                    else
                        backFill = _styles.color;
                    this.background.attr({
                        fill: backFill, opacity: _styles.opacity
                    });
                }
                // return this.background;
            },
            getBackground: function(){
                return this.background;
            },
            // GRAPH 영역 테두리
            // this.useBorders: false,
            // this.borders: {},
            createBorders: function(canvas, rect, styles){

                if(styles.line.top.width > 0) {
                    this.borders.top = canvas.path('M'+rect.x1 + ',' + rect.y1 + ',' + rect.x2 + ',' + rect.y1).attr({stroke: styles.line.top.color, 'stroke-width': styles.line.top.width, 'stroke-opacity': styles.line.top.opacity});
                }
                if(styles.line.left.width > 0) {
                    this.borders.left = canvas.path('M'+rect.x1 + ',' + rect.y1 + ',' + rect.x1 + ',' + rect.y2).attr({stroke: styles.line.left.color, 'stroke-width': styles.line.left.width, 'stroke-opacity': styles.line.left.opacity});
                }
                if(styles.line.right.width > 0) {
                    this.borders.right = canvas.path('M'+rect.x2 + ',' + rect.y1 + ',' + rect.x2 + ',' + rect.y2).attr({stroke: styles.line.right.color, 'stroke-width': styles.line.right.width, 'stroke-opacity': styles.line.right.opacity});
                }
                if(styles.line.bottom.width > 0) {
                    if(TYPE == 'SVG') {
                        rect.y2 += 1;
                    }
                    this.borders.bottom = canvas.path('M'+rect.x1 + ',' + (rect.y2) + ',' + rect.x2 + ',' + (rect.y2)).attr({stroke: styles.line.bottom.color, 'stroke-width': styles.line.bottom.width, 'stroke-opacity': styles.line.bottom.opacity});
                }
                this.useBorders = true;
            },
            setBorders: function(rect, styles){

                if(this.borders.hasOwnProperty('top')) {
                    this.borders.top.attr({path: 'M'+rect.x1 + ',' + rect.y1 + ',' + rect.x2 + ',' + rect.y1});
                    this.borders.top.toFront();
                }
                if(this.borders.hasOwnProperty('left')) {
                    this.borders.left.attr({path: 'M'+rect.x1 + ',' + rect.y1 + ',' + rect.x1 + ',' + rect.y2});
                }
                if(this.borders.hasOwnProperty('right')) {
                    this.borders.right.attr({path: 'M'+rect.x2 + ',' + rect.y1 + ',' + rect.x2 + ',' + rect.y2});
                }
                if(this.borders.hasOwnProperty('bottom')) {
                    if(TYPE == 'SVG') {
                        rect.y2 += 1;
                    }
                    this.borders.bottom.attr({path: 'M'+rect.x1 + ',' + (rect.y2) + ',' + rect.x2 + ',' + (rect.y2)});
                    this.borders.bottom.toFront();
                }

                // this.background.toBack();
            },
            getBorders: function(){
                return this.borders;
            },
            toFrontBorder: function(){
                if(this.borders.hasOwnProperty('top')) {
                    this.borders.top.toFront();
                }
                if(this.borders.hasOwnProperty('bottom')) {
                    this.borders.bottom.toFront();
                }
            }
        };

        Raphael.el.trigger = function (str/* name of event */, scope, params) {
            scope = scope || this;

            if(this.events == undefined) return;

            for(var i = 0; i < this.events.length; i++){
                if(this.events[i].name === str) {
                    this.events[i].f.call(scope, params);
                }
            }
        };

        String.prototype.format = function() {
            if(this==0) return 0;

            var reg = /(^[+-]?\d+)(\d{3})/;
            var n = (this + '');

            while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

            return n;
        };

        String.prototype.trim = function() {

            return this.replace(/^\s*/ ,"").replace(/\s*$/ ,"");
        };

        if (!window.webponent){
            window.webponent = {};

        }

        window.webponent.chart = self;

    })();

})(jQuery);




// Slider Range Bar Dragable
(function( $, undefined ) {
    if(!$.isEmptyObject($.ui) && !$.isEmptyObject($.ui.slider)) {
        $.widget("ui.dragslider", $.ui.slider, {

            options: $.extend({},$.ui.slider.prototype.options,{rangeDrag:false}),

            _create: function() {
                $.ui.slider.prototype._create.apply(this,arguments);
                this._rangeCapture = false;
            },

            _mouseCapture: function( event ) {
                var o = this.options;

                if ( o.disabled ) return false;

                if(event.target == this.range.get(0) && o.rangeDrag == true && o.range == true) {
                    this._rangeCapture = true;
                    this._rangeStart = null;
                }
                else {
                    this._rangeCapture = false;
                }

                $.ui.slider.prototype._mouseCapture.apply(this,arguments);

                if(this._rangeCapture == true) {
                    this.handles.removeClass("ui-state-active").blur();
                }

                return true;
            },

            _mouseStop: function( event ) {
                this._rangeStart = null;
                return $.ui.slider.prototype._mouseStop.apply(this,arguments);
            },

            _slide: function( event, index, newVal ) {
                if(!this._rangeCapture) {
                    return $.ui.slider.prototype._slide.apply(this,arguments);
                }

                if(this._rangeStart == null) {
                    this._rangeStart = newVal;
                }

                var oldValLeft = this.options.values[0],
                    oldValRight = this.options.values[1],
                    slideDist = newVal - this._rangeStart,
                    newValueLeft = oldValLeft + slideDist,
                    newValueRight = oldValRight + slideDist,
                    allowed;

                if ( this.options.values && this.options.values.length ) {
                    if(newValueRight > this._valueMax() && slideDist > 0) {
                        slideDist -= (newValueRight-this._valueMax());
                        newValueLeft = oldValLeft + slideDist;
                        newValueRight = oldValRight + slideDist;
                    }

                    if(newValueLeft < this._valueMin()) {
                        slideDist += (this._valueMin()-newValueLeft);
                        newValueLeft = oldValLeft + slideDist;
                        newValueRight = oldValRight + slideDist;
                    }

                    if ( slideDist != 0 ) {
                        newValues = this.values();
                        newValues[ 0 ] = newValueLeft;
                        newValues[ 1 ] = newValueRight;

                        // A slide can be canceled by returning false from the slide callback
                        allowed = this._trigger( "slide", event, {
                            handle: this.handles[ index ],
                            value: slideDist,
                            values: newValues
                        } );

                        if ( allowed !== false ) {
                            this.values( 0, newValueLeft, true );
                            this.values( 1, newValueRight, true );
                        }
                        this._rangeStart = newVal;
                    }
                }

            }

        });

    }

})(jQuery);