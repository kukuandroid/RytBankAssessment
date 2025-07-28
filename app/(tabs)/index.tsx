import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BankDashboard = () => {
    const [showBalance, setShowBalance] = useState(true);

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.bankName}>
                    <Text style={styles.boldText}>Ryt</Text>Bank
                </Text>
                <View style={styles.rightIcons}>
                    <View style={styles.notification}>
                        <MaterialIcons name='10mp' size={20} color="#fff" />
                        <View style={styles.badge}><Text style={styles.badgeText}>5</Text></View>
                    </View>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/32x32' }}
                        style={styles.avatar}
                    />
                </View>
            </View>

            {/* Greeting */}
            <Text style={styles.greeting}>Good Evening</Text>
            <Text style={styles.username}>Fatimah Azzahrah</Text>

            {/* Account Balance Card */}
            <View style={styles.balanceCard}>
                <View style={styles.balanceTop}>
                    <Text style={styles.balanceTitle}>Account Balance</Text>
                </View>
                <View style={styles.balanceValueRow}>
                    <Text style={styles.balanceAmount}>
                        {showBalance ? 'RM 2500' : '••••••'}
                    </Text>
                    <TouchableOpacity onPress={() => setShowBalance((prev) => !prev)}>
                        <MaterialIcons
                            name={showBalance ? 'remove-red-eye' : 'visibility-off'}
                            size={20}
                            color="#fff"
                            style={styles.showPassword}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.actionRow}>
                    {actions.map((action, index) => (
                        <TouchableOpacity key={index} style={styles.actionButton}>
                            <MaterialIcons name={action.icon} size={20} color="#fff" />
                            <Text style={styles.actionLabel}>{action.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Promos & Reminders */}
            <Text style={styles.sectionTitle}>Promos & Reminders</Text>
            <View style={styles.promosContainer}>
                <View style={styles.promoCard}>
                    <Text style={styles.promoAmount}>$15.25</Text>
                    <Text style={styles.promoText}>every non-cash transactions</Text>
                </View>
                <View style={styles.promoCard}>
                    <Text style={styles.promoAmount}>$18.00</Text>
                    <Text style={styles.promoText}>giving activity this month</Text>
                </View>
            </View>
        </ScrollView>
    );
};

type MaterialIconName =
    | "arrow-downward"
    | "send"
    | "arrow-upward"
    | "shopping-cart";

const actions: { label: string; icon: MaterialIconName }[] = [
    { label: 'Transfer', icon: 'send' },
    { label: 'Withdraw', icon: 'arrow-downward' },
    { label: 'Deposit', icon: 'arrow-upward' },
    { label: 'Pay & Buy', icon: 'shopping-cart' },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    showPassword: {
        marginLeft: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bankName: {
        fontSize: 22,
        color: '#fff',
    },
    boldText: {
        fontWeight: 'bold',
        color: '#0101e5',
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notification: {
        marginRight: 15,
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: -6,
        right: -8,
        backgroundColor: '#FACC15',
        borderRadius: 10,
        paddingHorizontal: 4,
    },
    badgeText: {
        fontSize: 10,
        color: '#000',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#ddd',
    },
    greeting: {
        color: '#CBD5E1',
        marginTop: 20,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    balanceCard: {
        backgroundColor: '#0101e5',
        borderRadius: 32,
        padding: 20,
        marginBottom: 20,
    },
    balanceTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    balanceTitle: {
        color: '#fff',
        fontSize: 14,
    },
    balanceValueRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    balanceAmount: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    actionButton: {
        alignItems: 'center',
        flex: 1,
    },
    actionLabel: {
        marginTop: 6,
        fontSize: 12,
        color: '#fff',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 10,
    },
    promosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    promoCard: {
        backgroundColor: '#F8FAFC',
        padding: 16,
        borderRadius: 12,
        width: '48%',
    },
    promoAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 4,
    },
    promoText: {
        fontSize: 12,
        color: '#475569',
    },
    activityPlaceholder: {
        backgroundColor: '#F1F5F9',
        padding: 20,
        borderRadius: 12,
        marginBottom: 40,
        alignItems: 'center',
    },
    activityText: {
        color: '#64748B',
    },
});

export default BankDashboard;