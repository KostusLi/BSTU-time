import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Shevron from '@/assets/images/Chevron Down.png';
import ScheduleSelector from './ScheduleSelector';

export default function SettingsCategoryes() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const options = [
        {
            title: 'ВЫБРАТЬ РАСПИСАНИЕ',
            content: <ScheduleSelector />
        },
        {
            title: 'КАРТА ВУЗА',
            content: (
                <View style={styles.content}>
                    <Text style={styles.text}>Отобразить карту</Text>
                </View>
            ),
        },
        {
            title: 'СМЕНИТЬ ТЕМУ'
        },
    ];

    return (
        <>
            {options.map((option, index) => (
                <View key={index} style={styles.settingsCategory}>
                    <TouchableOpacity
                        style={styles.categoryHeader}
                        onPress={() => setExpandedIndex(index === expandedIndex ? null : index)}
                    >
                        <Text style={styles.categoryHeaderText}>{option.title}</Text>
                        {option.content && <Image source={Shevron} style={styles.arrowDown} />}
                    </TouchableOpacity>

                    {expandedIndex === index && option.content && (
                        <View style={styles.contentContainer}>
                            {option.content}
                        </View>
                    )}
                </View>
            ))}
        </>
    );
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
    contentContainer: {
        backgroundColor: '#ffffff',
        marginTop: -15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: 'hidden',
    },
    content: {
        padding: 16,
    },
    text: {
        fontFamily: 'Stetica',
        fontSize: 14,
        color: '#5D5D5D',
    },
});