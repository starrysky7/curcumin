function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}

window.addEventListener('scroll', (e) => anim(e))

function anim(e) {
    console.log(getScrollPercent())

    // section 1
    if (getScrollPercent() < 8.32639467110741) {
        document.getElementsByClassName('section1')[0].style.opacity = "1"
        document.getElementsByClassName('section1-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 8.32639467110741 && getScrollPercent() < 8.442309666650074) {
        document.getElementsByClassName('section7')[0].style.opacity = "1"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 8.442309666650074 && getScrollPercent() < 8.558224662192737) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.95"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 8.558224662192737 && getScrollPercent() < 8.6741396577354) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.8999999999999999"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 8.6741396577354 && getScrollPercent() < 8.790054653278064) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.8499999999999999"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 8.790054653278064 && getScrollPercent() < 8.905969648820728) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.7999999999999998"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 8.905969648820728 && getScrollPercent() < 9.021884644363391) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.7499999999999998"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 9.021884644363391 && getScrollPercent() < 9.137799639906055) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.6999999999999997"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 9.137799639906055 && getScrollPercent() < 9.253714635448718) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.6499999999999997"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 9.253714635448718 && getScrollPercent() < 9.369629630991382) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.5999999999999996"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 9.369629630991382 && getScrollPercent() < 9.485544626534045) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.5499999999999996"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 9.485544626534045 && getScrollPercent() < 9.601459622076709) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.4999999999999996"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 9.601459622076709 && getScrollPercent() < 9.717374617619372) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.4499999999999996"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 9.717374617619372 && getScrollPercent() < 9.833289613162036) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.39999999999999963"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 9.833289613162036 && getScrollPercent() < 9.949204608704699) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.34999999999999964"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 9.949204608704699 && getScrollPercent() < 10.065119604247363) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.29999999999999966"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 10.065119604247363 && getScrollPercent() < 10.181034599790026) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.24999999999999967"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 10.181034599790026 && getScrollPercent() < 10.29694959533269) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.19999999999999968"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 10.29694959533269 && getScrollPercent() < 10.412864590875353) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.1499999999999997"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 10.412864590875353 && getScrollPercent() < 10.528779586418016) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.09999999999999969"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 10.528779586418016 && getScrollPercent() < 10.64469458196068) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.049999999999999684"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 10.64469458196068) {
        document.getElementsByClassName('section1')[0].style.opacity = "0"
        document.getElementsByClassName('section1-container')[0].style.display = "none"
    }
    // section 2
    if (getScrollPercent() < 11.283929651722522) {
        document.getElementsByClassName('section2')[0].style.opacity = "0"
        document.getElementById('mobile-section-image-1').style.opacity = "0"
        document.getElementsByClassName('section2-container')[0].style.display = "none"

    }
    if (getScrollPercent() > 11.283929651722522 && getScrollPercent() < 12.84263134399719) {
        document.getElementsByClassName('section2')[0].style.opacity = "1"
        document.getElementById('mobile-section-image-1').style.opacity = "1"
        document.getElementsByClassName('section2-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 12.84263134399719 && getScrollPercent() < 12.958546339539854) {
            document.getElementsByClassName('section2')[0].style.opacity = "1"
            document.getElementById('mobile-section-image-1').style.opacity = "1"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 12.958546339539854 && getScrollPercent() < 13.074461335082518) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.95"
            document.getElementById('mobile-section-image-1').style.opacity = "0.95"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 13.074461335082518 && getScrollPercent() < 13.190376330625181) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.8999999999999999"
            document.getElementById('mobile-section-image-1').style.opacity = "0.8999999999999999"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 13.190376330625181 && getScrollPercent() < 13.306291326167845) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.8499999999999999"
            document.getElementById('mobile-section-image-1').style.opacity = "0.8499999999999999"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 13.306291326167845 && getScrollPercent() < 13.422206321710508) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.7999999999999998"
            document.getElementById('mobile-section-image-1').style.opacity = "0.7999999999999998"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 13.422206321710508 && getScrollPercent() < 13.538121317253172) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.7499999999999998"
            document.getElementById('mobile-section-image-1').style.opacity = "0.7499999999999998"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 13.538121317253172 && getScrollPercent() < 13.654036312795835) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.6999999999999997"
            document.getElementById('mobile-section-image-1').style.opacity = "0.6999999999999997"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 13.654036312795835 && getScrollPercent() < 13.769951308338499) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.6499999999999997"
            document.getElementById('mobile-section-image-1').style.opacity = "0.6499999999999997"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 13.769951308338499 && getScrollPercent() < 13.885866303881162) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.5999999999999996"
            document.getElementById('mobile-section-image-1').style.opacity = "0.5999999999999996"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 13.885866303881162 && getScrollPercent() < 14.001781299423826) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.5499999999999996"
            document.getElementById('mobile-section-image-1').style.opacity = "0.5499999999999996"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 14.001781299423826 && getScrollPercent() < 14.117696294966489) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.4999999999999996"
            document.getElementById('mobile-section-image-1').style.opacity = "0.4999999999999996"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 14.117696294966489 && getScrollPercent() < 14.233611290509153) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.4499999999999996"
            document.getElementById('mobile-section-image-1').style.opacity = "0.4499999999999996"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 14.233611290509153 && getScrollPercent() < 14.349526286051816) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.39999999999999963"
            document.getElementById('mobile-section-image-1').style.opacity = "0.39999999999999963"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 14.349526286051816 && getScrollPercent() < 14.46544128159448) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.34999999999999964"
            document.getElementById('mobile-section-image-1').style.opacity = "0.34999999999999964"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 14.46544128159448 && getScrollPercent() < 14.581356277137143) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.29999999999999966"
            document.getElementById('mobile-section-image-1').style.opacity = "0.29999999999999966"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 14.581356277137143 && getScrollPercent() < 14.697271272679806) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.24999999999999967"
            document.getElementById('mobile-section-image-1').style.opacity = "0.24999999999999967"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 14.697271272679806 && getScrollPercent() < 14.81318626822247) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.19999999999999968"
            document.getElementById('mobile-section-image-1').style.opacity = "0.19999999999999968"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 14.81318626822247 && getScrollPercent() < 14.929101263765133) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.1499999999999997"
            document.getElementById('mobile-section-image-1').style.opacity = "0.1499999999999997"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 14.929101263765133 && getScrollPercent() < 15.045016259307797) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.09999999999999969"
            document.getElementById('mobile-section-image-1').style.opacity = "0.09999999999999969"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
            
            if (getScrollPercent() > 15.045016259307797 && getScrollPercent() < 15.16093125485046) {
            document.getElementsByClassName('section2')[0].style.opacity = "0.049999999999999684"
            document.getElementById('mobile-section-image-1').style.opacity = "0.049999999999999684"
            document.getElementsByClassName('section2-container')[0].style.display = "block"
            }
        

    if (getScrollPercent() > 15.16093125485046) {
        document.getElementsByClassName('section2')[0].style.opacity = "0"
        document.getElementById('mobile-section-image-1').style.opacity = "0"
        document.getElementsByClassName('section2-container')[0].style.display = "block"
    }
    // section 3
    if (getScrollPercent() < 15.16093125485046) {
        document.getElementsByClassName('section3')[0].style.opacity = "0"
        document.getElementById('mobile-section-image-2').style.opacity = "0"
        document.getElementsByClassName('section3-container')[0].style.display = "none"
    }
    if (getScrollPercent() > 15.16093125485046 && getScrollPercent() < 15.276846250393124) {
        document.getElementsByClassName('section3')[0].style.opacity = "0"
        document.getElementById('mobile-section-image-2').style.opacity = "0"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 15.276846250393124 && getScrollPercent() < 15.392761245935787) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.05"
        document.getElementById('mobile-section-image-2').style.opacity = "0.05"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 15.392761245935787 && getScrollPercent() < 15.508676241478451) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.1"
        document.getElementById('mobile-section-image-2').style.opacity = "0.1"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 15.508676241478451 && getScrollPercent() < 15.624591237021114) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.15000000000000002"
        document.getElementById('mobile-section-image-2').style.opacity = "0.15000000000000002"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 15.624591237021114 && getScrollPercent() < 15.740506232563778) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.2"
        document.getElementById('mobile-section-image-2').style.opacity = "0.2"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 15.740506232563778 && getScrollPercent() < 15.856421228106441) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.25"
        document.getElementById('mobile-section-image-2').style.opacity = "0.25"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 15.856421228106441 && getScrollPercent() < 15.972336223649105) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.3"
        document.getElementById('mobile-section-image-2').style.opacity = "0.3"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 15.972336223649105 && getScrollPercent() < 16.08825121919177) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.35"
        document.getElementById('mobile-section-image-2').style.opacity = "0.35"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 16.08825121919177 && getScrollPercent() < 16.204166214734432) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.39999999999999997"
        document.getElementById('mobile-section-image-2').style.opacity = "0.39999999999999997"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 16.204166214734432 && getScrollPercent() < 16.320081210277095) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.44999999999999996"
        document.getElementById('mobile-section-image-2').style.opacity = "0.44999999999999996"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 16.320081210277095 && getScrollPercent() < 16.43599620581976) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.49999999999999994"
        document.getElementById('mobile-section-image-2').style.opacity = "0.49999999999999994"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 16.43599620581976 && getScrollPercent() < 16.551911201362422) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.5499999999999999"
        document.getElementById('mobile-section-image-2').style.opacity = "0.5499999999999999"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 16.551911201362422 && getScrollPercent() < 16.667826196905086) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.6"
        document.getElementById('mobile-section-image-2').style.opacity = "0.6"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 16.667826196905086 && getScrollPercent() < 16.78374119244775) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.65"
        document.getElementById('mobile-section-image-2').style.opacity = "0.65"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 16.78374119244775 && getScrollPercent() < 16.899656187990413) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.7000000000000001"
        document.getElementById('mobile-section-image-2').style.opacity = "0.7000000000000001"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 16.899656187990413 && getScrollPercent() < 17.015571183533076) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.7500000000000001"
        document.getElementById('mobile-section-image-2').style.opacity = "0.7500000000000001"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 17.015571183533076 && getScrollPercent() < 17.13148617907574) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.8000000000000002"
        document.getElementById('mobile-section-image-2').style.opacity = "0.8000000000000002"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 17.13148617907574 && getScrollPercent() < 17.247401174618403) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.8500000000000002"
        document.getElementById('mobile-section-image-2').style.opacity = "0.8500000000000002"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 17.247401174618403 && getScrollPercent() < 17.363316170161067) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.9000000000000002"
        document.getElementById('mobile-section-image-2').style.opacity = "0.9000000000000002"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 17.363316170161067 && getScrollPercent() < 17.47923116570373) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.9500000000000003"
        document.getElementById('mobile-section-image-2').style.opacity = "0.9500000000000003"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }

    if (getScrollPercent() > 17.47923116570373 && getScrollPercent() < 23.433804349240216) {
        document.getElementsByClassName('section3')[0].style.opacity = "1"
        document.getElementById('mobile-section-image-2').style.opacity = "1"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 23.433804349240216 && getScrollPercent() < 23.54971934478288) {
        document.getElementsByClassName('section3')[0].style.opacity = "1"
        document.getElementById('mobile-section-image-2').style.opacity = "1"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 23.54971934478288 && getScrollPercent() < 23.665634340325543) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.95"
        document.getElementById('mobile-section-image-2').style.opacity = "0.95"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 23.665634340325543 && getScrollPercent() < 23.781549335868206) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.8999999999999999"
        document.getElementById('mobile-section-image-2').style.opacity = "0.8999999999999999"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 23.781549335868206 && getScrollPercent() < 23.89746433141087) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.8499999999999999"
        document.getElementById('mobile-section-image-2').style.opacity = "0.8499999999999999"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 23.89746433141087 && getScrollPercent() < 24.013379326953533) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.7999999999999998"
        document.getElementById('mobile-section-image-2').style.opacity = "0.7999999999999998"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 24.013379326953533 && getScrollPercent() < 24.129294322496197) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.7499999999999998"
        document.getElementById('mobile-section-image-2').style.opacity = "0.7499999999999998"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 24.129294322496197 && getScrollPercent() < 24.24520931803886) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.6999999999999997"
        document.getElementById('mobile-section-image-2').style.opacity = "0.6999999999999997"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 24.24520931803886 && getScrollPercent() < 24.361124313581524) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.6499999999999997"
        document.getElementById('mobile-section-image-2').style.opacity = "0.6499999999999997"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 24.361124313581524 && getScrollPercent() < 24.477039309124187) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.5999999999999996"
        document.getElementById('mobile-section-image-2').style.opacity = "0.5999999999999996"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 24.477039309124187 && getScrollPercent() < 24.59295430466685) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.5499999999999996"
        document.getElementById('mobile-section-image-2').style.opacity = "0.5499999999999996"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 24.59295430466685 && getScrollPercent() < 24.708869300209514) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.4999999999999996"
        document.getElementById('mobile-section-image-2').style.opacity = "0.4999999999999996"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 24.708869300209514 && getScrollPercent() < 24.824784295752178) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.4499999999999996"
        document.getElementById('mobile-section-image-2').style.opacity = "0.4499999999999996"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 24.824784295752178 && getScrollPercent() < 24.94069929129484) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.39999999999999963"
        document.getElementById('mobile-section-image-2').style.opacity = "0.39999999999999963"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 24.94069929129484 && getScrollPercent() < 25.056614286837505) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.34999999999999964"
        document.getElementById('mobile-section-image-2').style.opacity = "0.34999999999999964"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 25.056614286837505 && getScrollPercent() < 25.172529282380168) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.29999999999999966"
        document.getElementById('mobile-section-image-2').style.opacity = "0.29999999999999966"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 25.172529282380168 && getScrollPercent() < 25.28844427792283) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.24999999999999967"
        document.getElementById('mobile-section-image-2').style.opacity = "0.24999999999999967"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 25.28844427792283 && getScrollPercent() < 25.404359273465495) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.19999999999999968"
        document.getElementById('mobile-section-image-2').style.opacity = "0.19999999999999968"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 25.404359273465495 && getScrollPercent() < 25.52027426900816) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.1499999999999997"
        document.getElementById('mobile-section-image-2').style.opacity = "0.1499999999999997"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 25.52027426900816 && getScrollPercent() < 25.636189264550822) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.09999999999999969"
        document.getElementById('mobile-section-image-2').style.opacity = "0.09999999999999969"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 25.636189264550822 && getScrollPercent() < 25.752104260093486) {
        document.getElementsByClassName('section3')[0].style.opacity = "0.049999999999999684"
        document.getElementById('mobile-section-image-2').style.opacity = "0.049999999999999684"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
        }

    if (getScrollPercent() > 25.752104260093486) {
        document.getElementsByClassName('section3')[0].style.opacity = "0"
        document.getElementById('mobile-section-image-2').style.opacity = "0"
        document.getElementsByClassName('section3-container')[0].style.display = "block"
    }
    // section 4
    if (getScrollPercent() < 25.752104260093486) {
        document.getElementsByClassName('section4')[0].style.opacity = "0"
        document.getElementById('mobile-section-image-3').style.opacity = "0"
        document.getElementsByClassName('section4-container')[0].style.display = "none"
    }
    if (getScrollPercent() > 25.752104260093486 && getScrollPercent() < 25.86801925563615) {
        document.getElementsByClassName('section4')[0].style.opacity = "0"
        document.getElementById('mobile-section-image-3').style.opacity = "0"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 25.86801925563615 && getScrollPercent() < 25.983934251178813) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.05"
        document.getElementById('mobile-section-image-3').style.opacity = "0.05"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 25.983934251178813 && getScrollPercent() < 26.099849246721476) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.1"
        document.getElementById('mobile-section-image-3').style.opacity = "0.1"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 26.099849246721476 && getScrollPercent() < 26.21576424226414) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.15000000000000002"
        document.getElementById('mobile-section-image-3').style.opacity = "0.15000000000000002"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 26.21576424226414 && getScrollPercent() < 26.331679237806803) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.2"
        document.getElementById('mobile-section-image-3').style.opacity = "0.2"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 26.331679237806803 && getScrollPercent() < 26.447594233349466) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.25"
        document.getElementById('mobile-section-image-3').style.opacity = "0.25"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 26.447594233349466 && getScrollPercent() < 26.56350922889213) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.3"
        document.getElementById('mobile-section-image-3').style.opacity = "0.3"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 26.56350922889213 && getScrollPercent() < 26.679424224434793) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.35"
        document.getElementById('mobile-section-image-3').style.opacity = "0.35"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 26.679424224434793 && getScrollPercent() < 26.795339219977457) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.39999999999999997"
        document.getElementById('mobile-section-image-3').style.opacity = "0.39999999999999997"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 26.795339219977457 && getScrollPercent() < 26.91125421552012) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.44999999999999996"
        document.getElementById('mobile-section-image-3').style.opacity = "0.44999999999999996"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 26.91125421552012 && getScrollPercent() < 27.027169211062784) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.49999999999999994"
        document.getElementById('mobile-section-image-3').style.opacity = "0.49999999999999994"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 27.027169211062784 && getScrollPercent() < 27.143084206605447) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.5499999999999999"
        document.getElementById('mobile-section-image-3').style.opacity = "0.5499999999999999"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 27.143084206605447 && getScrollPercent() < 27.25899920214811) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.6"
        document.getElementById('mobile-section-image-3').style.opacity = "0.6"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 27.25899920214811 && getScrollPercent() < 27.374914197690774) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.65"
        document.getElementById('mobile-section-image-3').style.opacity = "0.65"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 27.374914197690774 && getScrollPercent() < 27.490829193233438) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.7000000000000001"
        document.getElementById('mobile-section-image-3').style.opacity = "0.7000000000000001"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 27.490829193233438 && getScrollPercent() < 27.6067441887761) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.7500000000000001"
        document.getElementById('mobile-section-image-3').style.opacity = "0.7500000000000001"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 27.6067441887761 && getScrollPercent() < 27.722659184318765) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.8000000000000002"
        document.getElementById('mobile-section-image-3').style.opacity = "0.8000000000000002"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 27.722659184318765 && getScrollPercent() < 27.83857417986143) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.8500000000000002"
        document.getElementById('mobile-section-image-3').style.opacity = "0.8500000000000002"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 27.83857417986143 && getScrollPercent() < 27.954489175404092) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.9000000000000002"
        document.getElementById('mobile-section-image-3').style.opacity = "0.9000000000000002"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 27.954489175404092 && getScrollPercent() < 28.070404170946755) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.9500000000000003"
        document.getElementById('mobile-section-image-3').style.opacity = "0.9500000000000003"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }


    if (getScrollPercent() > 28.070404170946755 && getScrollPercent() < 34.79767023574105) {
        document.getElementsByClassName('section4')[0].style.opacity = "1"
        document.getElementById('mobile-section-image-3').style.opacity = "1"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 34.79767023574105 && getScrollPercent() < 34.91358523128372) {
        document.getElementsByClassName('section4')[0].style.opacity = "1"
        document.getElementById('mobile-section-image-3').style.opacity = "1"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 34.91358523128372 && getScrollPercent() < 35.029500226826386) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.95"
        document.getElementById('mobile-section-image-3').style.opacity = "0.95"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 35.029500226826386 && getScrollPercent() < 35.14541522236905) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.8999999999999999"
        document.getElementById('mobile-section-image-3').style.opacity = "0.8999999999999999"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 35.14541522236905 && getScrollPercent() < 35.26133021791172) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.8499999999999999"
        document.getElementById('mobile-section-image-3').style.opacity = "0.8499999999999999"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 35.26133021791172 && getScrollPercent() < 35.37724521345439) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.7999999999999998"
        document.getElementById('mobile-section-image-3').style.opacity = "0.7999999999999998"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 35.37724521345439 && getScrollPercent() < 35.493160208997054) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.7499999999999998"
        document.getElementById('mobile-section-image-3').style.opacity = "0.7499999999999998"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 35.493160208997054 && getScrollPercent() < 35.60907520453972) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.6999999999999997"
        document.getElementById('mobile-section-image-3').style.opacity = "0.6999999999999997"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 35.60907520453972 && getScrollPercent() < 35.72499020008239) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.6499999999999997"
        document.getElementById('mobile-section-image-3').style.opacity = "0.6499999999999997"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 35.72499020008239 && getScrollPercent() < 35.840905195625055) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.5999999999999996"
        document.getElementById('mobile-section-image-3').style.opacity = "0.5999999999999996"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 35.840905195625055 && getScrollPercent() < 35.95682019116772) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.5499999999999996"
        document.getElementById('mobile-section-image-3').style.opacity = "0.5499999999999996"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 35.95682019116772 && getScrollPercent() < 36.07273518671039) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.4999999999999996"
        document.getElementById('mobile-section-image-3').style.opacity = "0.4999999999999996"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 36.07273518671039 && getScrollPercent() < 36.188650182253056) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.4499999999999996"
        document.getElementById('mobile-section-image-3').style.opacity = "0.4499999999999996"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 36.188650182253056 && getScrollPercent() < 36.30456517779572) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.39999999999999963"
        document.getElementById('mobile-section-image-3').style.opacity = "0.39999999999999963"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 36.30456517779572 && getScrollPercent() < 36.42048017333839) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.34999999999999964"
        document.getElementById('mobile-section-image-3').style.opacity = "0.34999999999999964"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 36.42048017333839 && getScrollPercent() < 36.53639516888106) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.29999999999999966"
        document.getElementById('mobile-section-image-3').style.opacity = "0.29999999999999966"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 36.53639516888106 && getScrollPercent() < 36.652310164423724) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.24999999999999967"
        document.getElementById('mobile-section-image-3').style.opacity = "0.24999999999999967"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 36.652310164423724 && getScrollPercent() < 36.76822515996639) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.19999999999999968"
        document.getElementById('mobile-section-image-3').style.opacity = "0.19999999999999968"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 36.76822515996639 && getScrollPercent() < 36.88414015550906) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.1499999999999997"
        document.getElementById('mobile-section-image-3').style.opacity = "0.1499999999999997"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 36.88414015550906 && getScrollPercent() < 37.000055151051725) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.09999999999999969"
        document.getElementById('mobile-section-image-3').style.opacity = "0.09999999999999969"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 37.000055151051725 && getScrollPercent() < 37.11597014659439) {
        document.getElementsByClassName('section4')[0].style.opacity = "0.049999999999999684"
        document.getElementById('mobile-section-image-3').style.opacity = "0.049999999999999684"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
        }

    if (getScrollPercent() > 37.11597014659439) {
        document.getElementsByClassName('section4')[0].style.opacity = "0"
        document.getElementById('mobile-section-image-3').style.opacity = "0"
        document.getElementsByClassName('section4-container')[0].style.display = "block"
    }
    // section 5
    if (getScrollPercent() < 37.11597014659439) {
        document.getElementsByClassName('section5')[0].style.opacity = "0"
        document.getElementById('mobile-section-image-4').style.opacity = "0"
        document.getElementsByClassName('section5-container')[0].style.display = "none"
    }

    if (getScrollPercent() > 37.11597014659439 && getScrollPercent() < 37.23188514213706) {
        document.getElementsByClassName('section5')[0].style.opacity = "0"
        document.getElementById('mobile-section-image-4').style.opacity = "0"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 37.23188514213706 && getScrollPercent() < 37.34780013767973) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.05"
        document.getElementById('mobile-section-image-4').style.opacity = "0.05"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 37.34780013767973 && getScrollPercent() < 37.463715133222394) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.1"
        document.getElementById('mobile-section-image-4').style.opacity = "0.1"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 37.463715133222394 && getScrollPercent() < 37.57963012876506) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.15000000000000002"
        document.getElementById('mobile-section-image-4').style.opacity = "0.15000000000000002"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 37.57963012876506 && getScrollPercent() < 37.69554512430773) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.2"
        document.getElementById('mobile-section-image-4').style.opacity = "0.2"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 37.69554512430773 && getScrollPercent() < 37.811460119850395) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.25"
        document.getElementById('mobile-section-image-4').style.opacity = "0.25"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 37.811460119850395 && getScrollPercent() < 37.92737511539306) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.3"
        document.getElementById('mobile-section-image-4').style.opacity = "0.3"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 37.92737511539306 && getScrollPercent() < 38.04329011093573) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.35"
        document.getElementById('mobile-section-image-4').style.opacity = "0.35"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 38.04329011093573 && getScrollPercent() < 38.159205106478396) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.39999999999999997"
        document.getElementById('mobile-section-image-4').style.opacity = "0.39999999999999997"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 38.159205106478396 && getScrollPercent() < 38.27512010202106) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.44999999999999996"
        document.getElementById('mobile-section-image-4').style.opacity = "0.44999999999999996"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 38.27512010202106 && getScrollPercent() < 38.39103509756373) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.49999999999999994"
        document.getElementById('mobile-section-image-4').style.opacity = "0.49999999999999994"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 38.39103509756373 && getScrollPercent() < 38.5069500931064) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.5499999999999999"
        document.getElementById('mobile-section-image-4').style.opacity = "0.5499999999999999"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 38.5069500931064 && getScrollPercent() < 38.622865088649064) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.6"
        document.getElementById('mobile-section-image-4').style.opacity = "0.6"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 38.622865088649064 && getScrollPercent() < 38.73878008419173) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.65"
        document.getElementById('mobile-section-image-4').style.opacity = "0.65"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 38.73878008419173 && getScrollPercent() < 38.8546950797344) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.7000000000000001"
        document.getElementById('mobile-section-image-4').style.opacity = "0.7000000000000001"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 38.8546950797344 && getScrollPercent() < 38.970610075277065) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.7500000000000001"
        document.getElementById('mobile-section-image-4').style.opacity = "0.7500000000000001"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 38.970610075277065 && getScrollPercent() < 39.08652507081973) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.8000000000000002"
        document.getElementById('mobile-section-image-4').style.opacity = "0.8000000000000002"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 39.08652507081973 && getScrollPercent() < 39.2024400663624) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.8500000000000002"
        document.getElementById('mobile-section-image-4').style.opacity = "0.8500000000000002"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 39.2024400663624 && getScrollPercent() < 39.318355061905066) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.9000000000000002"
        document.getElementById('mobile-section-image-4').style.opacity = "0.9000000000000002"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 39.318355061905066 && getScrollPercent() < 39.43427005744773) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.9500000000000003"
        document.getElementById('mobile-section-image-4').style.opacity = "0.9500000000000003"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }

    if (getScrollPercent() > 39.43427005744773 && getScrollPercent() < 46.321400460553704) {
        document.getElementsByClassName('section5')[0].style.opacity = "1"
        document.getElementById('mobile-section-image-4').style.opacity = "1"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
    }

    if (getScrollPercent() > 46.321400460553704 && getScrollPercent() < 46.43731545609637) {
        document.getElementsByClassName('section5')[0].style.opacity = "1"
        document.getElementById('mobile-section-image-4').style.opacity = "1"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 46.43731545609637 && getScrollPercent() < 46.55323045163904) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.95"
        document.getElementById('mobile-section-image-4').style.opacity = "0.95"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 46.55323045163904 && getScrollPercent() < 46.669145447181705) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.8999999999999999"
        document.getElementById('mobile-section-image-4').style.opacity = "0.8999999999999999"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 46.669145447181705 && getScrollPercent() < 46.78506044272437) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.8499999999999999"
        document.getElementById('mobile-section-image-4').style.opacity = "0.8499999999999999"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 46.78506044272437 && getScrollPercent() < 46.90097543826704) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.7999999999999998"
        document.getElementById('mobile-section-image-4').style.opacity = "0.7999999999999998"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 46.90097543826704 && getScrollPercent() < 47.01689043380971) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.7499999999999998"
        document.getElementById('mobile-section-image-4').style.opacity = "0.7499999999999998"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 47.01689043380971 && getScrollPercent() < 47.13280542935237) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.6999999999999997"
        document.getElementById('mobile-section-image-4').style.opacity = "0.6999999999999997"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 47.13280542935237 && getScrollPercent() < 47.24872042489504) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.6499999999999997"
        document.getElementById('mobile-section-image-4').style.opacity = "0.6499999999999997"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 47.24872042489504 && getScrollPercent() < 47.36463542043771) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.5999999999999996"
        document.getElementById('mobile-section-image-4').style.opacity = "0.5999999999999996"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 47.36463542043771 && getScrollPercent() < 47.480550415980375) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.5499999999999996"
        document.getElementById('mobile-section-image-4').style.opacity = "0.5499999999999996"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 47.480550415980375 && getScrollPercent() < 47.59646541152304) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.4999999999999996"
        document.getElementById('mobile-section-image-4').style.opacity = "0.4999999999999996"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 47.59646541152304 && getScrollPercent() < 47.71238040706571) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.4499999999999996"
        document.getElementById('mobile-section-image-4').style.opacity = "0.4499999999999996"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 47.71238040706571 && getScrollPercent() < 47.828295402608376) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.39999999999999963"
        document.getElementById('mobile-section-image-4').style.opacity = "0.39999999999999963"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 47.828295402608376 && getScrollPercent() < 47.94421039815104) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.34999999999999964"
        document.getElementById('mobile-section-image-4').style.opacity = "0.34999999999999964"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 47.94421039815104 && getScrollPercent() < 48.06012539369371) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.29999999999999966"
        document.getElementById('mobile-section-image-4').style.opacity = "0.29999999999999966"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 48.06012539369371 && getScrollPercent() < 48.17604038923638) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.24999999999999967"
        document.getElementById('mobile-section-image-4').style.opacity = "0.24999999999999967"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 48.17604038923638 && getScrollPercent() < 48.291955384779044) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.19999999999999968"
        document.getElementById('mobile-section-image-4').style.opacity = "0.19999999999999968"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 48.291955384779044 && getScrollPercent() < 48.40787038032171) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.1499999999999997"
        document.getElementById('mobile-section-image-4').style.opacity = "0.1499999999999997"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 48.40787038032171 && getScrollPercent() < 48.52378537586438) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.09999999999999969"
        document.getElementById('mobile-section-image-4').style.opacity = "0.09999999999999969"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 48.52378537586438 && getScrollPercent() < 48.639700371407045) {
        document.getElementsByClassName('section5')[0].style.opacity = "0.049999999999999684"
        document.getElementById('mobile-section-image-4').style.opacity = "0.049999999999999684"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
        }

    if (getScrollPercent() > 48.639700371407045) {
        document.getElementsByClassName('section5')[0].style.opacity = "0"
        document.getElementById('mobile-section-image-4').style.opacity = "0"
        document.getElementsByClassName('section5-container')[0].style.display = "block"
    }

    // section 6
    if (getScrollPercent() < 48.639700371407045) {
        document.getElementsByClassName('section6')[0].style.opacity = "0"
        document.getElementsByClassName('m1')[0].style.opacity = "0"
        document.getElementsByClassName('section6-container')[0].style.display = "none"
    }
    if (getScrollPercent() > 48.639700371407045 && getScrollPercent() < 48.75561536694971) {
        document.getElementsByClassName('section6')[0].style.opacity = "0"
        document.getElementsByClassName('m1')[0].style.opacity = "0"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 48.75561536694971 && getScrollPercent() < 48.87153036249238) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.05"
        document.getElementsByClassName('m1')[0].style.opacity = "0.05"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 48.87153036249238 && getScrollPercent() < 48.987445358035046) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.1"
        document.getElementsByClassName('m1')[0].style.opacity = "0.1"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 48.987445358035046 && getScrollPercent() < 49.10336035357771) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.15000000000000002"
        document.getElementsByClassName('m1')[0].style.opacity = "0.15000000000000002"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 49.10336035357771 && getScrollPercent() < 49.21927534912038) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.2"
        document.getElementsByClassName('m1')[0].style.opacity = "0.2"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 49.21927534912038 && getScrollPercent() < 49.33519034466305) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.25"
        document.getElementsByClassName('m1')[0].style.opacity = "0.25"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 49.33519034466305 && getScrollPercent() < 49.451105340205714) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.3"
        document.getElementsByClassName('m1')[0].style.opacity = "0.3"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 49.451105340205714 && getScrollPercent() < 49.56702033574838) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.35"
        document.getElementsByClassName('m1')[0].style.opacity = "0.35"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 49.56702033574838 && getScrollPercent() < 49.68293533129105) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.39999999999999997"
        document.getElementsByClassName('m1')[0].style.opacity = "0.39999999999999997"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 49.68293533129105 && getScrollPercent() < 49.798850326833715) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.44999999999999996"
        document.getElementsByClassName('m1')[0].style.opacity = "0.44999999999999996"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 49.798850326833715 && getScrollPercent() < 49.91476532237638) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.49999999999999994"
        document.getElementsByClassName('m1')[0].style.opacity = "0.49999999999999994"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 49.91476532237638 && getScrollPercent() < 50.03068031791905) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.5499999999999999"
        document.getElementsByClassName('m1')[0].style.opacity = "0.5499999999999999"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 50.03068031791905 && getScrollPercent() < 50.14659531346172) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.6"
        document.getElementsByClassName('m1')[0].style.opacity = "0.6"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 50.14659531346172 && getScrollPercent() < 50.262510309004384) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.65"
        document.getElementsByClassName('m1')[0].style.opacity = "0.65"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 50.262510309004384 && getScrollPercent() < 50.37842530454705) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.7000000000000001"
        document.getElementsByClassName('m1')[0].style.opacity = "0.7000000000000001"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 50.37842530454705 && getScrollPercent() < 50.49434030008972) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.7500000000000001"
        document.getElementsByClassName('m1')[0].style.opacity = "0.7500000000000001"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 50.49434030008972 && getScrollPercent() < 50.610255295632385) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.8000000000000002"
        document.getElementsByClassName('m1')[0].style.opacity = "0.8000000000000002"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 50.610255295632385 && getScrollPercent() < 50.72617029117505) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.8500000000000002"
        document.getElementsByClassName('m1')[0].style.opacity = "0.8500000000000002"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 50.72617029117505 && getScrollPercent() < 50.84208528671772) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.9000000000000002"
        document.getElementsByClassName('m1')[0].style.opacity = "0.9000000000000002"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 50.84208528671772 && getScrollPercent() < 50.958000282260386) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.9500000000000003"
        document.getElementsByClassName('m1')[0].style.opacity = "0.9500000000000003"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }

    if (getScrollPercent() > 50.958000282260386) {
        document.getElementsByClassName('m1')[0].style.opacity = "1"
    }

    if (getScrollPercent() > 57.458782720129065 && getScrollPercent() < 57.57469771567173) {
        document.getElementsByClassName('section6')[0].style.opacity = "1"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 57.57469771567173 && getScrollPercent() < 57.6906127112144) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.95"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 57.6906127112144 && getScrollPercent() < 57.806527706757066) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.8999999999999999"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 57.806527706757066 && getScrollPercent() < 57.92244270229973) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.8499999999999999"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 57.92244270229973 && getScrollPercent() < 58.0383576978424) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.7999999999999998"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 58.0383576978424 && getScrollPercent() < 58.15427269338507) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.7499999999999998"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 58.15427269338507 && getScrollPercent() < 58.270187688927734) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.6999999999999997"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 58.270187688927734 && getScrollPercent() < 58.3861026844704) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.6499999999999997"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 58.3861026844704 && getScrollPercent() < 58.50201768001307) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.5999999999999996"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 58.50201768001307 && getScrollPercent() < 58.617932675555735) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.5499999999999996"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 58.617932675555735 && getScrollPercent() < 58.7338476710984) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.4999999999999996"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 58.7338476710984 && getScrollPercent() < 58.84976266664107) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.4499999999999996"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 58.84976266664107 && getScrollPercent() < 58.96567766218374) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.39999999999999963"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 58.96567766218374 && getScrollPercent() < 59.081592657726404) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.34999999999999964"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 59.081592657726404 && getScrollPercent() < 59.19750765326907) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.29999999999999966"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 59.19750765326907 && getScrollPercent() < 59.31342264881174) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.24999999999999967"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 59.31342264881174 && getScrollPercent() < 59.429337644354405) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.19999999999999968"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 59.429337644354405 && getScrollPercent() < 59.54525263989707) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.1499999999999997"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 59.54525263989707 && getScrollPercent() < 59.66116763543974) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.09999999999999969"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 59.66116763543974 && getScrollPercent() < 59.777082630982406) {
        document.getElementsByClassName('section6')[0].style.opacity = "0.049999999999999684"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
        }

    if (getScrollPercent() > 59.777082630982406) {
        document.getElementsByClassName('section6')[0].style.opacity = "0"
        document.getElementsByClassName('section6-container')[0].style.display = "block"
    }
    // section 7
    if (getScrollPercent() < 59.777082630982406) {
        document.getElementsByClassName('section7')[0].style.opacity = "0"
        document.getElementsByClassName('section7-container')[0].style.display = "none"
    }
    if (getScrollPercent() > 62.24146707171108 && getScrollPercent() < 62.357382067253745) {
        document.getElementsByClassName('section7')[0].style.opacity = "0"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 62.357382067253745 && getScrollPercent() < 62.47329706279641) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.05"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 62.47329706279641 && getScrollPercent() < 62.58921205833908) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.1"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 62.58921205833908 && getScrollPercent() < 62.705127053881746) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.15000000000000002"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 62.705127053881746 && getScrollPercent() < 62.82104204942441) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.2"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 62.82104204942441 && getScrollPercent() < 62.93695704496708) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.25"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 62.93695704496708 && getScrollPercent() < 63.05287204050975) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.3"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 63.05287204050975 && getScrollPercent() < 63.168787036052414) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.35"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 63.168787036052414 && getScrollPercent() < 63.28470203159508) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.39999999999999997"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 63.28470203159508 && getScrollPercent() < 63.40061702713775) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.44999999999999996"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 63.40061702713775 && getScrollPercent() < 63.516532022680416) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.49999999999999994"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 63.516532022680416 && getScrollPercent() < 63.63244701822308) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.5499999999999999"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 63.63244701822308 && getScrollPercent() < 63.74836201376575) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.6"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 63.74836201376575 && getScrollPercent() < 63.86427700930842) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.65"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 63.86427700930842 && getScrollPercent() < 63.980192004851084) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.7000000000000001"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 63.980192004851084 && getScrollPercent() < 64.09610700039374) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.7500000000000001"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 64.09610700039374 && getScrollPercent() < 64.21202199593641) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.8000000000000002"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 64.21202199593641 && getScrollPercent() < 64.32793699147908) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.8500000000000002"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 64.32793699147908 && getScrollPercent() < 64.44385198702174) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.9000000000000002"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }
        
        if (getScrollPercent() > 64.44385198702174 && getScrollPercent() < 64.55976698256441) {
        document.getElementsByClassName('section7')[0].style.opacity = "0.9500000000000003"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
        }

    if (getScrollPercent() > 64.55976698256441) {
        document.getElementsByClassName('section7')[0].style.opacity = "1"
        document.getElementsByClassName('section7-container')[0].style.display = "block"
    }
    // anim images 
    if (getScrollPercent() > 0 && getScrollPercent() < 0.1159149955426637) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i1')[0].classList.add('show')
    }

    if (getScrollPercent() > 0.1159149955426637 && getScrollPercent() < 0.2318299910853274) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i2')[0].classList.add('show')
    }

    if (getScrollPercent() > 0.2318299910853274 && getScrollPercent() < 0.3477449866279911) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i3')[0].classList.add('show')
    }

    if (getScrollPercent() > 0.3477449866279911 && getScrollPercent() < 0.4636599821706548) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i4')[0].classList.add('show')
    }

    if (getScrollPercent() > 0.4636599821706548 && getScrollPercent() < 0.5795749777133185) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i5')[0].classList.add('show')
    }

    if (getScrollPercent() > 0.5795749777133185 && getScrollPercent() < 0.6954899732559822) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i6')[0].classList.add('show')
    }

    if (getScrollPercent() > 0.6954899732559822 && getScrollPercent() < 0.8114049687986459) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i7')[0].classList.add('show')
    }

    if (getScrollPercent() > 0.8114049687986459 && getScrollPercent() < 0.9273199643413096) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i8')[0].classList.add('show')
    }

    if (getScrollPercent() > 0.9273199643413096 && getScrollPercent() < 1.0432349598839732) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i9')[0].classList.add('show')
    }

    if (getScrollPercent() > 1.0432349598839732 && getScrollPercent() < 1.159149955426637) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i10')[0].classList.add('show')
    }

    if (getScrollPercent() > 1.159149955426637 && getScrollPercent() < 1.2750649509693006) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i11')[0].classList.add('show')
    }

    if (getScrollPercent() > 1.2750649509693006 && getScrollPercent() < 1.3909799465119643) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i12')[0].classList.add('show')
    }

    if (getScrollPercent() > 1.3909799465119643 && getScrollPercent() < 1.506894942054628) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i13')[0].classList.add('show')
    }

    if (getScrollPercent() > 1.506894942054628 && getScrollPercent() < 1.6228099375972918) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i14')[0].classList.add('show')
    }

    if (getScrollPercent() > 1.6228099375972918 && getScrollPercent() < 1.7387249331399555) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i15')[0].classList.add('show')
    }

    if (getScrollPercent() > 1.7387249331399555 && getScrollPercent() < 1.8546399286826192) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i16')[0].classList.add('show')
    }

    if (getScrollPercent() > 1.8546399286826192 && getScrollPercent() < 1.970554924225283) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i17')[0].classList.add('show')
    }

    if (getScrollPercent() > 1.970554924225283 && getScrollPercent() < 2.0864699197679464) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i18')[0].classList.add('show')
    }

    if (getScrollPercent() > 2.0864699197679464 && getScrollPercent() < 2.20238491531061) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i19')[0].classList.add('show')
    }

    if (getScrollPercent() > 2.20238491531061 && getScrollPercent() < 2.3182999108532734) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i20')[0].classList.add('show')
    }

    if (getScrollPercent() > 2.3182999108532734 && getScrollPercent() < 2.434214906395937) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i21')[0].classList.add('show')
    }

    if (getScrollPercent() > 2.434214906395937 && getScrollPercent() < 2.5501299019386003) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i22')[0].classList.add('show')
    }

    if (getScrollPercent() > 2.5501299019386003 && getScrollPercent() < 2.666044897481264) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i23')[0].classList.add('show')
    }

    if (getScrollPercent() > 2.666044897481264 && getScrollPercent() < 2.7819598930239273) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i24')[0].classList.add('show')
    }

    if (getScrollPercent() > 2.7819598930239273 && getScrollPercent() < 2.897874888566591) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i25')[0].classList.add('show')
    }

    if (getScrollPercent() > 2.897874888566591 && getScrollPercent() < 3.0137898841092543) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i26')[0].classList.add('show')
    }

    if (getScrollPercent() > 3.0137898841092543 && getScrollPercent() < 3.129704879651918) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i27')[0].classList.add('show')
    }

    if (getScrollPercent() > 3.129704879651918 && getScrollPercent() < 3.2456198751945813) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i28')[0].classList.add('show')
    }

    if (getScrollPercent() > 3.2456198751945813 && getScrollPercent() < 3.3615348707372448) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i29')[0].classList.add('show')
    }

    if (getScrollPercent() > 3.3615348707372448 && getScrollPercent() < 3.4774498662799083) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i30')[0].classList.add('show')
    }

    if (getScrollPercent() > 3.4774498662799083 && getScrollPercent() < 3.5933648618225718) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i31')[0].classList.add('show')
    }

    if (getScrollPercent() > 3.5933648618225718 && getScrollPercent() < 3.7092798573652352) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i32')[0].classList.add('show')
    }

    if (getScrollPercent() > 3.7092798573652352 && getScrollPercent() < 3.8251948529078987) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i33')[0].classList.add('show')
    }

    if (getScrollPercent() > 3.8251948529078987 && getScrollPercent() < 3.9411098484505622) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i34')[0].classList.add('show')
    }

    if (getScrollPercent() > 3.9411098484505622 && getScrollPercent() < 4.057024843993226) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i35')[0].classList.add('show')
    }

    if (getScrollPercent() > 4.057024843993226 && getScrollPercent() < 4.172939839535889) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i36')[0].classList.add('show')
    }

    if (getScrollPercent() > 4.172939839535889 && getScrollPercent() < 4.288854835078553) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i37')[0].classList.add('show')
    }

    if (getScrollPercent() > 4.288854835078553 && getScrollPercent() < 4.404769830621216) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i38')[0].classList.add('show')
    }

    if (getScrollPercent() > 4.404769830621216 && getScrollPercent() < 4.52068482616388) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i39')[0].classList.add('show')
    }

    if (getScrollPercent() > 4.52068482616388 && getScrollPercent() < 4.636599821706543) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i40')[0].classList.add('show')
    }

    if (getScrollPercent() > 4.636599821706543 && getScrollPercent() < 4.752514817249207) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i41')[0].classList.add('show')
    }

    if (getScrollPercent() > 4.752514817249207 && getScrollPercent() < 4.86842981279187) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i42')[0].classList.add('show')
    }

    if (getScrollPercent() > 4.86842981279187 && getScrollPercent() < 4.984344808334534) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i43')[0].classList.add('show')
    }

    if (getScrollPercent() > 4.984344808334534 && getScrollPercent() < 5.100259803877197) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i44')[0].classList.add('show')
    }

    if (getScrollPercent() > 5.100259803877197 && getScrollPercent() < 5.216174799419861) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i45')[0].classList.add('show')
    }

    if (getScrollPercent() > 5.216174799419861 && getScrollPercent() < 5.332089794962524) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i46')[0].classList.add('show')
    }

    if (getScrollPercent() > 5.332089794962524 && getScrollPercent() < 5.448004790505188) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i47')[0].classList.add('show')
    }

    if (getScrollPercent() > 5.448004790505188 && getScrollPercent() < 5.563919786047851) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i48')[0].classList.add('show')
    }

    if (getScrollPercent() > 5.563919786047851 && getScrollPercent() < 5.679834781590515) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i49')[0].classList.add('show')
    }

    if (getScrollPercent() > 5.679834781590515 && getScrollPercent() < 5.795749777133178) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i50')[0].classList.add('show')
    }

    if (getScrollPercent() > 5.795749777133178 && getScrollPercent() < 5.911664772675842) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i51')[0].classList.add('show')
    }

    if (getScrollPercent() > 5.911664772675842 && getScrollPercent() < 6.027579768218505) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i52')[0].classList.add('show')
    }

    if (getScrollPercent() > 6.027579768218505 && getScrollPercent() < 6.1434947637611685) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i53')[0].classList.add('show')
    }

    if (getScrollPercent() > 6.1434947637611685 && getScrollPercent() < 6.259409759303832) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i54')[0].classList.add('show')
    }

    if (getScrollPercent() > 6.259409759303832 && getScrollPercent() < 6.3753247548464955) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i55')[0].classList.add('show')
    }

    if (getScrollPercent() > 6.3753247548464955 && getScrollPercent() < 6.491239750389159) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i56')[0].classList.add('show')
    }

    if (getScrollPercent() > 6.491239750389159 && getScrollPercent() < 6.6071547459318225) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i57')[0].classList.add('show')
    }

    if (getScrollPercent() > 6.6071547459318225 && getScrollPercent() < 6.723069741474486) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i58')[0].classList.add('show')
    }

    if (getScrollPercent() > 6.723069741474486 && getScrollPercent() < 6.8389847370171495) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i59')[0].classList.add('show')
    }

    if (getScrollPercent() > 6.8389847370171495 && getScrollPercent() < 6.954899732559813) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i60')[0].classList.add('show')
    }

    if (getScrollPercent() > 6.954899732559813 && getScrollPercent() < 7.0708147281024765) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i61')[0].classList.add('show')
    }

    if (getScrollPercent() > 7.0708147281024765 && getScrollPercent() < 7.18672972364514) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i62')[0].classList.add('show')
    }

    if (getScrollPercent() > 7.18672972364514 && getScrollPercent() < 7.3026447191878034) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i63')[0].classList.add('show')
    }

    if (getScrollPercent() > 7.3026447191878034 && getScrollPercent() < 7.418559714730467) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i64')[0].classList.add('show')
    }

    if (getScrollPercent() > 7.418559714730467 && getScrollPercent() < 7.53447471027313) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i65')[0].classList.add('show')
    }

    if (getScrollPercent() > 7.53447471027313 && getScrollPercent() < 7.650389705815794) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i66')[0].classList.add('show')
    }

    if (getScrollPercent() > 7.650389705815794 && getScrollPercent() < 7.766304701358457) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i67')[0].classList.add('show')
    }

    if (getScrollPercent() > 7.766304701358457 && getScrollPercent() < 7.882219696901121) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i68')[0].classList.add('show')
    }

    if (getScrollPercent() > 7.882219696901121 && getScrollPercent() < 7.998134692443784) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i69')[0].classList.add('show')
    }

    if (getScrollPercent() > 7.998134692443784 && getScrollPercent() < 8.114049687986448) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i70')[0].classList.add('show')
    }

    if (getScrollPercent() > 8.114049687986448 && getScrollPercent() < 8.229964683529111) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i71')[0].classList.add('show')
    }

    if (getScrollPercent() > 8.229964683529111 && getScrollPercent() < 8.345879679071775) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i72')[0].classList.add('show')
    }

    if (getScrollPercent() > 8.345879679071775 && getScrollPercent() < 8.461794674614438) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i73')[0].classList.add('show')
    }

    if (getScrollPercent() > 8.461794674614438 && getScrollPercent() < 8.577709670157102) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i74')[0].classList.add('show')
    }

    if (getScrollPercent() > 8.577709670157102 && getScrollPercent() < 8.693624665699765) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i75')[0].classList.add('show')
    }

    if (getScrollPercent() > 8.693624665699765 && getScrollPercent() < 8.809539661242429) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i76')[0].classList.add('show')
    }

    if (getScrollPercent() > 8.809539661242429 && getScrollPercent() < 8.925454656785092) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i77')[0].classList.add('show')
    }

    if (getScrollPercent() > 8.925454656785092 && getScrollPercent() < 9.041369652327756) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i78')[0].classList.add('show')
    }

    if (getScrollPercent() > 9.041369652327756 && getScrollPercent() < 9.15728464787042) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i79')[0].classList.add('show')
    }

    if (getScrollPercent() > 9.15728464787042 && getScrollPercent() < 9.273199643413083) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i80')[0].classList.add('show')
    }

    if (getScrollPercent() > 9.273199643413083 && getScrollPercent() < 9.389114638955746) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i81')[0].classList.add('show')
    }

    if (getScrollPercent() > 9.389114638955746 && getScrollPercent() < 9.50502963449841) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i82')[0].classList.add('show')
    }

    if (getScrollPercent() > 9.50502963449841 && getScrollPercent() < 9.620944630041073) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i83')[0].classList.add('show')
    }

    if (getScrollPercent() > 9.620944630041073 && getScrollPercent() < 9.736859625583737) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i84')[0].classList.add('show')
    }

    if (getScrollPercent() > 9.736859625583737 && getScrollPercent() < 9.8527746211264) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i85')[0].classList.add('show')
    }

    if (getScrollPercent() > 9.8527746211264 && getScrollPercent() < 9.968689616669064) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i86')[0].classList.add('show')
    }

    if (getScrollPercent() > 9.968689616669064 && getScrollPercent() < 10.084604612211727) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i87')[0].classList.add('show')
    }

    if (getScrollPercent() > 10.084604612211727 && getScrollPercent() < 10.20051960775439) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i88')[0].classList.add('show')
    }

    if (getScrollPercent() > 10.20051960775439 && getScrollPercent() < 10.316434603297054) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i89')[0].classList.add('show')
    }

    if (getScrollPercent() > 10.316434603297054 && getScrollPercent() < 10.432349598839718) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i90')[0].classList.add('show')
    }

    if (getScrollPercent() > 10.432349598839718 && getScrollPercent() < 10.548264594382381) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i91')[0].classList.add('show')
    }

    if (getScrollPercent() > 10.548264594382381 && getScrollPercent() < 10.664179589925045) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i92')[0].classList.add('show')
    }

    if (getScrollPercent() > 10.664179589925045 && getScrollPercent() < 10.780094585467708) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i93')[0].classList.add('show')
    }

    if (getScrollPercent() > 10.780094585467708 && getScrollPercent() < 10.896009581010372) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i94')[0].classList.add('show')
    }

    if (getScrollPercent() > 10.896009581010372 && getScrollPercent() < 11.011924576553035) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i95')[0].classList.add('show')
    }

    if (getScrollPercent() > 11.011924576553035 && getScrollPercent() < 11.127839572095699) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i96')[0].classList.add('show')
    }

    if (getScrollPercent() > 11.127839572095699 && getScrollPercent() < 11.243754567638362) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i97')[0].classList.add('show')
    }

    if (getScrollPercent() > 11.243754567638362 && getScrollPercent() < 11.359669563181026) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i98')[0].classList.add('show')
    }

    if (getScrollPercent() > 11.359669563181026 && getScrollPercent() < 11.475584558723689) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i99')[0].classList.add('show')
    }

    if (getScrollPercent() > 11.475584558723689 && getScrollPercent() < 11.591499554266353) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i100')[0].classList.add('show')
    }

    if (getScrollPercent() > 11.591499554266353 && getScrollPercent() < 11.707414549809016) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i101')[0].classList.add('show')
    }

    if (getScrollPercent() > 11.707414549809016 && getScrollPercent() < 11.82332954535168) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i102')[0].classList.add('show')
    }

    if (getScrollPercent() > 11.82332954535168 && getScrollPercent() < 11.939244540894343) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i103')[0].classList.add('show')
    }

    if (getScrollPercent() > 11.939244540894343 && getScrollPercent() < 12.055159536437007) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i104')[0].classList.add('show')
    }

    if (getScrollPercent() > 12.055159536437007 && getScrollPercent() < 12.17107453197967) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i105')[0].classList.add('show')
    }

    if (getScrollPercent() > 12.17107453197967 && getScrollPercent() < 12.286989527522334) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i106')[0].classList.add('show')
    }

    if (getScrollPercent() > 12.286989527522334 && getScrollPercent() < 12.402904523064997) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i107')[0].classList.add('show')
    }

    if (getScrollPercent() > 12.402904523064997 && getScrollPercent() < 12.51881951860766) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i108')[0].classList.add('show')
    }

    if (getScrollPercent() > 12.51881951860766 && getScrollPercent() < 12.634734514150324) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i109')[0].classList.add('show')
    }

    if (getScrollPercent() > 12.634734514150324 && getScrollPercent() < 12.750649509692987) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i110')[0].classList.add('show')
    }

    if (getScrollPercent() > 12.750649509692987 && getScrollPercent() < 12.866564505235651) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i111')[0].classList.add('show')
    }

    if (getScrollPercent() > 12.866564505235651 && getScrollPercent() < 12.982479500778314) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i112')[0].classList.add('show')
    }

    if (getScrollPercent() > 12.982479500778314 && getScrollPercent() < 13.098394496320978) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i113')[0].classList.add('show')
    }

    if (getScrollPercent() > 13.098394496320978 && getScrollPercent() < 13.214309491863641) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i114')[0].classList.add('show')
    }

    if (getScrollPercent() > 13.214309491863641 && getScrollPercent() < 13.330224487406305) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i115')[0].classList.add('show')
    }

    if (getScrollPercent() > 13.330224487406305 && getScrollPercent() < 13.446139482948968) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i116')[0].classList.add('show')
    }

    if (getScrollPercent() > 13.446139482948968 && getScrollPercent() < 13.562054478491632) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i117')[0].classList.add('show')
    }

    if (getScrollPercent() > 13.562054478491632 && getScrollPercent() < 13.677969474034295) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i118')[0].classList.add('show')
    }

    if (getScrollPercent() > 13.677969474034295 && getScrollPercent() < 13.793884469576959) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i119')[0].classList.add('show')
    }

    if (getScrollPercent() > 13.793884469576959 && getScrollPercent() < 13.909799465119622) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i120')[0].classList.add('show')
    }

    if (getScrollPercent() > 13.909799465119622 && getScrollPercent() < 14.025714460662286) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i121')[0].classList.add('show')
    }

    if (getScrollPercent() > 14.025714460662286 && getScrollPercent() < 14.14162945620495) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i122')[0].classList.add('show')
    }

    if (getScrollPercent() > 14.14162945620495 && getScrollPercent() < 14.257544451747613) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i123')[0].classList.add('show')
    }

    if (getScrollPercent() > 14.257544451747613 && getScrollPercent() < 14.373459447290276) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i124')[0].classList.add('show')
    }

    if (getScrollPercent() > 14.373459447290276 && getScrollPercent() < 14.48937444283294) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i125')[0].classList.add('show')
    }

    if (getScrollPercent() > 14.48937444283294 && getScrollPercent() < 14.605289438375603) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i126')[0].classList.add('show')
    }

    if (getScrollPercent() > 14.605289438375603 && getScrollPercent() < 14.721204433918267) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i127')[0].classList.add('show')
    }

    if (getScrollPercent() > 14.721204433918267 && getScrollPercent() < 14.83711942946093) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i128')[0].classList.add('show')
    }

    if (getScrollPercent() > 14.83711942946093 && getScrollPercent() < 14.953034425003594) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i129')[0].classList.add('show')
    }

    if (getScrollPercent() > 14.953034425003594 && getScrollPercent() < 15.068949420546257) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i130')[0].classList.add('show')
    }

    if (getScrollPercent() > 15.068949420546257 && getScrollPercent() < 15.18486441608892) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i131')[0].classList.add('show')
    }

    if (getScrollPercent() > 15.18486441608892 && getScrollPercent() < 15.300779411631584) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i132')[0].classList.add('show')
    }

    if (getScrollPercent() > 15.300779411631584 && getScrollPercent() < 15.416694407174248) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i133')[0].classList.add('show')
    }

    if (getScrollPercent() > 15.416694407174248 && getScrollPercent() < 15.532609402716911) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i134')[0].classList.add('show')
    }

    if (getScrollPercent() > 15.532609402716911 && getScrollPercent() < 15.648524398259575) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i135')[0].classList.add('show')
    }

    if (getScrollPercent() > 15.648524398259575 && getScrollPercent() < 15.764439393802238) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i136')[0].classList.add('show')
    }

    if (getScrollPercent() > 15.764439393802238 && getScrollPercent() < 15.880354389344902) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i137')[0].classList.add('show')
    }

    if (getScrollPercent() > 15.880354389344902 && getScrollPercent() < 15.996269384887565) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i138')[0].classList.add('show')
    }

    if (getScrollPercent() > 15.996269384887565 && getScrollPercent() < 16.11218438043023) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i139')[0].classList.add('show')
    }

    if (getScrollPercent() > 16.11218438043023 && getScrollPercent() < 16.228099375972892) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i140')[0].classList.add('show')
    }

    if (getScrollPercent() > 16.228099375972892 && getScrollPercent() < 16.344014371515556) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i141')[0].classList.add('show')
    }

    if (getScrollPercent() > 16.344014371515556 && getScrollPercent() < 16.45992936705822) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i142')[0].classList.add('show')
    }

    if (getScrollPercent() > 16.45992936705822 && getScrollPercent() < 16.575844362600883) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i143')[0].classList.add('show')
    }

    if (getScrollPercent() > 16.575844362600883 && getScrollPercent() < 16.691759358143546) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i144')[0].classList.add('show')
    }

    if (getScrollPercent() > 16.691759358143546 && getScrollPercent() < 16.80767435368621) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i145')[0].classList.add('show')
    }

    if (getScrollPercent() > 16.80767435368621 && getScrollPercent() < 16.923589349228873) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i146')[0].classList.add('show')
    }

    if (getScrollPercent() > 16.923589349228873 && getScrollPercent() < 17.039504344771537) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i147')[0].classList.add('show')
    }

    if (getScrollPercent() > 17.039504344771537 && getScrollPercent() < 17.1554193403142) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i148')[0].classList.add('show')
    }

    if (getScrollPercent() > 17.1554193403142 && getScrollPercent() < 17.271334335856864) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i149')[0].classList.add('show')
    }

    if (getScrollPercent() > 17.271334335856864 && getScrollPercent() < 17.387249331399527) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i150')[0].classList.add('show')
    }

    if (getScrollPercent() > 17.387249331399527 && getScrollPercent() < 17.50316432694219) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i151')[0].classList.add('show')
    }

    if (getScrollPercent() > 17.50316432694219 && getScrollPercent() < 17.619079322484854) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i152')[0].classList.add('show')
    }

    if (getScrollPercent() > 17.619079322484854 && getScrollPercent() < 17.734994318027518) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i153')[0].classList.add('show')
    }

    if (getScrollPercent() > 17.734994318027518 && getScrollPercent() < 17.85090931357018) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i154')[0].classList.add('show')
    }

    if (getScrollPercent() > 17.85090931357018 && getScrollPercent() < 17.966824309112845) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i155')[0].classList.add('show')
    }

    if (getScrollPercent() > 17.966824309112845 && getScrollPercent() < 18.082739304655508) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i156')[0].classList.add('show')
    }

    if (getScrollPercent() > 18.082739304655508 && getScrollPercent() < 18.19865430019817) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i157')[0].classList.add('show')
    }

    if (getScrollPercent() > 18.19865430019817 && getScrollPercent() < 18.314569295740835) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i158')[0].classList.add('show')
    }

    if (getScrollPercent() > 18.314569295740835 && getScrollPercent() < 18.4304842912835) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i159')[0].classList.add('show')
    }

    if (getScrollPercent() > 18.4304842912835 && getScrollPercent() < 18.546399286826162) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i160')[0].classList.add('show')
    }

    if (getScrollPercent() > 18.546399286826162 && getScrollPercent() < 18.662314282368826) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i161')[0].classList.add('show')
    }

    if (getScrollPercent() > 18.662314282368826 && getScrollPercent() < 18.77822927791149) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i162')[0].classList.add('show')
    }

    if (getScrollPercent() > 18.77822927791149 && getScrollPercent() < 18.894144273454152) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i163')[0].classList.add('show')
    }

    if (getScrollPercent() > 18.894144273454152 && getScrollPercent() < 19.010059268996816) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i164')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.010059268996816 && getScrollPercent() < 19.12597426453948) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i165')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.12597426453948 && getScrollPercent() < 19.241889260082143) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i166')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.241889260082143 && getScrollPercent() < 19.357804255624806) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i167')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.357804255624806 && getScrollPercent() < 19.47371925116747) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i168')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.47371925116747 && getScrollPercent() < 19.589634246710133) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i169')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.589634246710133 && getScrollPercent() < 19.705549242252797) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i170')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.705549242252797 && getScrollPercent() < 19.82146423779546) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i171')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.82146423779546 && getScrollPercent() < 19.937379233338124) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i172')[0].classList.add('show')
    }

    if (getScrollPercent() > 19.937379233338124 && getScrollPercent() < 20.053294228880787) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i173')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.053294228880787 && getScrollPercent() < 20.16920922442345) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i174')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.16920922442345 && getScrollPercent() < 20.285124219966114) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i175')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.285124219966114 && getScrollPercent() < 20.401039215508778) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i176')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.401039215508778 && getScrollPercent() < 20.51695421105144) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i177')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.51695421105144 && getScrollPercent() < 20.632869206594105) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i178')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.632869206594105 && getScrollPercent() < 20.74878420213677) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i179')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.74878420213677 && getScrollPercent() < 20.864699197679432) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i180')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.864699197679432 && getScrollPercent() < 20.980614193222095) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i181')[0].classList.add('show')
    }

    if (getScrollPercent() > 20.980614193222095 && getScrollPercent() < 21.09652918876476) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i182')[0].classList.add('show')
    }

    if (getScrollPercent() > 21.09652918876476 && getScrollPercent() < 21.212444184307422) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i183')[0].classList.add('show')
    }

    if (getScrollPercent() > 21.212444184307422 && getScrollPercent() < 21.328359179850086) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i184')[0].classList.add('show')
    }

    if (getScrollPercent() > 21.328359179850086 && getScrollPercent() < 21.44427417539275) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i185')[0].classList.add('show')
    }

    if (getScrollPercent() > 21.44427417539275 && getScrollPercent() < 21.560189170935413) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i186')[0].classList.add('show')
    }

    if (getScrollPercent() > 21.560189170935413 && getScrollPercent() < 21.676104166478076) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i187')[0].classList.add('show')
    }

    if (getScrollPercent() > 21.676104166478076 && getScrollPercent() < 21.79201916202074) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i188')[0].classList.add('show')
    }

    if (getScrollPercent() > 21.79201916202074 && getScrollPercent() < 21.907934157563403) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i189')[0].classList.add('show')
    }

    if (getScrollPercent() > 21.907934157563403 && getScrollPercent() < 22.023849153106067) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i190')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.023849153106067 && getScrollPercent() < 22.13976414864873) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i191')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.13976414864873 && getScrollPercent() < 22.255679144191394) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i192')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.255679144191394 && getScrollPercent() < 22.371594139734057) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i193')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.371594139734057 && getScrollPercent() < 22.48750913527672) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i194')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.48750913527672 && getScrollPercent() < 22.603424130819384) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i195')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.603424130819384 && getScrollPercent() < 22.719339126362048) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i196')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.719339126362048 && getScrollPercent() < 22.83525412190471) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i197')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.83525412190471 && getScrollPercent() < 22.951169117447375) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i198')[0].classList.add('show')
    }

    if (getScrollPercent() > 22.951169117447375 && getScrollPercent() < 23.067084112990038) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i199')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.067084112990038 && getScrollPercent() < 23.1829991085327) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i200')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.1829991085327 && getScrollPercent() < 23.298914104075365) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i201')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.298914104075365 && getScrollPercent() < 23.41482909961803) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i202')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.41482909961803 && getScrollPercent() < 23.530744095160692) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i203')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.530744095160692 && getScrollPercent() < 23.646659090703356) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i204')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.646659090703356 && getScrollPercent() < 23.76257408624602) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i205')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.76257408624602 && getScrollPercent() < 23.878489081788683) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i206')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.878489081788683 && getScrollPercent() < 23.994404077331346) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i207')[0].classList.add('show')
    }

    if (getScrollPercent() > 23.994404077331346 && getScrollPercent() < 24.11031907287401) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i208')[0].classList.add('show')
    }

    if (getScrollPercent() > 24.11031907287401 && getScrollPercent() < 24.226234068416673) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i209')[0].classList.add('show')
    }

    if (getScrollPercent() > 24.226234068416673 && getScrollPercent() < 24.342149063959337) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i210')[0].classList.add('show')
    }

    if (getScrollPercent() > 24.342149063959337 && getScrollPercent() < 24.458064059502) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i211')[0].classList.add('show')
    }

    if (getScrollPercent() > 24.458064059502 && getScrollPercent() < 24.573979055044664) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i212')[0].classList.add('show')
    }

    if (getScrollPercent() > 24.573979055044664 && getScrollPercent() < 24.689894050587327) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i213')[0].classList.add('show')
    }

    if (getScrollPercent() > 24.689894050587327 && getScrollPercent() < 24.80580904612999) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i214')[0].classList.add('show')
    }

    if (getScrollPercent() > 24.80580904612999 && getScrollPercent() < 24.921724041672654) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i215')[0].classList.add('show')
    }

    if (getScrollPercent() > 24.921724041672654 && getScrollPercent() < 25.037639037215317) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i216')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.037639037215317 && getScrollPercent() < 25.15355403275798) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i217')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.15355403275798 && getScrollPercent() < 25.269469028300644) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i218')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.269469028300644 && getScrollPercent() < 25.385384023843308) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i219')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.385384023843308 && getScrollPercent() < 25.50129901938597) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i220')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.50129901938597 && getScrollPercent() < 25.617214014928635) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i221')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.617214014928635 && getScrollPercent() < 25.7331290104713) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i222')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.7331290104713 && getScrollPercent() < 25.849044006013962) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i223')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.849044006013962 && getScrollPercent() < 25.964959001556625) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i224')[0].classList.add('show')
    }

    if (getScrollPercent() > 25.964959001556625 && getScrollPercent() < 26.08087399709929) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i225')[0].classList.add('show')
    }

    if (getScrollPercent() > 26.08087399709929 && getScrollPercent() < 26.196788992641952) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i226')[0].classList.add('show')
    }

    if (getScrollPercent() > 26.196788992641952 && getScrollPercent() < 26.312703988184616) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i227')[0].classList.add('show')
    }

    if (getScrollPercent() > 26.312703988184616 && getScrollPercent() < 26.42861898372728) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i228')[0].classList.add('show')
    }

    if (getScrollPercent() > 26.42861898372728 && getScrollPercent() < 26.544533979269943) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i229')[0].classList.add('show')
    }

    if (getScrollPercent() > 26.544533979269943 && getScrollPercent() < 26.660448974812606) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i230')[0].classList.add('show')
    }

    if (getScrollPercent() > 26.660448974812606 && getScrollPercent() < 26.77636397035527) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i231')[0].classList.add('show')
    }

    if (getScrollPercent() > 26.77636397035527 && getScrollPercent() < 26.892278965897933) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i232')[0].classList.add('show')
    }

    if (getScrollPercent() > 26.892278965897933 && getScrollPercent() < 27.008193961440597) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i233')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.008193961440597 && getScrollPercent() < 27.12410895698326) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i234')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.12410895698326 && getScrollPercent() < 27.240023952525924) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i235')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.240023952525924 && getScrollPercent() < 27.355938948068587) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i236')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.355938948068587 && getScrollPercent() < 27.47185394361125) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i237')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.47185394361125 && getScrollPercent() < 27.587768939153914) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i238')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.587768939153914 && getScrollPercent() < 27.703683934696578) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i239')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.703683934696578 && getScrollPercent() < 27.81959893023924) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i240')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.81959893023924 && getScrollPercent() < 27.935513925781905) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i241')[0].classList.add('show')
    }

    if (getScrollPercent() > 27.935513925781905 && getScrollPercent() < 28.051428921324568) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i242')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.051428921324568 && getScrollPercent() < 28.16734391686723) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i243')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.16734391686723 && getScrollPercent() < 28.283258912409895) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i244')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.283258912409895 && getScrollPercent() < 28.39917390795256) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i245')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.39917390795256 && getScrollPercent() < 28.515088903495222) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i246')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.515088903495222 && getScrollPercent() < 28.631003899037886) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i247')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.631003899037886 && getScrollPercent() < 28.74691889458055) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i248')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.74691889458055 && getScrollPercent() < 28.862833890123213) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i249')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.862833890123213 && getScrollPercent() < 28.978748885665876) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i250')[0].classList.add('show')
    }

    if (getScrollPercent() > 28.978748885665876 && getScrollPercent() < 29.09466388120854) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i251')[0].classList.add('show')
    }

    if (getScrollPercent() > 29.09466388120854 && getScrollPercent() < 29.210578876751203) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i252')[0].classList.add('show')
    }

    if (getScrollPercent() > 29.210578876751203 && getScrollPercent() < 29.326493872293867) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i253')[0].classList.add('show')
    }

    if (getScrollPercent() > 29.326493872293867 && getScrollPercent() < 29.44240886783653) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i254')[0].classList.add('show')
    }

    if (getScrollPercent() > 29.44240886783653 && getScrollPercent() < 29.558323863379194) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i255')[0].classList.add('show')
    }

    if (getScrollPercent() > 29.558323863379194 && getScrollPercent() < 29.674238858921857) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i256')[0].classList.add('show')
    }

    if (getScrollPercent() > 29.674238858921857 && getScrollPercent() < 29.79015385446452) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i257')[0].classList.add('show')
    }

    if (getScrollPercent() > 29.79015385446452 && getScrollPercent() < 29.906068850007184) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i258')[0].classList.add('show')
    }

    if (getScrollPercent() > 29.906068850007184 && getScrollPercent() < 30.021983845549848) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i259')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.021983845549848 && getScrollPercent() < 30.13789884109251) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i260')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.13789884109251 && getScrollPercent() < 30.253813836635175) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i261')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.253813836635175 && getScrollPercent() < 30.369728832177838) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i262')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.369728832177838 && getScrollPercent() < 30.4856438277205) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i263')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.4856438277205 && getScrollPercent() < 30.601558823263165) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i264')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.601558823263165 && getScrollPercent() < 30.71747381880583) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i265')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.71747381880583 && getScrollPercent() < 30.833388814348492) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i266')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.833388814348492 && getScrollPercent() < 30.949303809891155) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i267')[0].classList.add('show')
    }

    if (getScrollPercent() > 30.949303809891155 && getScrollPercent() < 31.06521880543382) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i268')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.06521880543382 && getScrollPercent() < 31.181133800976482) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i269')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.181133800976482 && getScrollPercent() < 31.297048796519146) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i270')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.297048796519146 && getScrollPercent() < 31.41296379206181) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i271')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.41296379206181 && getScrollPercent() < 31.528878787604473) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i272')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.528878787604473 && getScrollPercent() < 31.644793783147136) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i273')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.644793783147136 && getScrollPercent() < 31.7607087786898) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i274')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.7607087786898 && getScrollPercent() < 31.876623774232463) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i275')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.876623774232463 && getScrollPercent() < 31.992538769775127) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i276')[0].classList.add('show')
    }

    if (getScrollPercent() > 31.992538769775127 && getScrollPercent() < 32.10845376531779) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i277')[0].classList.add('show')
    }

    if (getScrollPercent() > 32.10845376531779 && getScrollPercent() < 32.22436876086046) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i278')[0].classList.add('show')
    }

    if (getScrollPercent() > 32.22436876086046 && getScrollPercent() < 32.340283756403124) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i279')[0].classList.add('show')
    }

    if (getScrollPercent() > 32.340283756403124 && getScrollPercent() < 32.45619875194579) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i280')[0].classList.add('show')
    }

    if (getScrollPercent() > 32.45619875194579 && getScrollPercent() < 32.57211374748846) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i281')[0].classList.add('show')
    }

    if (getScrollPercent() > 32.57211374748846 && getScrollPercent() < 32.688028743031126) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i282')[0].classList.add('show')
    }

    if (getScrollPercent() > 32.688028743031126 && getScrollPercent() < 32.80394373857379) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i283')[0].classList.add('show')
    }

    if (getScrollPercent() > 32.80394373857379 && getScrollPercent() < 32.91985873411646) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i284')[0].classList.add('show')
    }

    if (getScrollPercent() > 32.91985873411646 && getScrollPercent() < 33.03577372965913) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i285')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.03577372965913 && getScrollPercent() < 33.151688725201794) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i286')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.151688725201794 && getScrollPercent() < 33.26760372074446) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i287')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.26760372074446 && getScrollPercent() < 33.38351871628713) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i288')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.38351871628713 && getScrollPercent() < 33.499433711829795) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i289')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.499433711829795 && getScrollPercent() < 33.61534870737246) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i290')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.61534870737246 && getScrollPercent() < 33.73126370291513) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i291')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.73126370291513 && getScrollPercent() < 33.847178698457796) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i292')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.847178698457796 && getScrollPercent() < 33.96309369400046) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i293')[0].classList.add('show')
    }

    if (getScrollPercent() > 33.96309369400046 && getScrollPercent() < 34.07900868954313) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i294')[0].classList.add('show')
    }

    if (getScrollPercent() > 34.07900868954313 && getScrollPercent() < 34.1949236850858) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i295')[0].classList.add('show')
    }

    if (getScrollPercent() > 34.1949236850858 && getScrollPercent() < 34.310838680628464) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i296')[0].classList.add('show')
    }

    if (getScrollPercent() > 34.310838680628464 && getScrollPercent() < 34.42675367617113) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i297')[0].classList.add('show')
    }

    if (getScrollPercent() > 34.42675367617113 && getScrollPercent() < 34.5426686717138) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i298')[0].classList.add('show')
    }

    if (getScrollPercent() > 34.5426686717138 && getScrollPercent() < 34.658583667256465) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i299')[0].classList.add('show')
    }

    if (getScrollPercent() > 34.658583667256465 && getScrollPercent() < 34.77449866279913) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i300')[0].classList.add('show')
    }

    if (getScrollPercent() > 34.77449866279913 && getScrollPercent() < 34.8904136583418) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i301')[0].classList.add('show')
    }

    if (getScrollPercent() > 34.8904136583418 && getScrollPercent() < 35.00632865388447) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i302')[0].classList.add('show')
    }

    if (getScrollPercent() > 35.00632865388447 && getScrollPercent() < 35.12224364942713) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i303')[0].classList.add('show')
    }

    if (getScrollPercent() > 35.12224364942713 && getScrollPercent() < 35.2381586449698) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i304')[0].classList.add('show')
    }

    if (getScrollPercent() > 35.2381586449698 && getScrollPercent() < 35.35407364051247) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i305')[0].classList.add('show')
    }

    if (getScrollPercent() > 35.35407364051247 && getScrollPercent() < 35.469988636055135) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i306')[0].classList.add('show')
    }

    if (getScrollPercent() > 35.469988636055135 && getScrollPercent() < 35.5859036315978) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i307')[0].classList.add('show')
    }

    if (getScrollPercent() > 35.5859036315978 && getScrollPercent() < 35.70181862714047) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i308')[0].classList.add('show')
    }

    if (getScrollPercent() > 35.70181862714047 && getScrollPercent() < 35.817733622683136) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i309')[0].classList.add('show')
    }

    if (getScrollPercent() > 35.817733622683136 && getScrollPercent() < 35.9336486182258) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i310')[0].classList.add('show')
    }

    if (getScrollPercent() > 35.9336486182258 && getScrollPercent() < 36.04956361376847) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i311')[0].classList.add('show')
    }

    if (getScrollPercent() > 36.04956361376847 && getScrollPercent() < 36.16547860931114) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i312')[0].classList.add('show')
    }

    if (getScrollPercent() > 36.16547860931114 && getScrollPercent() < 36.281393604853804) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i313')[0].classList.add('show')
    }

    if (getScrollPercent() > 36.281393604853804 && getScrollPercent() < 36.39730860039647) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i314')[0].classList.add('show')
    }

    if (getScrollPercent() > 36.39730860039647 && getScrollPercent() < 36.51322359593914) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i315')[0].classList.add('show')
    }

    if (getScrollPercent() > 36.51322359593914 && getScrollPercent() < 36.629138591481805) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i316')[0].classList.add('show')
    }

    if (getScrollPercent() > 36.629138591481805 && getScrollPercent() < 36.74505358702447) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i317')[0].classList.add('show')
    }

    if (getScrollPercent() > 36.74505358702447 && getScrollPercent() < 36.86096858256714) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i318')[0].classList.add('show')
    }

    if (getScrollPercent() > 36.86096858256714 && getScrollPercent() < 36.976883578109806) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i319')[0].classList.add('show')
    }

    if (getScrollPercent() > 36.976883578109806 && getScrollPercent() < 37.09279857365247) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i320')[0].classList.add('show')
    }

    if (getScrollPercent() > 37.09279857365247 && getScrollPercent() < 37.20871356919514) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i321')[0].classList.add('show')
    }

    if (getScrollPercent() > 37.20871356919514 && getScrollPercent() < 37.32462856473781) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i322')[0].classList.add('show')
    }

    if (getScrollPercent() > 37.32462856473781 && getScrollPercent() < 37.440543560280474) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i323')[0].classList.add('show')
    }

    if (getScrollPercent() > 37.440543560280474 && getScrollPercent() < 37.55645855582314) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i324')[0].classList.add('show')
    }

    if (getScrollPercent() > 37.55645855582314 && getScrollPercent() < 37.67237355136581) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i325')[0].classList.add('show')
    }

    if (getScrollPercent() > 37.67237355136581 && getScrollPercent() < 37.788288546908475) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i326')[0].classList.add('show')
    }

    if (getScrollPercent() > 37.788288546908475 && getScrollPercent() < 37.90420354245114) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i327')[0].classList.add('show')
    }

    if (getScrollPercent() > 37.90420354245114 && getScrollPercent() < 38.02011853799381) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i328')[0].classList.add('show')
    }

    if (getScrollPercent() > 38.02011853799381 && getScrollPercent() < 38.13603353353648) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i329')[0].classList.add('show')
    }

    if (getScrollPercent() > 38.13603353353648 && getScrollPercent() < 38.251948529079144) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i330')[0].classList.add('show')
    }

    if (getScrollPercent() > 38.251948529079144 && getScrollPercent() < 38.36786352462181) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i331')[0].classList.add('show')
    }

    if (getScrollPercent() > 38.36786352462181 && getScrollPercent() < 38.48377852016448) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i332')[0].classList.add('show')
    }

    if (getScrollPercent() > 38.48377852016448 && getScrollPercent() < 38.599693515707145) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i333')[0].classList.add('show')
    }

    if (getScrollPercent() > 38.599693515707145 && getScrollPercent() < 38.71560851124981) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i334')[0].classList.add('show')
    }

    if (getScrollPercent() > 38.71560851124981 && getScrollPercent() < 38.83152350679248) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i335')[0].classList.add('show')
    }

    if (getScrollPercent() > 38.83152350679248 && getScrollPercent() < 38.947438502335146) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i336')[0].classList.add('show')
    }

    if (getScrollPercent() > 38.947438502335146 && getScrollPercent() < 39.06335349787781) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i337')[0].classList.add('show')
    }

    if (getScrollPercent() > 39.06335349787781 && getScrollPercent() < 39.17926849342048) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i338')[0].classList.add('show')
    }

    if (getScrollPercent() > 39.17926849342048 && getScrollPercent() < 39.29518348896315) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i339')[0].classList.add('show')
    }

    if (getScrollPercent() > 39.29518348896315 && getScrollPercent() < 39.411098484505814) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i340')[0].classList.add('show')
    }

    if (getScrollPercent() > 39.411098484505814 && getScrollPercent() < 39.52701348004848) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i341')[0].classList.add('show')
    }

    if (getScrollPercent() > 39.52701348004848 && getScrollPercent() < 39.64292847559115) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i342')[0].classList.add('show')
    }

    if (getScrollPercent() > 39.64292847559115 && getScrollPercent() < 39.758843471133815) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i343')[0].classList.add('show')
    }

    if (getScrollPercent() > 39.758843471133815 && getScrollPercent() < 39.87475846667648) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i344')[0].classList.add('show')
    }

    if (getScrollPercent() > 39.87475846667648 && getScrollPercent() < 39.99067346221915) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i345')[0].classList.add('show')
    }

    if (getScrollPercent() > 39.99067346221915 && getScrollPercent() < 40.106588457761816) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i346')[0].classList.add('show')
    }

    if (getScrollPercent() > 40.106588457761816 && getScrollPercent() < 40.22250345330448) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i347')[0].classList.add('show')
    }

    if (getScrollPercent() > 40.22250345330448 && getScrollPercent() < 40.33841844884715) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i348')[0].classList.add('show')
    }

    if (getScrollPercent() > 40.33841844884715 && getScrollPercent() < 40.45433344438982) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i349')[0].classList.add('show')
    }

    if (getScrollPercent() > 40.45433344438982 && getScrollPercent() < 40.570248439932485) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i350')[0].classList.add('show')
    }

    if (getScrollPercent() > 40.570248439932485 && getScrollPercent() < 40.68616343547515) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i351')[0].classList.add('show')
    }

    if (getScrollPercent() > 40.68616343547515 && getScrollPercent() < 40.80207843101782) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i352')[0].classList.add('show')
    }

    if (getScrollPercent() > 40.80207843101782 && getScrollPercent() < 40.917993426560486) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i353')[0].classList.add('show')
    }

    if (getScrollPercent() > 40.917993426560486 && getScrollPercent() < 41.03390842210315) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i354')[0].classList.add('show')
    }

    if (getScrollPercent() > 41.03390842210315 && getScrollPercent() < 41.14982341764582) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i355')[0].classList.add('show')
    }

    if (getScrollPercent() > 41.14982341764582 && getScrollPercent() < 41.26573841318849) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i356')[0].classList.add('show')
    }

    if (getScrollPercent() > 41.26573841318849 && getScrollPercent() < 41.381653408731154) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i357')[0].classList.add('show')
    }

    if (getScrollPercent() > 41.381653408731154 && getScrollPercent() < 41.49756840427382) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i358')[0].classList.add('show')
    }

    if (getScrollPercent() > 41.49756840427382 && getScrollPercent() < 41.61348339981649) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i359')[0].classList.add('show')
    }

    if (getScrollPercent() > 41.61348339981649 && getScrollPercent() < 41.729398395359155) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i360')[0].classList.add('show')
    }

    if (getScrollPercent() > 41.729398395359155 && getScrollPercent() < 41.84531339090182) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i361')[0].classList.add('show')
    }

    if (getScrollPercent() > 41.84531339090182 && getScrollPercent() < 41.96122838644449) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i362')[0].classList.add('show')
    }

    if (getScrollPercent() > 41.96122838644449 && getScrollPercent() < 42.077143381987156) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i363')[0].classList.add('show')
    }

    if (getScrollPercent() > 42.077143381987156 && getScrollPercent() < 42.19305837752982) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i364')[0].classList.add('show')
    }

    if (getScrollPercent() > 42.19305837752982 && getScrollPercent() < 42.30897337307249) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i365')[0].classList.add('show')
    }

    if (getScrollPercent() > 42.30897337307249 && getScrollPercent() < 42.42488836861516) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i366')[0].classList.add('show')
    }

    if (getScrollPercent() > 42.42488836861516 && getScrollPercent() < 42.540803364157824) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i367')[0].classList.add('show')
    }

    if (getScrollPercent() > 42.540803364157824 && getScrollPercent() < 42.65671835970049) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i368')[0].classList.add('show')
    }

    if (getScrollPercent() > 42.65671835970049 && getScrollPercent() < 42.77263335524316) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i369')[0].classList.add('show')
    }

    if (getScrollPercent() > 42.77263335524316 && getScrollPercent() < 42.888548350785825) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i370')[0].classList.add('show')
    }

    if (getScrollPercent() > 42.888548350785825 && getScrollPercent() < 43.00446334632849) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i371')[0].classList.add('show')
    }

    if (getScrollPercent() > 43.00446334632849 && getScrollPercent() < 43.12037834187116) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i372')[0].classList.add('show')
    }

    if (getScrollPercent() > 43.12037834187116 && getScrollPercent() < 43.23629333741383) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i373')[0].classList.add('show')
    }

    if (getScrollPercent() > 43.23629333741383 && getScrollPercent() < 43.352208332956494) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i374')[0].classList.add('show')
    }

    if (getScrollPercent() > 43.352208332956494 && getScrollPercent() < 43.46812332849916) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i375')[0].classList.add('show')
    }

    if (getScrollPercent() > 43.46812332849916 && getScrollPercent() < 43.58403832404183) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i376')[0].classList.add('show')
    }

    if (getScrollPercent() > 43.58403832404183 && getScrollPercent() < 43.699953319584495) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i377')[0].classList.add('show')
    }

    if (getScrollPercent() > 43.699953319584495 && getScrollPercent() < 43.81586831512716) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i378')[0].classList.add('show')
    }

    if (getScrollPercent() > 43.81586831512716 && getScrollPercent() < 43.93178331066983) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i379')[0].classList.add('show')
    }

    if (getScrollPercent() > 43.93178331066983 && getScrollPercent() < 44.047698306212496) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i380')[0].classList.add('show')
    }

    if (getScrollPercent() > 44.047698306212496 && getScrollPercent() < 44.16361330175516) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i381')[0].classList.add('show')
    }

    if (getScrollPercent() > 44.16361330175516 && getScrollPercent() < 44.27952829729783) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i382')[0].classList.add('show')
    }

    if (getScrollPercent() > 44.27952829729783 && getScrollPercent() < 44.3954432928405) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i383')[0].classList.add('show')
    }

    if (getScrollPercent() > 44.3954432928405 && getScrollPercent() < 44.511358288383164) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i384')[0].classList.add('show')
    }

    if (getScrollPercent() > 44.511358288383164 && getScrollPercent() < 44.62727328392583) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i385')[0].classList.add('show')
    }

    if (getScrollPercent() > 44.62727328392583 && getScrollPercent() < 44.7431882794685) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i386')[0].classList.add('show')
    }

    if (getScrollPercent() > 44.7431882794685 && getScrollPercent() < 44.859103275011165) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i387')[0].classList.add('show')
    }

    if (getScrollPercent() > 44.859103275011165 && getScrollPercent() < 44.97501827055383) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i388')[0].classList.add('show')
    }

    if (getScrollPercent() > 44.97501827055383 && getScrollPercent() < 45.0909332660965) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i389')[0].classList.add('show')
    }

    if (getScrollPercent() > 45.0909332660965 && getScrollPercent() < 45.206848261639166) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i390')[0].classList.add('show')
    }

    if (getScrollPercent() > 45.206848261639166 && getScrollPercent() < 45.32276325718183) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i391')[0].classList.add('show')
    }

    if (getScrollPercent() > 45.32276325718183 && getScrollPercent() < 45.4386782527245) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i392')[0].classList.add('show')
    }

    if (getScrollPercent() > 45.4386782527245 && getScrollPercent() < 45.55459324826717) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i393')[0].classList.add('show')
    }

    if (getScrollPercent() > 45.55459324826717 && getScrollPercent() < 45.670508243809834) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i394')[0].classList.add('show')
    }

    if (getScrollPercent() > 45.670508243809834 && getScrollPercent() < 45.7864232393525) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i395')[0].classList.add('show')
    }

    if (getScrollPercent() > 45.7864232393525 && getScrollPercent() < 45.90233823489517) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i396')[0].classList.add('show')
    }

    if (getScrollPercent() > 45.90233823489517 && getScrollPercent() < 46.018253230437836) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i397')[0].classList.add('show')
    }

    if (getScrollPercent() > 46.018253230437836 && getScrollPercent() < 46.1341682259805) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i398')[0].classList.add('show')
    }

    if (getScrollPercent() > 46.1341682259805 && getScrollPercent() < 46.25008322152317) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i399')[0].classList.add('show')
    }

    if (getScrollPercent() > 46.25008322152317 && getScrollPercent() < 46.36599821706584) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i400')[0].classList.add('show')
    }

    if (getScrollPercent() > 46.36599821706584 && getScrollPercent() < 46.481913212608504) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i401')[0].classList.add('show')
    }

    if (getScrollPercent() > 46.481913212608504 && getScrollPercent() < 46.59782820815117) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i402')[0].classList.add('show')
    }

    if (getScrollPercent() > 46.59782820815117 && getScrollPercent() < 46.71374320369384) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i403')[0].classList.add('show')
    }

    if (getScrollPercent() > 46.71374320369384 && getScrollPercent() < 46.829658199236505) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i404')[0].classList.add('show')
    }

    if (getScrollPercent() > 46.829658199236505 && getScrollPercent() < 46.94557319477917) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i405')[0].classList.add('show')
    }

    if (getScrollPercent() > 46.94557319477917 && getScrollPercent() < 47.06148819032184) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i406')[0].classList.add('show')
    }

    if (getScrollPercent() > 47.06148819032184 && getScrollPercent() < 47.177403185864506) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i407')[0].classList.add('show')
    }

    if (getScrollPercent() > 47.177403185864506 && getScrollPercent() < 47.29331818140717) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i408')[0].classList.add('show')
    }

    if (getScrollPercent() > 47.29331818140717 && getScrollPercent() < 47.40923317694984) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i409')[0].classList.add('show')
    }

    if (getScrollPercent() > 47.40923317694984 && getScrollPercent() < 47.52514817249251) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i410')[0].classList.add('show')
    }

    if (getScrollPercent() > 47.52514817249251 && getScrollPercent() < 47.641063168035174) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i411')[0].classList.add('show')
    }

    if (getScrollPercent() > 47.641063168035174 && getScrollPercent() < 47.75697816357784) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i412')[0].classList.add('show')
    }

    if (getScrollPercent() > 47.75697816357784 && getScrollPercent() < 47.87289315912051) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i413')[0].classList.add('show')
    }

    if (getScrollPercent() > 47.87289315912051 && getScrollPercent() < 47.988808154663175) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i414')[0].classList.add('show')
    }

    if (getScrollPercent() > 47.988808154663175 && getScrollPercent() < 48.10472315020584) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i415')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.10472315020584 && getScrollPercent() < 48.22063814574851) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i416')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.22063814574851 && getScrollPercent() < 48.336553141291176) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i417')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.336553141291176 && getScrollPercent() < 48.45246813683384) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i418')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.45246813683384 && getScrollPercent() < 48.56838313237651) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i419')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.56838313237651 && getScrollPercent() < 48.68429812791918) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i420')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.68429812791918 && getScrollPercent() < 48.800213123461845) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i421')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.800213123461845 && getScrollPercent() < 48.91612811900451) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i422')[0].classList.add('show')
    }

    if (getScrollPercent() > 48.91612811900451 && getScrollPercent() < 49.03204311454718) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i423')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.03204311454718 && getScrollPercent() < 49.147958110089846) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i424')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.147958110089846 && getScrollPercent() < 49.26387310563251) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i425')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.26387310563251 && getScrollPercent() < 49.37978810117518) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i426')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.37978810117518 && getScrollPercent() < 49.49570309671785) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i427')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.49570309671785 && getScrollPercent() < 49.611618092260514) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i428')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.611618092260514 && getScrollPercent() < 49.72753308780318) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i429')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.72753308780318 && getScrollPercent() < 49.84344808334585) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i430')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.84344808334585 && getScrollPercent() < 49.959363078888515) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i431')[0].classList.add('show')
    }

    if (getScrollPercent() > 49.959363078888515 && getScrollPercent() < 50.07527807443118) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i432')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.07527807443118 && getScrollPercent() < 50.19119306997385) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i433')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.19119306997385 && getScrollPercent() < 50.307108065516516) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i434')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.307108065516516 && getScrollPercent() < 50.42302306105918) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i435')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.42302306105918 && getScrollPercent() < 50.53893805660185) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i436')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.53893805660185 && getScrollPercent() < 50.65485305214452) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i437')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.65485305214452 && getScrollPercent() < 50.770768047687184) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i438')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.770768047687184 && getScrollPercent() < 50.88668304322985) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i439')[0].classList.add('show')
    }

    if (getScrollPercent() > 50.88668304322985 && getScrollPercent() < 51.00259803877252) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i440')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.00259803877252 && getScrollPercent() < 51.118513034315185) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i441')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.118513034315185 && getScrollPercent() < 51.23442802985785) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i442')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.23442802985785 && getScrollPercent() < 51.35034302540052) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i443')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.35034302540052 && getScrollPercent() < 51.46625802094319) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i444')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.46625802094319 && getScrollPercent() < 51.582173016485854) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i445')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.582173016485854 && getScrollPercent() < 51.69808801202852) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i446')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.69808801202852 && getScrollPercent() < 51.81400300757119) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i447')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.81400300757119 && getScrollPercent() < 51.929918003113855) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i448')[0].classList.add('show')
    }

    if (getScrollPercent() > 51.929918003113855 && getScrollPercent() < 52.04583299865652) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i449')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.04583299865652 && getScrollPercent() < 52.16174799419919) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i450')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.16174799419919 && getScrollPercent() < 52.277662989741856) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i451')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.277662989741856 && getScrollPercent() < 52.39357798528452) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i452')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.39357798528452 && getScrollPercent() < 52.50949298082719) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i453')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.50949298082719 && getScrollPercent() < 52.62540797636986) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i454')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.62540797636986 && getScrollPercent() < 52.741322971912524) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i455')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.741322971912524 && getScrollPercent() < 52.85723796745519) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i456')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.85723796745519 && getScrollPercent() < 52.97315296299786) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i457')[0].classList.add('show')
    }

    if (getScrollPercent() > 52.97315296299786 && getScrollPercent() < 53.089067958540525) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i458')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.089067958540525 && getScrollPercent() < 53.20498295408319) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i459')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.20498295408319 && getScrollPercent() < 53.32089794962586) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i460')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.32089794962586 && getScrollPercent() < 53.436812945168526) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i461')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.436812945168526 && getScrollPercent() < 53.55272794071119) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i462')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.55272794071119 && getScrollPercent() < 53.66864293625386) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i463')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.66864293625386 && getScrollPercent() < 53.78455793179653) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i464')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.78455793179653 && getScrollPercent() < 53.900472927339194) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i465')[0].classList.add('show')
    }

    if (getScrollPercent() > 53.900472927339194 && getScrollPercent() < 54.01638792288186) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i466')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.01638792288186 && getScrollPercent() < 54.13230291842453) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i467')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.13230291842453 && getScrollPercent() < 54.248217913967196) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i468')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.248217913967196 && getScrollPercent() < 54.36413290950986) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i469')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.36413290950986 && getScrollPercent() < 54.48004790505253) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i470')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.48004790505253 && getScrollPercent() < 54.5959629005952) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i471')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.5959629005952 && getScrollPercent() < 54.711877896137864) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i472')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.711877896137864 && getScrollPercent() < 54.82779289168053) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i473')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.82779289168053 && getScrollPercent() < 54.9437078872232) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i474')[0].classList.add('show')
    }

    if (getScrollPercent() > 54.9437078872232 && getScrollPercent() < 55.059622882765865) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i475')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.059622882765865 && getScrollPercent() < 55.17553787830853) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i476')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.17553787830853 && getScrollPercent() < 55.2914528738512) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i477')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.2914528738512 && getScrollPercent() < 55.407367869393866) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i478')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.407367869393866 && getScrollPercent() < 55.52328286493653) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i479')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.52328286493653 && getScrollPercent() < 55.6391978604792) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i480')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.6391978604792 && getScrollPercent() < 55.75511285602187) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i481')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.75511285602187 && getScrollPercent() < 55.871027851564534) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i482')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.871027851564534 && getScrollPercent() < 55.9869428471072) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i483')[0].classList.add('show')
    }

    if (getScrollPercent() > 55.9869428471072 && getScrollPercent() < 56.10285784264987) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i484')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.10285784264987 && getScrollPercent() < 56.218772838192535) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i485')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.218772838192535 && getScrollPercent() < 56.3346878337352) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i486')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.3346878337352 && getScrollPercent() < 56.45060282927787) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i487')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.45060282927787 && getScrollPercent() < 56.56651782482054) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i488')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.56651782482054 && getScrollPercent() < 56.6824328203632) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i489')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.6824328203632 && getScrollPercent() < 56.79834781590587) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i490')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.79834781590587 && getScrollPercent() < 56.91426281144854) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i491')[0].classList.add('show')
    }

    if (getScrollPercent() > 56.91426281144854 && getScrollPercent() < 57.030177806991205) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i492')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.030177806991205 && getScrollPercent() < 57.14609280253387) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i493')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.14609280253387 && getScrollPercent() < 57.26200779807654) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i494')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.26200779807654 && getScrollPercent() < 57.377922793619206) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i495')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.377922793619206 && getScrollPercent() < 57.49383778916187) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i496')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.49383778916187 && getScrollPercent() < 57.60975278470454) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i497')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.60975278470454 && getScrollPercent() < 57.72566778024721) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i498')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.72566778024721 && getScrollPercent() < 57.841582775789874) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i499')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.841582775789874 && getScrollPercent() < 57.95749777133254) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i500')[0].classList.add('show')
    }

    if (getScrollPercent() > 57.95749777133254 && getScrollPercent() < 58.07341276687521) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i501')[0].classList.add('show')
    }

    if (getScrollPercent() > 58.07341276687521 && getScrollPercent() < 58.189327762417875) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i502')[0].classList.add('show')
    }

    if (getScrollPercent() > 58.189327762417875 && getScrollPercent() < 58.30524275796054) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i503')[0].classList.add('show')
    }

    if (getScrollPercent() > 58.30524275796054 && getScrollPercent() < 58.42115775350321) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i504')[0].classList.add('show')
    }

    if (getScrollPercent() > 58.42115775350321 && getScrollPercent() < 58.537072749045876) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i505')[0].classList.add('show')
    }

    if (getScrollPercent() > 58.537072749045876 && getScrollPercent() < 58.65298774458854) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i506')[0].classList.add('show')
    }

    if (getScrollPercent() > 58.65298774458854 && getScrollPercent() < 58.76890274013121) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i507')[0].classList.add('show')
    }

    if (getScrollPercent() > 58.76890274013121 && getScrollPercent() < 58.88481773567388) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i508')[0].classList.add('show')
    }

    if (getScrollPercent() > 58.88481773567388 && getScrollPercent() < 59.000732731216544) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i509')[0].classList.add('show')
    }

    if (getScrollPercent() > 59.000732731216544 && getScrollPercent() < 59.11664772675921) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i510')[0].classList.add('show')
    }

    if (getScrollPercent() > 59.11664772675921 && getScrollPercent() < 59.23256272230188) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i511')[0].classList.add('show')
    }

    if (getScrollPercent() > 59.23256272230188 && getScrollPercent() < 59.348477717844546) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i512')[0].classList.add('show')
    }

    if (getScrollPercent() > 59.348477717844546 && getScrollPercent() < 59.46439271338721) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i513')[0].classList.add('show')
    }

    if (getScrollPercent() > 59.46439271338721 && getScrollPercent() < 59.58030770892988) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i514')[0].classList.add('show')
    }

    if (getScrollPercent() > 59.58030770892988 && getScrollPercent() < 59.69622270447255) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i515')[0].classList.add('show')
    }

    if (getScrollPercent() > 59.69622270447255 && getScrollPercent() < 59.812137700015214) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i516')[0].classList.add('show')
    }

    if (getScrollPercent() > 59.812137700015214 && getScrollPercent() < 59.92805269555788) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i517')[0].classList.add('show')
    }

    if (getScrollPercent() > 59.92805269555788 && getScrollPercent() < 60.04396769110055) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i518')[0].classList.add('show')
    }

    if (getScrollPercent() > 60.04396769110055 && getScrollPercent() < 60.159882686643215) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i519')[0].classList.add('show')
    }

    if (getScrollPercent() > 60.159882686643215 && getScrollPercent() < 60.27579768218588) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i520')[0].classList.add('show')
    }

    if (getScrollPercent() > 60.27579768218588 && getScrollPercent() < 60.39171267772855) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i521')[0].classList.add('show')
    }

    if (getScrollPercent() > 60.39171267772855 && getScrollPercent() < 60.507627673271216) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i522')[0].classList.add('show')
    }

    if (getScrollPercent() > 60.507627673271216 && getScrollPercent() < 60.62354266881388) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i523')[0].classList.add('show')
    }

    if (getScrollPercent() > 60.62354266881388 && getScrollPercent() < 60.73945766435655) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i524')[0].classList.add('show')
    }

    if (getScrollPercent() > 60.73945766435655 && getScrollPercent() < 60.85537265989922) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i525')[0].classList.add('show')
    }

    if (getScrollPercent() > 60.85537265989922 && getScrollPercent() < 60.971287655441884) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i526')[0].classList.add('show')
    }

    if (getScrollPercent() > 60.971287655441884 && getScrollPercent() < 61.08720265098455) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i527')[0].classList.add('show')
    }

    if (getScrollPercent() > 61.08720265098455 && getScrollPercent() < 61.20311764652722) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i528')[0].classList.add('show')
    }

    if (getScrollPercent() > 61.20311764652722 && getScrollPercent() < 61.319032642069885) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i529')[0].classList.add('show')
    }

    if (getScrollPercent() > 61.319032642069885 && getScrollPercent() < 61.43494763761255) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i530')[0].classList.add('show')
    }

    if (getScrollPercent() > 61.43494763761255 && getScrollPercent() < 61.55086263315522) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i531')[0].classList.add('show')
    }

    if (getScrollPercent() > 61.55086263315522 && getScrollPercent() < 61.666777628697886) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i532')[0].classList.add('show')
    }

    if (getScrollPercent() > 61.666777628697886 && getScrollPercent() < 61.78269262424055) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i533')[0].classList.add('show')
    }

    if (getScrollPercent() > 61.78269262424055 && getScrollPercent() < 61.89860761978322) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i534')[0].classList.add('show')
    }

    if (getScrollPercent() > 61.89860761978322 && getScrollPercent() < 62.01452261532589) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i535')[0].classList.add('show')
    }

    if (getScrollPercent() > 62.01452261532589 && getScrollPercent() < 62.130437610868555) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i536')[0].classList.add('show')
    }

    if (getScrollPercent() > 62.130437610868555 && getScrollPercent() < 62.24635260641122) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i537')[0].classList.add('show')
    }

    if (getScrollPercent() > 62.24635260641122 && getScrollPercent() < 62.36226760195389) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i538')[0].classList.add('show')
    }

    if (getScrollPercent() > 62.36226760195389 && getScrollPercent() < 62.478182597496556) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i539')[0].classList.add('show')
    }

    if (getScrollPercent() > 62.478182597496556 && getScrollPercent() < 62.59409759303922) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i540')[0].classList.add('show')
    }

    if (getScrollPercent() > 62.59409759303922 && getScrollPercent() < 62.71001258858189) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i541')[0].classList.add('show')
    }

    if (getScrollPercent() > 62.71001258858189 && getScrollPercent() < 62.82592758412456) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i542')[0].classList.add('show')
    }

    if (getScrollPercent() > 62.82592758412456 && getScrollPercent() < 62.941842579667224) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i543')[0].classList.add('show')
    }

    if (getScrollPercent() > 62.941842579667224 && getScrollPercent() < 63.05775757520989) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i544')[0].classList.add('show')
    }

    if (getScrollPercent() > 63.05775757520989 && getScrollPercent() < 63.17367257075256) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i545')[0].classList.add('show')
    }

    if (getScrollPercent() > 63.17367257075256 && getScrollPercent() < 63.289587566295225) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i546')[0].classList.add('show')
    }

    if (getScrollPercent() > 63.289587566295225 && getScrollPercent() < 63.40550256183789) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i547')[0].classList.add('show')
    }

    if (getScrollPercent() > 63.40550256183789 && getScrollPercent() < 63.52141755738056) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i548')[0].classList.add('show')
    }

    if (getScrollPercent() > 63.52141755738056 && getScrollPercent() < 63.637332552923226) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i549')[0].classList.add('show')
    }

    if (getScrollPercent() > 63.637332552923226 && getScrollPercent() < 63.75324754846589) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i550')[0].classList.add('show')
    }

    if (getScrollPercent() > 63.75324754846589 && getScrollPercent() < 63.86916254400856) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i551')[0].classList.add('show')
    }

    if (getScrollPercent() > 63.86916254400856 && getScrollPercent() < 63.98507753955123) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i552')[0].classList.add('show')
    }

    if (getScrollPercent() > 63.98507753955123 && getScrollPercent() < 64.1009925350939) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i553')[0].classList.add('show')
    }

    if (getScrollPercent() > 64.1009925350939 && getScrollPercent() < 64.21690753063656) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i554')[0].classList.add('show')
    }

    if (getScrollPercent() > 64.21690753063656 && getScrollPercent() < 64.33282252617923) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i555')[0].classList.add('show')
    }

    if (getScrollPercent() > 64.33282252617923 && getScrollPercent() < 64.4487375217219) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i556')[0].classList.add('show')
    }

    if (getScrollPercent() > 64.4487375217219 && getScrollPercent() < 64.56465251726456) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i557')[0].classList.add('show')
    }

    if (getScrollPercent() > 64.56465251726456 && getScrollPercent() < 64.68056751280723) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i558')[0].classList.add('show')
    }

    if (getScrollPercent() > 64.68056751280723 && getScrollPercent() < 64.7964825083499) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i559')[0].classList.add('show')
    }

    if (getScrollPercent() > 64.7964825083499 && getScrollPercent() < 64.91239750389256) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i560')[0].classList.add('show')
    }

    if (getScrollPercent() > 64.91239750389256 && getScrollPercent() < 65.02831249943523) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i561')[0].classList.add('show')
    }

    if (getScrollPercent() > 65.02831249943523 && getScrollPercent() < 65.1442274949779) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i562')[0].classList.add('show')
    }

    if (getScrollPercent() > 65.1442274949779 && getScrollPercent() < 65.26014249052056) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i563')[0].classList.add('show')
    }

    if (getScrollPercent() > 65.26014249052056 && getScrollPercent() < 65.37605748606323) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i564')[0].classList.add('show')
    }

    if (getScrollPercent() > 65.37605748606323 && getScrollPercent() < 65.4919724816059) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i565')[0].classList.add('show')
    }

    if (getScrollPercent() > 65.4919724816059 && getScrollPercent() < 65.60788747714857) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i566')[0].classList.add('show')
    }

    if (getScrollPercent() > 65.60788747714857 && getScrollPercent() < 65.72380247269123) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i567')[0].classList.add('show')
    }

    if (getScrollPercent() > 65.72380247269123 && getScrollPercent() < 65.8397174682339) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i568')[0].classList.add('show')
    }

    if (getScrollPercent() > 65.8397174682339 && getScrollPercent() < 65.95563246377657) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i569')[0].classList.add('show')
    }

    if (getScrollPercent() > 65.95563246377657 && getScrollPercent() < 66.07154745931923) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i570')[0].classList.add('show')
    }

    if (getScrollPercent() > 66.07154745931923 && getScrollPercent() < 66.1874624548619) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i571')[0].classList.add('show')
    }

    if (getScrollPercent() > 66.1874624548619 && getScrollPercent() < 66.30337745040457) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i572')[0].classList.add('show')
    }

    if (getScrollPercent() > 66.30337745040457 && getScrollPercent() < 66.41929244594724) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i573')[0].classList.add('show')
    }

    if (getScrollPercent() > 66.41929244594724 && getScrollPercent() < 66.5352074414899) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i574')[0].classList.add('show')
    }

    if (getScrollPercent() > 66.5352074414899 && getScrollPercent() < 66.65112243703257) {
        for (var i = 1; i < 576; i++) {
            document.getElementsByClassName('i' + i)[0].classList.remove('show')
        }
        document.getElementsByClassName('i575')[0].classList.add('show')
    }


    //mobile animation

    if (window.matchMedia('(max-width: 900px)').matches) {
        if (getScrollPercent() < 59.390506283825985) {
            for (var i = 1; i < 73; i++) {
            document.getElementsByClassName('m' + i)[0].classList.remove('show')
            }
            document.getElementsByClassName('m1')[0].classList.add('show')
            }

            if (getScrollPercent() > 59.390506283825985 && getScrollPercent() < 59.51854769688816) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m1')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 59.51854769688816 && getScrollPercent() < 59.64658910995034) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m2')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 59.64658910995034 && getScrollPercent() < 59.77463052301252) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m3')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 59.77463052301252 && getScrollPercent() < 59.9026719360747) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m4')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 59.9026719360747 && getScrollPercent() < 60.030713349136875) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m5')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 60.030713349136875 && getScrollPercent() < 60.15875476219905) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m6')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 60.15875476219905 && getScrollPercent() < 60.28679617526123) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m7')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 60.28679617526123 && getScrollPercent() < 60.41483758832341) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m8')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 60.41483758832341 && getScrollPercent() < 60.542879001385586) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m9')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 60.542879001385586 && getScrollPercent() < 60.670920414447764) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m10')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 60.670920414447764 && getScrollPercent() < 60.79896182750994) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m11')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 60.79896182750994 && getScrollPercent() < 60.92700324057212) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m12')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 60.92700324057212 && getScrollPercent() < 61.0550446536343) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m13')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 61.0550446536343 && getScrollPercent() < 61.183086066696475) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m14')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 61.183086066696475 && getScrollPercent() < 61.31112747975865) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m15')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 61.31112747975865 && getScrollPercent() < 61.43916889282083) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m16')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 61.43916889282083 && getScrollPercent() < 61.56721030588301) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m17')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 61.56721030588301 && getScrollPercent() < 61.69525171894519) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m18')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 61.69525171894519 && getScrollPercent() < 61.823293132007365) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m19')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 61.823293132007365 && getScrollPercent() < 61.95133454506954) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m20')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 61.95133454506954 && getScrollPercent() < 62.07937595813172) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m21')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 62.07937595813172 && getScrollPercent() < 62.2074173711939) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m22')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 62.2074173711939 && getScrollPercent() < 62.335458784256076) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m23')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 62.335458784256076 && getScrollPercent() < 62.463500197318254) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m24')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 62.463500197318254 && getScrollPercent() < 62.59154161038043) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m25')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 62.59154161038043 && getScrollPercent() < 62.71958302344261) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m26')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 62.71958302344261 && getScrollPercent() < 62.84762443650479) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m27')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 62.84762443650479 && getScrollPercent() < 62.975665849566965) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m28')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 62.975665849566965 && getScrollPercent() < 63.10370726262914) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m29')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 63.10370726262914 && getScrollPercent() < 63.23174867569132) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m30')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 63.23174867569132 && getScrollPercent() < 63.3597900887535) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m31')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 63.3597900887535 && getScrollPercent() < 63.48783150181568) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m32')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 63.48783150181568 && getScrollPercent() < 63.615872914877855) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m33')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 63.615872914877855 && getScrollPercent() < 63.74391432794003) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m34')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 63.74391432794003 && getScrollPercent() < 63.87195574100221) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m35')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 63.87195574100221 && getScrollPercent() < 63.99999715406439) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m36')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 63.99999715406439 && getScrollPercent() < 64.12803856712657) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m37')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 64.12803856712657 && getScrollPercent() < 64.25607998018874) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m38')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 64.25607998018874 && getScrollPercent() < 64.38412139325092) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m39')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 64.38412139325092 && getScrollPercent() < 64.5121628063131) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m40')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 64.5121628063131 && getScrollPercent() < 64.64020421937528) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m41')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 64.64020421937528 && getScrollPercent() < 64.76824563243746) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m42')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 64.76824563243746 && getScrollPercent() < 64.89628704549963) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m43')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 64.89628704549963 && getScrollPercent() < 65.02432845856181) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m44')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 65.02432845856181 && getScrollPercent() < 65.15236987162399) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m45')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 65.15236987162399 && getScrollPercent() < 65.28041128468617) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m46')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 65.28041128468617 && getScrollPercent() < 65.40845269774834) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m47')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 65.40845269774834 && getScrollPercent() < 65.53649411081052) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m48')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 65.53649411081052 && getScrollPercent() < 65.6645355238727) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m49')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 65.6645355238727 && getScrollPercent() < 65.79257693693488) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m50')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 65.79257693693488 && getScrollPercent() < 65.92061834999706) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m51')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 65.92061834999706 && getScrollPercent() < 66.04865976305923) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m52')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 66.04865976305923 && getScrollPercent() < 66.17670117612141) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m53')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 66.17670117612141 && getScrollPercent() < 66.30474258918359) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m54')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 66.30474258918359 && getScrollPercent() < 66.43278400224577) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m55')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 66.43278400224577 && getScrollPercent() < 66.56082541530795) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m56')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 66.56082541530795 && getScrollPercent() < 66.68886682837012) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m57')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 66.68886682837012 && getScrollPercent() < 66.8169082414323) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m58')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 66.8169082414323 && getScrollPercent() < 66.94494965449448) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m59')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 66.94494965449448 && getScrollPercent() < 67.07299106755666) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m60')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 67.07299106755666 && getScrollPercent() < 67.20103248061884) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m61')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 67.20103248061884 && getScrollPercent() < 67.32907389368101) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m62')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 67.32907389368101 && getScrollPercent() < 67.45711530674319) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m63')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 67.45711530674319 && getScrollPercent() < 67.58515671980537) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m64')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 67.58515671980537 && getScrollPercent() < 67.71319813286755) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m65')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 67.71319813286755 && getScrollPercent() < 67.84123954592972) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m66')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 67.84123954592972 && getScrollPercent() < 67.9692809589919) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m67')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 67.9692809589919 && getScrollPercent() < 68.09732237205408) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m68')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 68.09732237205408 && getScrollPercent() < 68.22536378511626) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m69')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 68.22536378511626 && getScrollPercent() < 68.35340519817844) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m70')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 68.35340519817844 && getScrollPercent() < 68.48144661124061) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m71')[0].classList.add('show')
                }
                
                if (getScrollPercent() > 68.48144661124061 && getScrollPercent() < 68.60948802430279) {
                for (var i = 1; i < 73; i++) {
                document.getElementsByClassName('m' + i)[0].classList.remove('show')
                }
                document.getElementsByClassName('m72')[0].classList.add('show')
                }
    }
}