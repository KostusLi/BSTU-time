import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Shevron from '@/assets/images/Chevron Down.png';
import ScheduleSelector from './ScheduleSelector';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/app/src/context/ThemeContext';


export default function SettingsCategoryes() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const { colors } = useTheme();
    const options = [
        {
            title: 'ВЫБРАТЬ РАСПИСАНИЕ',
            content: <ScheduleSelector />
        },
        {
            title: 'КАРТА ВУЗА',
            content: (
                <View style={styles.content}>
                    <Text style={[styles.text, {color: colors.textHeader}]}>Отобразить карту</Text>
                </View>
            ),
        },
        {
            title: 'СМЕНИТЬ ТЕМУ',
            content: <ThemeToggle />
        },
    ];

    return (
        <>
            {options.map((option, index) => (
                <View key={index} style={styles.settingsCategory}>
                    <TouchableOpacity
                    hitSlop={15}
                        style={[styles.categoryHeader, { backgroundColor: colors.card }]}
                    onPress={() => setExpandedIndex(index === expandedIndex ? null : index)}
                    >
                    <Text style={[styles.categoryHeaderText, {color: colors.textHeader}]}>{option.title}</Text>
                    {option.content && <Image source={Shevron} style={styles.arrowDown} />}
                </TouchableOpacity>

                    { expandedIndex === index && option.content && (
                    <View style={[styles.contentContainer, {backgroundColor: colors.card}]}>
                        {option.content}
                    </View>
                )}
        </View >
            ))
}
        </>
    );
}

const styles = StyleSheet.create({
    settingsCategory: {
        marginBottom: 39,
    },
    categoryHeader: {
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
    },
});