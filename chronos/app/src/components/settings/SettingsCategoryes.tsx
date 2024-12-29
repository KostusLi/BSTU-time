import React, { useState } from 'react'

import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Image, LayoutAnimation } from 'react-native'
import Shevron from '@/assets/images/Chevron Down.png'

export default function SettingsCategoryes() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedIndex(index === expandedIndex ? null : index);
    };
    const options = [
        {
            title: 'ВЫБРАТЬ РАСПИСАНИЕ',
            content: (
                <View style={[styles.content, styles.scheduleSettings]}>
                    <Text style={styles.text}>Факультеты, курсы и группы</Text>
                    <Text style={styles.text}>Факультеты, курсы и группы</Text>
                    <Text style={styles.text}>Факультеты, курсы и группы</Text>
                    <Text style={styles.text}>Факультеты, курсы и группы</Text>
                </View>
            ),
        },
        {
            title: 'КАРТА ВУЗА',
            content: (
                <View style={styles.content}>
                    <Text style={styles.text}>Отобразить карту</Text>
                    <Text style={styles.text}>Отобразить карту</Text>
                    <Text style={styles.text}>Отобразить карту</Text>
                </View>
            ),
        },
        {
            title: 'СМЕНИТЬ ТЕМУ',
        },
    ];

    return (
        <>
            {options.map((option, index) => (
                <View key={index} style={styles.settingsCategory}>
                    <TouchableOpacity
                        style={styles.categoryHeader}
                        onPress={() => toggleExpand(index)}
                    >
                        <Text style={styles.categoryHeaderText}>{option.title}</Text>
                        {option.content ? <Image source={Shevron} style={styles.arrowDown} /> : null}
                    </TouchableOpacity>

                    {option.content ? (expandedIndex === index && <View>{option.content}</View>) : null}
                </View>
            ))}
        </>
    )
}


const styles = StyleSheet.create({
    settingsCategory: {
        marginBottom: 39,
    },
    categoryHeader: {
        backgroundColor: "#ffffff",
        borderRadius: 15,
        paddingVertical: 14,
        paddingHorizontal: 17,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 7,
        zIndex: 10,
    },

    categoryHeaderText: {
        textAlign: 'center',
        color: "#5D5D5D",
        fontFamily: 'Stetica',
        fontSize: 12,
        opacity: 0.9,
    },
    arrowDown: {
        height: 24,
        width: 24,
        position: 'absolute',
        right: 17,
        top: 9,
    },
    content: {
        backgroundColor: '#ffffff',
        zIndex: 0,
        marginTop: -15,
    }

})
